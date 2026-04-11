"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { Icon } from "@/components/landing/icons";
import { useToast } from "@/components/ui/toast-provider";
import { allowedServiceAreas } from "@/constants/service-areas";

const OTP_LENGTH = 6;
const OTP_CODE = "123456";
const RESEND_SECONDS = 120;

type FormValues = {
  agreesToPolicies: boolean;
  communityName: string;
  confirmsAuthority: boolean;
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  municipalityOrCityId: string;
  provinceId: string;
  regionId: string;
};

type FieldErrors = Partial<Record<keyof FormValues, string>>;

type LocationField = "municipalityOrCityId" | "provinceId" | "regionId";

function normalizePhilippineMobile(value: string) {
  let digits = value.replace(/\D/g, "");

  if (digits.startsWith("63")) {
    digits = digits.slice(2);
  }

  if (digits.startsWith("0")) {
    digits = digits.slice(1);
  }

  digits = digits.slice(0, 10);

  if (!digits) {
    return "";
  }

  const groupOne = digits.slice(0, 3);
  const groupTwo = digits.slice(3, 7);
  const groupThree = digits.slice(7, 10);

  return ["+63", groupOne, groupTwo, groupThree].filter(Boolean).join(" ");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhilippineMobile(value: string) {
  return /^\+63 9\d{2} \d{4} \d{3}$/.test(value);
}

function formatCountdown(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function getFieldClassName(hasError: boolean, isDisabled = false) {
  return [
    "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 dark:bg-slate-950 dark:text-white",
    isDisabled ? "cursor-not-allowed opacity-70" : "",
    hasError
      ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100 dark:border-red-500/40 dark:focus:ring-red-500/15"
      : "border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 dark:border-slate-800 dark:focus:ring-brand-500/15",
  ].join(" ");
}

const initialFormValues: FormValues = {
  agreesToPolicies: false,
  communityName: "",
  confirmsAuthority: false,
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  municipalityOrCityId: "",
  provinceId: "",
  regionId: "",
};

export function AccessRequestForm() {
  const { success: showSuccessToast } = useToast();
  const [values, setValues] = useState<FormValues>(initialFormValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [hasMounted, setHasMounted] = useState(false);
  const [isReviewVisible, setIsReviewVisible] = useState(false);
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [otpDigits, setOtpDigits] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [otpError, setOtpError] = useState("");
  const [showReviewScrollHint, setShowReviewScrollHint] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(RESEND_SECONDS);

  const otpRefs = useRef<Array<HTMLInputElement | null>>([]);
  const formRootRef = useRef<HTMLDivElement | null>(null);
  const reviewModalRef = useRef<HTMLDivElement | null>(null);
  const lastSubmittedOtp = useRef("");
  const regionOptions = allowedServiceAreas.map(({ id, label }) => ({ id, label }));
  const selectedRegionConfig = allowedServiceAreas.find((item) => item.id === values.regionId);
  const provinceOptions = selectedRegionConfig?.provinces ?? [];
  const selectedProvinceConfig = provinceOptions.find((item) => item.id === values.provinceId);
  const cityOptions = selectedProvinceConfig?.cities ?? [];
  const selectedRegion = selectedRegionConfig?.label ?? "Not selected";
  const selectedProvince = selectedProvinceConfig?.label ?? "Not selected";
  const selectedMunicipality = cityOptions.find((item) => item.id === values.municipalityOrCityId)?.label ?? "Not selected";

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setHasMounted(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!isReviewVisible && !isOtpVisible) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isOtpVisible) {
          setIsOtpVisible(false);
          return;
        }

        setIsReviewVisible(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOtpVisible, isReviewVisible]);

  useEffect(() => {
    if (!isReviewVisible) {
      return;
    }

    const modalElement = reviewModalRef.current;

    if (!modalElement) {
      return;
    }

    const updateHint = () => {
      const isMobileViewport = window.innerWidth < 640;
      const isScrollable = modalElement.scrollHeight > modalElement.clientHeight + 12;
      const isNearTop = modalElement.scrollTop < 24;

      setShowReviewScrollHint(isMobileViewport && isScrollable && isNearTop);
    };

    const frame = window.requestAnimationFrame(updateHint);
    const handleResize = () => updateHint();
    const handleScroll = () => updateHint();

    window.addEventListener("resize", handleResize);
    modalElement.addEventListener("scroll", handleScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
      modalElement.removeEventListener("scroll", handleScroll);
    };
  }, [isReviewVisible]);

  useEffect(() => {
    if (!isOtpVisible || secondsRemaining <= 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setSecondsRemaining((current) => {
        if (current <= 1) {
          window.clearInterval(timer);
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isOtpVisible, secondsRemaining]);

  function validateFields(nextValues: FormValues) {
    const nextErrors: FieldErrors = {};

    if (!nextValues.communityName.trim()) {
      nextErrors.communityName = "Enter the community name.";
    }

    if (!nextValues.firstName.trim()) {
      nextErrors.firstName = "Enter your first name.";
    }

    if (!nextValues.lastName.trim()) {
      nextErrors.lastName = "Enter your last name.";
    }

    if (!isValidPhilippineMobile(nextValues.mobile)) {
      nextErrors.mobile = "Mobile No. format +63 9XX XXXX XXX.";
    }

    if (!isValidEmail(nextValues.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!nextValues.regionId) {
      nextErrors.regionId = "Select your region.";
    }

    if (!nextValues.provinceId) {
      nextErrors.provinceId = "Select your province.";
    }

    if (!nextValues.municipalityOrCityId) {
      nextErrors.municipalityOrCityId = "Select your municipality or city.";
    }

    if (!nextValues.confirmsAuthority) {
      nextErrors.confirmsAuthority = "Confirm that you are authorized to request admin access.";
    }

    if (!nextValues.agreesToPolicies) {
      nextErrors.agreesToPolicies = "You must agree to the Terms of Service and Privacy Policy.";
    }

    return nextErrors;
  }

  function updateField<K extends keyof FormValues>(field: K, value: string) {
    setValues((current) => {
      const nextValue =
        field === "mobile"
          ? normalizePhilippineMobile(value as string)
          : value;
      const nextValues = {
        ...current,
        [field]: nextValue,
      };

      if (field === "regionId") {
        nextValues.provinceId = "";
        nextValues.municipalityOrCityId = "";
      }

      if (field === "provinceId") {
        nextValues.municipalityOrCityId = "";
      }

      return nextValues;
    });
    setErrors((current) => {
      const nextErrors = {
        ...current,
        [field]: undefined,
      };

      if (field === "regionId") {
        nextErrors.provinceId = undefined;
        nextErrors.municipalityOrCityId = undefined;
      }

      if (field === "provinceId") {
        nextErrors.municipalityOrCityId = undefined;
      }

      return nextErrors;
    });
  }

  function updateToggle<K extends "agreesToPolicies" | "confirmsAuthority">(field: K, checked: boolean) {
    setValues((current) => ({
      ...current,
      [field]: checked,
    }));
    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  }

  function getLocationPlaceholder(field: LocationField) {
    if (field === "regionId") {
      return "Select a region";
    }

    if (field === "provinceId") {
      if (!values.regionId) {
        return "Select a region first";
      }

      return "Select a province";
    }

    if (!values.provinceId) {
      return "Select a province first";
    }

    return "Select a city";
  }

  function openOtpStep() {
    setIsReviewVisible(false);
    setIsOtpVisible(true);
    setOtpError("");
    setOtpDigits(Array(OTP_LENGTH).fill(""));
    setSecondsRemaining(RESEND_SECONDS);
    lastSubmittedOtp.current = "";

    window.requestAnimationFrame(() => {
      otpRefs.current[0]?.focus();
    });
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateFields(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setIsReviewVisible(false);
      setIsOtpVisible(false);
      window.requestAnimationFrame(() => {
        formRootRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
      return;
    }

    setIsOtpVisible(false);
    setOtpError("");
    setIsReviewVisible(true);
  }

  function verifyOtp(nextOtpValue: string) {
    if (nextOtpValue.length !== OTP_LENGTH || nextOtpValue === lastSubmittedOtp.current) {
      return;
    }

    lastSubmittedOtp.current = nextOtpValue;

    if (nextOtpValue === OTP_CODE) {
      setOtpError("");
      setIsOtpVisible(false);
      showSuccessToast("Access confirmed", `The admin access link has been sent to ${values.email.trim()}.`);
      setValues(initialFormValues);
      setErrors({});
      setIsReviewVisible(false);
      setOtpDigits(Array(OTP_LENGTH).fill(""));
      setSecondsRemaining(RESEND_SECONDS);
      lastSubmittedOtp.current = "";
      return;
    }

    setOtpError("The verification code is incorrect. Please try again.");
  }

  function handleOtpChange(index: number, rawValue: string) {
    const digit = rawValue.replace(/\D/g, "").slice(-1);

    setOtpError("");
    lastSubmittedOtp.current = "";
    const nextDigits = [...otpDigits];
    nextDigits[index] = digit;
    setOtpDigits(nextDigits);

    if (digit && index < OTP_LENGTH - 1) {
      otpRefs.current[index + 1]?.focus();
    }

  }

  function handleOtpKeyDown(index: number, event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace" && !otpDigits[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowLeft" && index > 0) {
      event.preventDefault();
      otpRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowRight" && index < OTP_LENGTH - 1) {
      event.preventDefault();
      otpRefs.current[index + 1]?.focus();
    }
  }

  function handleOtpPaste(event: React.ClipboardEvent<HTMLDivElement>) {
    event.preventDefault();

    const digits = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH).split("");

    if (!digits.length) {
      return;
    }

    setOtpError("");
    lastSubmittedOtp.current = "";
    const nextDigits = Array.from({ length: OTP_LENGTH }, (_, index) => digits[index] ?? "");
    setOtpDigits(nextDigits);

    const nextIndex = Math.min(digits.length, OTP_LENGTH - 1);
    otpRefs.current[nextIndex]?.focus();
  }

  function handleResend() {
    setSecondsRemaining(RESEND_SECONDS);
    setOtpDigits(Array(OTP_LENGTH).fill(""));
    setOtpError("");
    lastSubmittedOtp.current = "";
    otpRefs.current[0]?.focus();
  }

  return (
    <div ref={formRootRef} className="space-y-6">
      <form noValidate onSubmit={handleFormSubmit} className="space-y-6">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label htmlFor="community-name" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Community name
            </label>
            <Link
              href="/communities"
              className="text-xs font-semibold text-brand-700 underline decoration-brand-200 underline-offset-4 transition hover:text-brand-800 dark:text-brand-300 dark:decoration-brand-500/40 dark:hover:text-brand-200"
            >
              See communities
            </Link>
          </div>
          <input
            id="community-name"
            type="text"
            autoComplete="organization"
            value={values.communityName}
            onChange={(event) => updateField("communityName", event.target.value)}
            className={getFieldClassName(Boolean(errors.communityName))}
            placeholder="Enter the community name"
          />
          <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
            Use the official name of the organization, transport group, or local network tied to this admin request.
          </p>
          {errors.communityName ? <p className="text-sm text-red-600 dark:text-red-300">{errors.communityName}</p> : null}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="first-name" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              First name
            </label>
            <input
              id="first-name"
              type="text"
              autoComplete="given-name"
              value={values.firstName}
              onChange={(event) => updateField("firstName", event.target.value)}
              className={getFieldClassName(Boolean(errors.firstName))}
              placeholder="Enter your first name"
            />
            {errors.firstName ? <p className="text-sm text-red-600 dark:text-red-300">{errors.firstName}</p> : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="last-name" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Last name
            </label>
            <input
              id="last-name"
              type="text"
              autoComplete="family-name"
              value={values.lastName}
              onChange={(event) => updateField("lastName", event.target.value)}
              className={getFieldClassName(Boolean(errors.lastName))}
              placeholder="Enter your last name"
            />
            {errors.lastName ? <p className="text-sm text-red-600 dark:text-red-300">{errors.lastName}</p> : null}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="mobile" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Mobile number
            </label>
            <input
              id="mobile"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={values.mobile}
              onChange={(event) => updateField("mobile", event.target.value)}
              className={getFieldClassName(Boolean(errors.mobile))}
              placeholder="+63 9XX XXXX XXX"
            />
            {errors.mobile ? <p className="text-sm text-red-600 dark:text-red-300">{errors.mobile}</p> : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(event) => updateField("email", event.target.value)}
              className={getFieldClassName(Boolean(errors.email))}
              placeholder="name@example.com"
            />
            {errors.email ? <p className="text-sm text-red-600 dark:text-red-300">{errors.email}</p> : null}
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-slate-200/80 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/40 sm:p-5">
          <div className="mb-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
              Service area
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Choose the approved region, province, and city this admin will manage. We only accept selected service areas right now.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="region" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Region
              </label>
              <select
                id="region"
                value={values.regionId}
                onChange={(event) => updateField("regionId", event.target.value)}
                className={getFieldClassName(Boolean(errors.regionId))}
              >
                <option value="">{getLocationPlaceholder("regionId")}</option>
                {regionOptions.map((region) => (
                  <option key={region.id} value={region.id}>
                    {region.label}
                  </option>
                ))}
              </select>
              {errors.regionId ? <p className="text-sm text-red-600 dark:text-red-300">{errors.regionId}</p> : null}
            </div>

            <div className="space-y-2">
              <label htmlFor="province" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Province
              </label>
              <select
                id="province"
                value={values.provinceId}
                onChange={(event) => updateField("provinceId", event.target.value)}
                disabled={!values.regionId}
                className={getFieldClassName(Boolean(errors.provinceId), !values.regionId)}
              >
                <option value="">{getLocationPlaceholder("provinceId")}</option>
                {provinceOptions.map((province) => (
                  <option key={province.id} value={province.id}>
                    {province.label}
                  </option>
                ))}
              </select>
              {errors.provinceId ? <p className="text-sm text-red-600 dark:text-red-300">{errors.provinceId}</p> : null}
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <label htmlFor="municipality-or-city" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              City
            </label>
            <select
              id="municipality-or-city"
              value={values.municipalityOrCityId}
              onChange={(event) => updateField("municipalityOrCityId", event.target.value)}
              disabled={!values.provinceId}
              className={getFieldClassName(Boolean(errors.municipalityOrCityId), !values.provinceId)}
            >
              <option value="">{getLocationPlaceholder("municipalityOrCityId")}</option>
              {cityOptions.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.label}
                </option>
              ))}
            </select>
            {errors.municipalityOrCityId ? (
              <p className="text-sm text-red-600 dark:text-red-300">{errors.municipalityOrCityId}</p>
            ) : null}
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-slate-200/80 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/40 sm:p-5">
          <div className="mb-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
              Agreements
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Admin access requests should confirm authorization and acknowledge the platform rules before verification.
            </p>
          </div>

          <div className="space-y-4">
            <label className="flex items-start gap-3 rounded-[1.4rem] border border-slate-200 bg-white/80 px-4 py-4 dark:border-slate-800 dark:bg-slate-950/65">
              <input
                type="checkbox"
                checked={values.confirmsAuthority}
                onChange={(event) => updateToggle("confirmsAuthority", event.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-700 focus:ring-brand-500"
              />
              <span className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                I confirm that I am authorized to request admin access for this community and that the information I
                provided is accurate.
              </span>
            </label>
            {errors.confirmsAuthority ? (
              <p className="text-sm text-red-600 dark:text-red-300">{errors.confirmsAuthority}</p>
            ) : null}

            <label className="flex items-start gap-3 rounded-[1.4rem] border border-slate-200 bg-white/80 px-4 py-4 dark:border-slate-800 dark:bg-slate-950/65">
              <input
                type="checkbox"
                checked={values.agreesToPolicies}
                onChange={(event) => updateToggle("agreesToPolicies", event.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-700 focus:ring-brand-500"
              />
              <span className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                I agree to the{" "}
                <Link
                  href="/terms"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-brand-700 underline decoration-brand-200 underline-offset-4 dark:text-brand-300 dark:decoration-brand-500/40"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-brand-700 underline decoration-brand-200 underline-offset-4 dark:text-brand-300 dark:decoration-brand-500/40"
                >
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
            {errors.agreesToPolicies ? (
              <p className="text-sm text-red-600 dark:text-red-300">{errors.agreesToPolicies}</p>
            ) : null}
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-2xl bg-brand-700 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-900/10 transition hover:bg-brand-800 sm:w-auto"
        >
          Review details
        </button>
      </form>

      {hasMounted && isReviewVisible
        ? createPortal(
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/45 px-4 py-8 backdrop-blur-sm">
              <div
                className="absolute inset-0"
                onClick={() => setIsReviewVisible(false)}
                aria-hidden="true"
              />
              <div className="relative w-full max-w-2xl">
                <div className="surface-panel relative flex max-h-[90vh] flex-col overflow-hidden rounded-[2rem] shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                  <div className="flex items-start justify-between gap-4 border-b border-slate-200/80 px-5 py-5 dark:border-slate-800 sm:px-6 sm:py-6">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                        Review details
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-extrabold text-slate-950 dark:text-white sm:text-3xl">
                        Confirm your details before verification.
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        Check the details below. Once confirmed, we’ll send the verification code for the next step.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsReviewVisible(false)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-200"
                      aria-label="Close review"
                    >
                      ×
                    </button>
                  </div>

                  <div
                    ref={reviewModalRef}
                    className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6"
                  >
                    <div className="grid gap-2">
                      {[
                        { label: "Authorization confirmed", value: values.confirmsAuthority ? "Yes" : "No" },
                        {
                          label: "Terms of Service and Privacy Policy accepted",
                          value: values.agreesToPolicies ? "Yes" : "No",
                        },
                        { label: "Community name", value: values.communityName.trim() || "Not provided" },
                        { label: "Admin first name", value: values.firstName.trim() || "Not provided" },
                        { label: "Admin last name", value: values.lastName.trim() || "Not provided" },
                        { label: "Mobile number", value: values.mobile || "Not provided" },
                        { label: "Email address", value: values.email.trim() || "Not provided" },
                        { label: "Region", value: selectedRegion },
                        { label: "Province", value: selectedProvince },
                        { label: "City", value: selectedMunicipality },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="grid gap-1 rounded-[1.1rem] border border-slate-200 bg-white/80 px-3.5 py-3 dark:border-slate-800 dark:bg-slate-950/65 sm:grid-cols-[13rem_minmax(0,1fr)] sm:items-start sm:gap-3"
                        >
                          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                            {item.label}
                          </p>
                          <p className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-200/80 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-950 sm:px-6 sm:py-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                      <button
                        type="button"
                        onClick={() => setIsReviewVisible(false)}
                        className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900"
                      >
                        Edit details
                      </button>
                      <button
                        type="button"
                        onClick={openOtpStep}
                        className="inline-flex items-center justify-center rounded-2xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/10 transition hover:bg-brand-800"
                      >
                        Confirm and continue
                      </button>
                    </div>
                  </div>
                </div>

                {showReviewScrollHint ? (
                  <div className="pointer-events-none absolute inset-x-0 bottom-5 flex justify-center sm:hidden">
                    <span className="inline-flex animate-bounce items-center gap-2 rounded-full bg-slate-950/78 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white shadow-lg backdrop-blur">
                      <Icon name="arrow-down" className="h-3.5 w-3.5" />
                      <span>Scroll down</span>
                    </span>
                  </div>
                ) : null}
              </div>
            </div>,
            document.body
          )
        : null}

      {hasMounted && isOtpVisible
        ? createPortal(
            <div className="fixed inset-0 z-[110] bg-slate-950/70 backdrop-blur-md">
              <div className="surface-panel relative flex h-[100dvh] w-screen items-center justify-center overflow-hidden rounded-none px-6 py-8 sm:px-8">
                <button
                  type="button"
                  onClick={() => setIsOtpVisible(false)}
                  className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-200"
                  aria-label="Close verification"
                >
                  ×
                </button>

                <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                    Verify admin request
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">
                    Enter the 6-digit verification code.
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                    We are sending the verification step to{" "}
                    <span className="font-semibold text-slate-900 dark:text-white">{values.email.trim()}</span>. For
                    this access flow demo, use{" "}
                    <span className="font-semibold text-slate-900 dark:text-white">123456</span>.
                  </p>

                  <div className="mt-5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-600 ring-1 ring-slate-200 dark:bg-slate-950 dark:text-slate-300 dark:ring-slate-700">
                    Resend in {formatCountdown(secondsRemaining)}
                  </div>

                  <div className="mt-8 flex flex-wrap justify-center gap-3" onPaste={handleOtpPaste}>
                    {otpDigits.map((digit, index) => (
                      <input
                        key={`otp-${index}`}
                        ref={(element) => {
                          otpRefs.current[index] = element;
                        }}
                        type="text"
                        inputMode="numeric"
                        autoComplete={index === 0 ? "one-time-code" : "off"}
                        maxLength={1}
                        value={digit}
                        onChange={(event) => handleOtpChange(index, event.target.value)}
                        onKeyDown={(event) => handleOtpKeyDown(index, event)}
                        aria-label={`OTP digit ${index + 1}`}
                        className="h-16 w-12 rounded-2xl border border-brand-200 bg-white text-center font-display text-2xl font-bold text-slate-950 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100 dark:border-brand-500/20 dark:bg-slate-950 dark:text-white dark:focus:ring-brand-500/15 sm:h-20 sm:w-16 sm:text-3xl"
                      />
                    ))}
                  </div>

                  {otpError ? (
                    <p className="mt-5 w-full max-w-xl rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-200">
                      {otpError}
                    </p>
                  ) : null}

                  <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => verifyOtp(otpDigits.join(""))}
                      disabled={otpDigits.includes("")}
                      className="inline-flex flex-1 items-center justify-center rounded-2xl bg-brand-700 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-900/10 transition hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Send code
                    </button>
                    <button
                      type="button"
                      onClick={handleResend}
                      disabled={secondsRemaining > 0}
                      className="inline-flex flex-1 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition disabled:cursor-not-allowed disabled:opacity-50 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900"
                    >
                      Resend code
                    </button>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </div>
  );
}
