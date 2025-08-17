// instrumentation.ts
import * as Sentry from "@sentry/nextjs";

export const onRequestError = Sentry.captureRequestError;

export async function register() {
  const isProd = process.env.NODE_ENV === "production";
  const base = {
    dsn: process.env.SENTRY_DSN,// zet DSN in .env(.local)
    tracesSampleRate: isProd ? 0.1 : 1,
    profilesSampleRate: isProd ? 0.1 :1,
    enableLogs: true,
    debug: false,
  };

  if (process.env.NEXT_RUNTIME === "nodejs") {
    Sentry.init(base);       // server runtime
  } else if (process.env.NEXT_RUNTIME === "edge") {
    Sentry.init(base);       // edge runtime
  }
}


/**
 * (Optioneel, aanbevolen bij Next 15 + @sentry/nextjs >= 8.28.0)
 * Zorg dat nested RSC-errors ook worden opgepikt:
 */
