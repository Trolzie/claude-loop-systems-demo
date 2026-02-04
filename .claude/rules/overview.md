# Overview (Project Rules)

This repo is built around a core idea:

- AI at scale is not a single "smart model".
- It is a loop (signals -> decisions -> actions -> verification) with guardrails.

Loop steps (simple)
1. Read the GitHub issue (#N) and restate acceptance criteria.
2. PLAN: architect produces a tiny, testable plan + explicit assumptions.
3. IMPLEMENT: implementer executes the plan with the smallest diff.
4. VERIFY: run `npm run verify` (or `/verify`).
5. REVIEW: reviewer must output either APPROVED or CHANGES REQUIRED.
6. COMMIT: commit agent commits to `main` with `Fixes #N`.
7. REFLECT: add one learning to `LEARNINGS.md`.

Verification signal
- `npm run verify` is the source of truth.
- If verify fails: do not commit.

Escalation triggers (stop and ask)
- Issue missing acceptance criteria or verification commands.
- Verify fails and cause is unclear after 2 attempts.
- Change requires dependency bumps or broad refactors.
