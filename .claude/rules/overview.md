# Overview (Demo Rules)

This repo is built to teach a core idea:

- AI at scale is not a single "smart model".
- It is a loop (signals -> decisions -> actions -> verification) with guardrails.

Definition of done for a change
- Clear request (problem + acceptance criteria).
- Plan written down before implementation.
- Code + tests updated together.
- Verification results captured (pass/fail, what was run).
- If a constraint is violated or confidence is low, escalate to a human.

Loop shape (for this demo)
1) Observe: read request + relevant code
2) Plan: propose a small, testable change
3) Act: implement
4) Verify: run checks
5) Reflect: summarize what changed and why
