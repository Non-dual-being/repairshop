// sentry.client.config.ts
import * as Sentry from "@sentry/nextjs";

const isProd = process.env.NODE_ENV === "production";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: isProd ? 0.05 : 1,
  enableLogs: true,
  integrations: [Sentry.replayIntegration()],
  replaysSessionSampleRate: isProd ? 0.05 : 1,
  replaysOnErrorSampleRate: 1.0,
  debug: false,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;

/**
 * dit is server side
 * je mag je dsn hier publiekelij hebben hoeft niet
 */