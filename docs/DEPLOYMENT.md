# Deployment & Domain Ownership

How www.hadrongbs.com is hosted, who owns what, and how to deploy it.

## Ownership (as of November 2026)

| What | Where | Account |
|---|---|---|
| DNS for `hadrongbs.com` | Cloudflare | Logged in with **info@hadrongbs.com** |
| Website hosting | Cloudflare **Workers** (Workers & Pages) | Same Cloudflare account (info@hadrongbs.com) |
| Source code | GitHub `Quantum-Labs-Hadron-GBS/main-website` | Organization repo; `main` = production |
| Transactional email (contact & careers forms) | Resend, sending as `noreply@hadrongbs.com` | Resend account holding the `RESEND_API_KEY` |
| Mailboxes (`info@`, `quantum.lab@`) | Existing email provider (MX records in Cloudflare DNS) | — |

> **Planned:** the organization's domains are currently registered and managed under different email accounts. The plan is to move `hadrongbs.com` (and the other company domains) under a **single organization email account**. See *Account migration* below. Update this table when that happens.

## How the site runs

- Next.js 16 app, built for Cloudflare Workers with the OpenNext adapter (`@opennextjs/cloudflare`).
- Config: `wrangler.jsonc` (Worker name `hadron-gbs-website`) and `open-next.config.ts`.
- Pages are prerendered and served from the Worker's static assets (`staticAssetsIncrementalCache`); there is no R2/KV cache to provision.
- `CLOUDFLARE_BUILD=1` turns off Next.js image optimisation (Cloudinary URLs are already optimised), so no Cloudflare Images binding is needed.
- API routes: `/api/contact` and `/api/apply` (send email through Resend).
- `src/middleware.ts` redirects `hadrongbs.com` → `www.hadrongbs.com` and sends `X-Robots-Tag: noindex` on any non-hadrongbs.com host (`*.workers.dev`, previews), so only the real domain is indexed.

### Commands

```bash
npm run cf:preview   # build for Workers and run locally on Cloudflare's runtime (http://localhost:8787)
npm run cf:deploy    # build and deploy to Cloudflare (needs `npx wrangler login` to the Cloudflare account)
```

### Worker size

The compressed Worker must stay under **3 MB on the Workers Free plan** (10 MB on Workers Paid). Check with:

```bash
npm run cf:build && npx wrangler deploy --dry-run --outdir /tmp/cf-dry
```

## Deploying through the Cloudflare dashboard (Git integration)

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Import a repository** → `Quantum-Labs-Hadron-GBS/main-website`.
2. Production branch: `main`.
3. Build command: `npx opennextjs-cloudflare build` with build variable `CLOUDFLARE_BUILD=1`; deploy command: `npx opennextjs-cloudflare deploy`.
4. **Settings → Variables and Secrets** → add `RESEND_API_KEY` (type: Secret). Without it the contact and careers forms return "Email service is not configured".
5. **Settings → Domains & Routes** → add custom domains **`www.hadrongbs.com`** and **`hadrongbs.com`** (the app redirects the apex to www).

## DNS cutover checklist (do not skip)

Moving the website does **not** require touching email. Before changing records:

- [ ] Export / screenshot the current DNS records in Cloudflare.
- [ ] **Leave MX, SPF (`TXT v=spf1…`), DKIM and DMARC records unchanged** — they carry `info@hadrongbs.com` email.
- [ ] Keep Resend's domain-verification records (DKIM/SPF for `hadrongbs.com`) so `noreply@hadrongbs.com` keeps sending.
- [ ] Keep records for other subdomains (e.g. `quantum.hadrongbs.com`).
- [ ] Only the `www` and apex (`@`) website records change, by attaching them as Worker custom domains.
- [ ] After cutover: open https://www.hadrongbs.com and https://hadrongbs.com (should redirect), submit the contact form once, send a test mail to info@.

## Cloudflare settings to check at launch

- **AI crawlers:** *Security → Bots → "Block AI bots"* and *managed robots.txt* must be **off** if the company wants to appear in ChatGPT, Perplexity, Gemini and Copilot answers. The site's own `robots.txt` allows all crawlers.
- **Rate limiting:** add a WAF rate-limiting rule for `POST /api/*` (e.g. 10 requests / minute / IP) to blunt form spam. Both forms also have a honeypot field.
- **SSL/TLS:** mode *Full (strict)*; *Always Use HTTPS* on.
- **Web Analytics:** enable Cloudflare Web Analytics for the site (Vercel Analytics was removed because it only works on Vercel).

## After launch (search visibility)

- Google Search Console: add the `hadrongbs.com` domain property (DNS TXT verification in Cloudflare) and submit `https://www.hadrongbs.com/sitemap.xml`.
- Bing Webmaster Tools: import from Search Console and submit the sitemap (Bing also powers ChatGPT search and Copilot).
- Old WordPress URLs are 301-redirected to the new pages (`next.config.ts`), so existing rankings carry over.
- `public/llms.txt` summarises the company for AI answer engines.

## Account migration (planned)

Goal: all organization domains, Cloudflare, GitHub and Resend owned by one organization email account.

1. Create/choose the organization account email.
2. Cloudflare: invite it as a **Super Administrator** on the account that holds `hadrongbs.com`, confirm it can see DNS and the Worker, then transfer ownership / remove the old login. (Zone moves between Cloudflare accounts require re-adding the zone — avoid unless necessary; transferring account membership keeps DNS and the Worker untouched.)
3. Domain registrar: update the registrant/admin contact email for `hadrongbs.com`.
4. Resend: add the new account as owner, or move the domain and rotate `RESEND_API_KEY` in the Worker secrets.
5. GitHub: confirm the organization owners.
6. Update the Ownership table above.
