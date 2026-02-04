# Demo Issues (Copy/Paste)

These are two small issues designed for a live demo.

## Issue A (API): Add no-store header

Title:
- Change: Add no-store caching to /api/health

Body:

```md
## Problem
/api/health should never be cached.

## Acceptance Criteria
- [ ] GET /api/health response includes `Cache-Control: no-store`

## Constraints / Guardrails
- Must not change the JSON shape returned by /api/health
- Do not add new dependencies

## Verification
- [ ] `npm run verify`
```

## Issue B (UI): Add a tagline

Title:
- Change: Add tagline to homepage header

Body:

```md
## Problem
The homepage should communicate what this repo is for.

## Acceptance Criteria
- [ ] Homepage shows a tagline: "Markdown is the system."

## Constraints / Guardrails
- Do not change routing or add new pages
- Do not add new dependencies

## Verification
- [ ] `npm run verify`
```
