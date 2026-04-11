import "server-only";

type SiteSettings = {
  customerServiceEmail: string;
  customerServiceEmailHref: string;
  emergencyAdminMobile: string;
  emergencyAdminMobileHref: string;
  footerCredit: string;
  generalInquiryEmail: string;
  generalInquiryEmailHref: string;
  partnershipsEmail: string;
  partnershipsEmailHref: string;
  privacyEmail: string;
  privacyEmailHref: string;
  updatesEmail: string;
  updatesEmailHref: string;
};

function getEnvValue(key: keyof NodeJS.ProcessEnv, fallback: string) {
  const value = process.env[key]?.trim();

  return value && value.length > 0 ? value : fallback;
}

function toMailto(value: string) {
  return `mailto:${value}`;
}

function toTelephoneHref(value: string) {
  const normalized = value.replace(/[^\d+]/g, "");

  return `tel:${normalized || value}`;
}

export function getSiteSettings(): SiteSettings {
  const generalInquiryEmail = getEnvValue("KAWING_RIDE_GENERAL_EMAIL", "hello@kawingride.com");
  const customerServiceEmail = getEnvValue("KAWING_RIDE_CUSTOMER_SERVICE_EMAIL", "customerservice@kawingride.com");
  const privacyEmail = getEnvValue("KAWING_RIDE_PRIVACY_EMAIL", "privacy@kawingride.com");
  const partnershipsEmail = getEnvValue("KAWING_RIDE_PARTNERSHIPS_EMAIL", generalInquiryEmail);
  const updatesEmail = getEnvValue("KAWING_RIDE_UPDATES_EMAIL", generalInquiryEmail);
  const emergencyAdminMobile = getEnvValue("KAWING_RIDE_EMERGENCY_ADMIN_MOBILE", "+63 917 000 0000");
  const footerCredit = getEnvValue("KAWING_RIDE_FOOTER_CREDIT", "Niks");

  return {
    customerServiceEmail,
    customerServiceEmailHref: toMailto(customerServiceEmail),
    emergencyAdminMobile,
    emergencyAdminMobileHref: toTelephoneHref(emergencyAdminMobile),
    footerCredit,
    generalInquiryEmail,
    generalInquiryEmailHref: toMailto(generalInquiryEmail),
    partnershipsEmail,
    partnershipsEmailHref: toMailto(partnershipsEmail),
    privacyEmail,
    privacyEmailHref: toMailto(privacyEmail),
    updatesEmail,
    updatesEmailHref: toMailto(updatesEmail),
  };
}
