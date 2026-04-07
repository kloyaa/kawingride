"use client";

import { useEffect, useRef, useState } from "react";

const OTP_LENGTH = 6;
const OTP_CODE = "123456";
const RESEND_SECONDS = 120;

type FormValues = {
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
};

type FieldErrors = Partial<Record<keyof FormValues, string>>;

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

export function AccessRequestForm() {
  const [values, setValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [otpDigits, setOtpDigits] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [otpError, setOtpError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [secondsRemaining, setSecondsRemaining] = useState(RESEND_SECONDS);

  const otpRefs = useRef<Array<HTMLInputElement | null>>([]);
  const lastSubmittedOtp = useRef("");
  const currentStep = successMessage ? 3 : isOtpVisible ? 2 : 1;
  const steps = [
    { description: "Enter your personal information", title: "Personal" },
    { description: "Enter the code sent to your mobile", title: "Verify" },
    { description: "Check your email for the access link", title: "Success" },
  ];

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

    return nextErrors;
  }

  function updateField<K extends keyof FormValues>(field: K, value: string) {
    setValues((current) => ({
      ...current,
      [field]: field === "mobile" ? normalizePhilippineMobile(value) : value,
    }));
    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateFields(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setIsOtpVisible(false);
      setSuccessMessage("");
      return;
    }

    setIsOtpVisible(true);
    setOtpError("");
    setSuccessMessage("");
    setOtpDigits(Array(OTP_LENGTH).fill(""));
    setSecondsRemaining(RESEND_SECONDS);
    lastSubmittedOtp.current = "";

    window.requestAnimationFrame(() => {
      otpRefs.current[0]?.focus();
    });
  }

  function verifyOtp(nextOtpValue: string) {
    if (nextOtpValue.length !== OTP_LENGTH || nextOtpValue === lastSubmittedOtp.current) {
      return;
    }

    lastSubmittedOtp.current = nextOtpValue;

    if (nextOtpValue === OTP_CODE) {
      setOtpError("");
      setSuccessMessage(`The access link has been sent to ${values.email.trim()}.`);
      return;
    }

    setSuccessMessage("");
    setOtpError("The verification code is incorrect. Please try again.");
  }

  function handleOtpChange(index: number, rawValue: string) {
    const digit = rawValue.replace(/\D/g, "").slice(-1);

    setOtpError("");
    setSuccessMessage("");
    lastSubmittedOtp.current = "";
    const nextDigits = [...otpDigits];
    nextDigits[index] = digit;
    setOtpDigits(nextDigits);

    if (digit && index < OTP_LENGTH - 1) {
      otpRefs.current[index + 1]?.focus();
    }

    if (!nextDigits.includes("")) {
      verifyOtp(nextDigits.join(""));
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
    setSuccessMessage("");
    lastSubmittedOtp.current = "";
    const nextDigits = Array.from({ length: OTP_LENGTH }, (_, index) => digits[index] ?? "");
    setOtpDigits(nextDigits);

    const nextIndex = Math.min(digits.length, OTP_LENGTH - 1);
    otpRefs.current[nextIndex]?.focus();

    if (!nextDigits.includes("")) {
      verifyOtp(nextDigits.join(""));
    }
  }

  function handleResend() {
    setSecondsRemaining(RESEND_SECONDS);
    setOtpDigits(Array(OTP_LENGTH).fill(""));
    setOtpError("");
    setSuccessMessage("");
    lastSubmittedOtp.current = "";
    otpRefs.current[0]?.focus();
  }

  return (
    <div className="space-y-6">
      <form noValidate onSubmit={handleFormSubmit} className="space-y-6">
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
              className={[
                "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 dark:bg-slate-950 dark:text-white",
                errors.firstName
                  ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100 dark:border-red-500/40 dark:focus:ring-red-500/15"
                  : "border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 dark:border-slate-800 dark:focus:ring-brand-500/15",
              ].join(" ")}
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
              className={[
                "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 dark:bg-slate-950 dark:text-white",
                errors.lastName
                  ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100 dark:border-red-500/40 dark:focus:ring-red-500/15"
                  : "border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 dark:border-slate-800 dark:focus:ring-brand-500/15",
              ].join(" ")}
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
              className={[
                "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 dark:bg-slate-950 dark:text-white",
                errors.mobile
                  ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100 dark:border-red-500/40 dark:focus:ring-red-500/15"
                  : "border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 dark:border-slate-800 dark:focus:ring-brand-500/15",
              ].join(" ")}
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
              className={[
                "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 dark:bg-slate-950 dark:text-white",
                errors.email
                  ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100 dark:border-red-500/40 dark:focus:ring-red-500/15"
                  : "border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 dark:border-slate-800 dark:focus:ring-brand-500/15",
              ].join(" ")}
              placeholder="name@example.com"
            />
            {errors.email ? <p className="text-sm text-red-600 dark:text-red-300">{errors.email}</p> : null}
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-2xl bg-brand-700 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-900/10 transition hover:bg-brand-800 sm:w-auto"
        >
          Submit
        </button>
      </form>

      {isOtpVisible ? (
        <section className="rounded-[2rem] border border-brand-100 bg-brand-50/70 p-5 shadow-sm dark:border-brand-500/20 dark:bg-brand-500/10 sm:p-6">
          {successMessage ? (
            <div className="rounded-[1.6rem] border border-emerald-200 bg-emerald-50 px-5 py-5 dark:border-emerald-500/20 dark:bg-emerald-500/10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
                Access confirmed
              </p>
              <h3 className="mt-2 font-display text-2xl font-extrabold text-slate-950 dark:text-white">
                Verification completed successfully.
              </h3>
              <p className="mt-3 text-sm leading-7 text-emerald-800 dark:text-emerald-100">{successMessage}</p>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700 dark:text-brand-300">
                    Verify access
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-extrabold text-slate-950 dark:text-white">
                    Enter the 6-digit verification code.
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    For this access flow demo, use <span className="font-semibold text-slate-900 dark:text-white">123456</span>.
                  </p>
                </div>
                <div className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 ring-1 ring-slate-200 dark:bg-slate-950 dark:text-slate-300 dark:ring-slate-700">
                  Resend in {formatCountdown(secondsRemaining)}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3" onPaste={handleOtpPaste}>
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
                    className="h-14 w-12 rounded-2xl border border-brand-200 bg-white text-center font-display text-xl font-bold text-slate-950 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100 dark:border-brand-500/20 dark:bg-slate-950 dark:text-white dark:focus:ring-brand-500/15 sm:h-16 sm:w-14"
                  />
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={secondsRemaining > 0}
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition disabled:cursor-not-allowed disabled:opacity-50 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900"
                >
                  Resend code
                </button>
                <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Verification will submit automatically once all six digits are entered.
                </p>
              </div>
            </>
          )}

          {otpError ? (
            <p className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-200">
              {otpError}
            </p>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}
