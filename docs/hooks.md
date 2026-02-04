# Hooks

This repo uses a Claude Code PreToolUse hook to enforce the core loop invariant:

- Before `git commit` or `git push`, run `npm run verify`.

Rationale:
- Verification is the primary signal.
- Committing without a green signal breaks the loop and teaches the system the wrong incentives.
