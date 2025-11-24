import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://04f5792e052287884af6bd23f0a28515@o4510421918220288.ingest.us.sentry.io/4510421922152448",
  integrations: [
    nodeProfilingIntegration(),
    Sentry.mongoIntegration(),
  ],
//   tracesSampleRate: 1.0,
  sendDefaultPii: true,
});
