# Review Before Launch — Facts & Placeholders to Confirm

This site was rebuilt from the content of the old wpblawyer.com. The copy is a full
professional rewrite. Before going live, please confirm the items below. Everything
here lives in **`lib/siteConfig.ts`** unless noted otherwise.

## ⚠️ Facts to verify (some old-site details were internally inconsistent)

| Item | Currently shows | Where | Action |
|---|---|---|---|
| Years of experience | "13+ years" / "more than a decade" | `app/page.tsx` (stats), `app/about/page.tsx` | Old site said "13 years" but bar admission is 1995 (~30 yrs). Confirm the number you want and update. |
| Education years | UF B.S. 1991, J.D. 1994 | `app/about/page.tsx` (`credentials`) | Confirm degrees/years. |
| Bar admissions | FL 1995, GA 2000 | `app/about/page.tsx` | Confirm. |
| Associations | PBC Trial Lawyers (2001), Florida Justice Assn (2004) | `app/about/page.tsx` | Old site referenced "Florida Trial Lawyers Association" (now the Florida Justice Association). Confirm current memberships. |
| Office hours | Mon–Fri 9:00 AM – 5:00 PM | `siteConfig.hours` | Confirm. |
| "Calls answered 24/7" | shown in header/hero | `siteConfig`, `Header`, `Hero` | Only keep if true (answering service or cell). Remove if not. |
| Service area cities | Jupiter, Palm Beach Gardens, Tequesta, Juno Beach, West Palm Beach | `siteConfig.serviceArea` | Confirm the list you want to advertise. |
| Georgia practice | "Licensed in Florida and Georgia" | footer + about | Confirm you still want to advertise GA. |

## Contact details (confirm all)
- Phone: **(561) 354-6969** → `siteConfig.phone` / `phoneHref`
- Email: **steve@wpblawyer.com** → `siteConfig.email`
- Address: **601 Heritage Drive, Suite 136, Jupiter, FL 33458** → `siteConfig.address`

## Placeholders that must be replaced
1. **Testimonials** — `components/Testimonials.tsx` contains *realistic but fictional* reviews
   (Maria G., David R., Linda P.). **Replace with real, verifiable client reviews**, or remove
   the section. Do not publish invented testimonials.
2. **Attorney photo** — the header/footer now use the real lighthouse logo, but
   `app/about/page.tsx` still shows an "SK" portrait placeholder. Drop a real headshot
   into `public/` and wire it in.
3. **Contact form delivery** — `components/ContactForm.tsx` currently opens the visitor's email
   client with a pre-filled message (mailto). For reliable delivery, connect a form backend
   (e.g. Formspree, or a Next.js API route + email service) and swap out the submit handler.
4. **OG / social share image** — favicon is done (`app/icon.png`, generated from the logo).
   Still todo: a social-share image (`app/opengraph-image.png` or set `openGraph.images`) —
   `public/logo.png` (full transparent logo) is a good source.

## Logo assets (added)
- `public/logo-mark.png` — circular lighthouse emblem, background removed (used in header + footer).
- `public/logo.png` — full logo lockup, background removed (available for OG image / print).
- `app/icon.png` — favicon: the emblem on a cream tile with a sapphire ring.
- Source `Kuveikis Law Logo.png` is git-ignored; the background was removed locally with Pillow.
- ⚠️ The logo wordmark reads **"Kuveikis.law / Injury Law"** while the site uses
  **"Kuveikis Injury Attorney."** Confirm which brand name/spelling is correct.
5. **Blog dates** — posts in `lib/blog.ts` use 2026 placeholder dates. Adjust as you publish.

## Legal / marketing copy to review
- Practice-area legal explanations (statute of limitations, comparative negligence, PIP,
  negligent-security foreseeability) reflect Florida law as generally understood, including the
  2023 tort-reform changes. Have Steve review for accuracy and preferred phrasing.
- Footer disclaimer + per-post disclaimers are included. Confirm wording meets Florida Bar
  advertising rules (e.g. any required "past results" and firm-identification language).

## Domain / deploy
- `siteConfig.domain` is set to `https://www.wpblawyer.com` for canonical URLs, sitemap, and JSON-LD.
  Update if the launch domain differs.
- Ready to deploy on Vercel (`npm run build`). Point DNS only after the review items above are done.
