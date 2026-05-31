// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// ─────────────────────────────────────────────────────────────────────────────
// GitHub Pages configuration — custom domain northstowevc.uk
//
// The site is served at the root of the custom domain, so there is NO `base`
// path (assets live at /_astro/… not /northstowevc/_astro/…).
//
// The domain is set via public/CNAME (copied into the build → tells GitHub Pages
// to serve at northstowevc.uk). After the first deploy, configure the DNS for
// northstowevc.uk to point at GitHub Pages (see README) and tick "Enforce HTTPS"
// in the repo's Settings → Pages.
// ─────────────────────────────────────────────────────────────────────────────
export default defineConfig({
  site: "https://northstowevc.uk",
  vite: {
    plugins: [tailwindcss()],
  },
});
