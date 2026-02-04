---
name: issue-loop
description: Run the end-to-end GitHub issue workflow (plan -> implement -> verify -> review -> commit -> learning) using subagents.
allowed-tools: Bash(git *), Bash(gh *), Bash(npm *), Read, Edit, Write, Grep, Glob
---

# Issue Loop

Run the full loop for a single GitHub issue.

## Key rule (this is the demo)

This workflow only counts if each step is executed by the named subagent.

You should see tool calls like:
- `architect(...)`
- `implementer(...)`
- `reviewer(...)`
- `commit(...)`

If you find yourself writing the plan or making edits directly in the main conversation, STOP and re-run the step via the correct agent.

## Input

- Issue number `#N` (required)

## Preflight (hard gates)

1. Fetch the issue via `gh issue view #N --json title,body,labels`.
2. Confirm the issue body contains:
   - an "Acceptance Criteria" section with checkbox bullets
   - a "Verification" section with explicit commands
3. If either is missing: STATUS: BLOCKED and ask the user to fix the issue. Do not proceed.

## Step 1: PLAN (architect)

Invoke the `architect` agent with a prompt like:

"Plan issue #N. Restate acceptance criteria, propose minimal file changes, and list assumptions tagged [VERIFY]."

Then, in the main conversation:
- Verify `[VERIFY]` items with quick `Glob`/`Grep` (keep it lightweight).
- If verification fails: re-run architect with corrected context.

## Step 2: IMPLEMENT (implementer)

Invoke the `implementer` agent:

"Implement the approved plan for #N with the smallest diff. Add/update tests as needed. Then run `npm run verify` and report PASS/FAIL."

If verify fails:
- Allow up to 2 small, plan-aligned fix attempts.
- If still failing or root cause unclear: STATUS: ESCALATED.

## Step 3: VERIFY (signal)

Run `/verify` (or `npm run verify`) and record PASS/FAIL.

## Step 4: REVIEW (reviewer)

Invoke the `reviewer` agent:

"Review changes for #N against acceptance criteria. Output only APPROVED or CHANGES REQUIRED."

Only proceed if it outputs:
- `APPROVED: Proceed to COMMIT`

## Step 5: COMMIT (commit)

Invoke the `commit` agent:

"Commit to main and push. Message should include `Fixes #N`."

Note: This repo has a PreToolUse hook that runs `npm run verify` before git commit/push.

## Step 6: REFLECT

Append exactly one bullet to `LEARNINGS.md`:
- `YYYY-MM-DD - #N - <learning>`

Then create a second commit for the learning (include `docs:` type).

## Output

End with one of:

- `STATUS: DONE`
- `STATUS: BLOCKED`
- `STATUS: ESCALATED`
