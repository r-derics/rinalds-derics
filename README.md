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

## Contact

Visitors reach out via the direct email and Instagram links in the Contact
section — there is no server-side form. The site is fully static.

## Analytics

Privacy-first visitor stats via **Cloudflare Web Analytics** (no cookies). Enable
it in the Cloudflare dashboard (Web Analytics → add the site / Pages project). The
site's Content-Security-Policy already allows the analytics beacon.
