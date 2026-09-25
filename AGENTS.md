<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Kuveikis Law Project Guidelines

## 1. Approval Before Modification
- Always formulate an implementation plan and request explicit user approval before modifying project files.

## 2. Next.js & Build System
- Always run dev and build commands in Webpack mode (`--webpack`) to avoid PostCSS / Tailwind v4 Turbopack issues:
  - Dev: `npm run dev` (`next dev --webpack`)
  - Build: `npm run build` (`next build --webpack`)

## 3. Florida Bar Advertising Compliance
- Any section displaying verdicts, settlements, client testimonials, or case results must include Florida Bar compliance disclaimers regarding past outcomes.

## 4. Media & Asset Standards
- Optimize high-res image assets for the web before adding to `public/images/`.
- Keep raw client source files (e.g. `client-materials/`) excluded via `.gitignore` to prevent repository bloat.
