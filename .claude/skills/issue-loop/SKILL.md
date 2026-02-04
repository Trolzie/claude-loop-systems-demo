---
name: issue-loop
description: Run the end-to-end GitHub issue workflow (plan -> implement -> verify -> review -> commit -> learning).
allowed-tools: Bash(git *), Bash(gh *), Bash(npm *), Read, Edit, Write, Grep, Glob
---

# Issue Loop

Run the full loop for a single GitHub issue.

## Inputs

- Issue number `#N` (required)

## Preflight (hard gates)

1. Fetch the issue body and confirm it contains:
   - "Acceptance Criteria" section with checkbox bullets
   - "Verification" section with explicit commands
2. If either is missing: STOP and ask the user to fix the issue (do not proceed).

## Loop

1. **PLAN**
   - Use the `architect` agent to produce a tiny plan with:
     - acceptance criteria restated
     - file list
     - explicit assumptions tagged `[VERIFY]`
     - verification step (`npm run verify`)
   - If the plan relies on a specific file/function existing, verify `[VERIFY]` items with quick `Glob`/`Grep`.

2. **IMPLEMENT**
   - Use the `implementer` agent to implement the approved plan with the smallest diff.
   - Require tests for user-visible changes.

3. **VERIFY (signal)**
   - Run `/verify` (or `npm run verify`).
   - If verify fails:
     - attempt up to 2 fixes (small, plan-aligned)
     - if still failing or root cause unclear: STOP and escalate.

4. **REVIEW (gate)**
   - Use the `reviewer` agent.
   - Only proceed if it outputs: `APPROVED: Proceed to COMMIT`.

5. **COMMIT**
   - Use the `commit` agent.
   - Commit must include `Fixes #N`.
   - Push to `main`.

6. **REFLECT**
   - Append exactly one bullet to `LEARNINGS.md`:
     - `YYYY-MM-DD - #N - <learning>`

## Output

End with one of:

- `STATUS: DONE` (issue closed, verify passing, learning recorded)
- `STATUS: BLOCKED` (explain what is missing / what user must do)
- `STATUS: ESCALATED` (explain why the loop cannot continue safely)
