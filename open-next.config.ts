// OpenNext config for Cloudflare Workers.
// The site is static marketing pages + a few API routes with no on-demand revalidation,
// so prerendered pages are served straight from the Worker's static assets (no R2/KV needed).
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
	incrementalCache: staticAssetsIncrementalCache,
});
