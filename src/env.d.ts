/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly EMAIL_PROVIDER_API_KEY?: string;
  readonly EMAIL_FROM?: string;
  readonly RFQ_RECIPIENTS?: string;
  readonly RECRUITMENT_RECIPIENTS?: string;
  readonly TURNSTILE_SITE_KEY?: string;
  readonly TURNSTILE_SECRET_KEY?: string;
  readonly PUBLIC_ANALYTICS_ENDPOINT?: string;
  readonly PUBLIC_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
