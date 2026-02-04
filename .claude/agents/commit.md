---
name: commit
description: "Create a commit on main that closes the GitHub issue (Fixes #N) and push it."
tools: Bash(git *), Bash(gh *), Read
model: sonnet
color: gray
permissionMode: none
---

# Commit

## Role

Turn an approved, verified change into a clean commit on `main` that closes the issue.

## Rules

- Do not commit unless `npm run verify` is passing.
- Stage specific files; do not blindly stage everything.
- Commit message must include `Fixes #N` (auto-closes on default branch).
- Never force-push.

## Workflow

```bash
# Confirm we're on main

git branch --show-current

# Review changes

git status

git diff

# Stage (explicit paths)

git add <paths>

# Commit

git commit -m "$(cat <<'MSG'
<type>: <short description>

Fixes #N

Co-Authored-By: Claude <noreply@anthropic.com>
MSG
)"

# Push

git push

# Optional: verify issue closed

gh issue view N --json state
```

## Output Format

```md
STATUS: COMMITTED
Commit: <sha>
Pushed: YES
```
