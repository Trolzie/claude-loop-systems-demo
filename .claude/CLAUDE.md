# Claude Code: Project Memory

You are working in `claude-loop-systems-demo` (Next.js + TypeScript).

Goal
- Build a small but robust development loop where Markdown is the system:
  - GitHub issues are the input contract
  - agents define roles
  - skills standardize repeatable actions
  - verification is the primary signal

Non-negotiables
- All work starts from a GitHub issue #N using the "Change request" template.
- Prefer running the full loop via `/issue-loop` when working from an issue.
- Do not proceed without:
  - acceptance criteria in the issue
  - explicit verification commands in the issue
- Definition of done:
  - acceptance criteria satisfied
  - `npm run verify` passes (lint + tests)
  - reviewer says **APPROVED**
  - change is committed to `main` with `Fixes #N` (closes the issue)
  - add exactly one bullet to `LEARNINGS.md`

Working agreement
- Prefer the smallest diff that meets the issue.
- No scope creep: if something is useful but out of scope, create a follow-up issue.
- If uncertain, ask one short question and stop.

Rules
@.claude/rules/overview.md
