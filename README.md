# Rinalds Dērics — Personal Brand & Website

Private monorepo holding the personal website and all of its source material.

## Layout

- `website/` — the static site (HTML/CSS/JS + assets). This is what gets deployed.
- `Personal Brand Text/` — CV, social metrics, ad-campaign data. Source of truth for all facts.
- `Personal Brand Photos/` — source photo library (originals).
- `Personal Brand Text/claude.md` — project rules and brand guidelines.

## Local preview

From the repo root:

```
python -m http.server 8788 --directory website
```

Then open http://localhost:8788

## Deploy

Cloudflare Pages is connected to this repository and redeploys automatically on
every push to `main`. Cloudflare's **build output directory** is set to `website`,
so only the `website/` folder is published — the source material stays private.

To ship a change:

```
git add -A
git commit -m "describe the change"
git push origin main
```

## Contact form

The contact form posts to a Cloudflare Pages Function at `functions/api/contact.js`
(served at `/api/contact`), which emails submissions via [Resend](https://resend.com).

Required setup (one-time, in the Cloudflare Pages dashboard):

1. Create a free Resend account using `rinalds.derics@gmail.com` (messages are
   delivered to that address; no custom domain needed — the form sends from
   Resend's shared `onboarding@resend.dev`).
2. In Resend, create an API key.
3. In Cloudflare → the Pages project → **Settings → Environment variables**, add
   `RESEND_API_KEY` (Production + Preview), then redeploy.

Until the key is set, the endpoint returns `{"ok":false,"error":"not_configured"}`.

## Analytics

Privacy-first visitor stats via **Cloudflare Web Analytics** (no cookies). Enable
it in the Cloudflare dashboard (Web Analytics → add the site / Pages project). The
site's Content-Security-Policy already allows the analytics beacon.
