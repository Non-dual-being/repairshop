import {withSentryConfig} from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {

};

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: "geofort",

  project: "repairshop",

  // Only print logs for uploading source maps in CI
  silent: false, //todo: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  // tunnelRoute: "/monitoring",

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,

  authToken: process.env.SENTRY_AUTH_TOKEN,
});

/**
 * CI staat voor Continois Integrationm
 * Automatisch testen bij ioploads, commits en builds
 */


/**
 * 📌 Verschil tussen `npm run dev` en CI/CD
 *
 * ──────────────────────────────────────────────
 * 🔹 LOKAAL (npm run dev)
 * - Draait op jouw eigen computer.
 * - Leest env-variabelen uit:
 *    1. .env.development.local
 *    2. .env.local   ← (meest gebruikt voor lokale dev)
 *    3. .env.development
 *    4. .env
 * - Heeft GEEN toegang tot GitHub Actions Secrets.
 * - Doel: ontwikkelen met hot-reloading en debuggen.
 *
 * ──────────────────────────────────────────────
 * 🔹 CI/CD (bijv. GitHub Actions build)
 * - Draait op een externe build-server (GitHub, GitLab, Vercel, etc.).
 * - Leest env-variabelen uit de CI/CD omgeving:
 *    - Repository Secrets (GitHub)
 *    - Environment Variables die in hosting zijn ingesteld
 * - Gebruikt GEEN .env.local (tenzij per ongeluk gecommit).
 * - Doel: code automatisch bouwen, testen en deployen bij push/PR.
 *
 * ──────────────────────────────────────────────
 * 💡 Belangrijk:
 * - Lokaal: gebruik `.env.local` voor gevoelige keys (staat in `.gitignore`).
 * - CI/CD: zet dezelfde variabelen in GitHub Secrets of hostingomgeving.
 * - Nooit gevoelige data prefixen met `NEXT_PUBLIC_` (dat lekt naar de browser).
 */
