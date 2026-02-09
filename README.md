# Claude Loop Systems Demo

A demo repo showing how to build AI development loops where **Markdown is the system** — GitHub issues define work, agents execute roles, skills standardize workflows, and verification gates ensure quality.

## Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Claude Code CLI](https://docs.anthropic.com/en/docs/claude-code) installed and authenticated
- [GitHub CLI](https://cli.github.com/) (`gh`) installed and authenticated

## Quick Start

```bash
# Clone and install
git clone https://github.com/<your-user>/claude-loop-systems-demo.git
cd claude-loop-systems-demo
npm install

# Start the dev server
npm run dev

# Verify everything works
npm run verify
```

Open [http://localhost:3000](http://localhost:3000) to see the app running.

## Try the Loop

This is what the demo is about — running a full issue-to-commit loop with Claude Code.

### 1. Create a GitHub issue

Copy one of the ready-made issues from [`docs/demo-issues.md`](docs/demo-issues.md) and create it:

```bash
gh issue create --title "Change: Add tagline to homepage header" --body "$(cat <<'EOF'
## Problem
The homepage should communicate what this repo is for.

## Acceptance Criteria
- [ ] Homepage shows a tagline: "Markdown is the system."

## Constraints / Guardrails
- Do not change routing or add new pages
- Do not add new dependencies

## Verification
- [ ] `npm run verify`
EOF
)"
```

### 2. Run the loop

Inside Claude Code, run:

```
/issue-loop <issue-number>
```

### 3. Watch the agents work

The loop executes six steps, each handled by a dedicated agent:

1. **Architect** — reads the issue, produces a tiny plan with assumptions
2. **Implementer** — makes the smallest code change that satisfies acceptance criteria
3. **Verify** — runs `npm run verify` (lint + tests)
4. **Reviewer** — checks the diff against acceptance criteria, outputs APPROVED or CHANGES REQUIRED
5. **Commit** — commits to `main` with `Fixes #N` (a pre-commit hook re-runs verify)
6. **Reflect** — appends one learning to `LEARNINGS.md`

## How the System Works

The entire system is defined in Markdown files inside `.claude/`:

```
.claude/
  CLAUDE.md                          # Project memory + non-negotiables
  settings.json                      # Hooks (pre-commit verification gate)
  rules/
    overview.md                      # Loop steps + escalation triggers
  agents/
    architect.md                     # Plan agent
    implementer.md                   # Code agent
    reviewer.md                      # Review agent
    commit.md                        # Commit agent
  skills/
    issue-loop/SKILL.md              # End-to-end issue workflow
    verify/SKILL.md                  # Run lint + tests
```

**Key idea:** there is no orchestration code. The loop is encoded as Markdown instructions that Claude Code follows. Agents are role definitions. Skills are reusable workflows. Hooks enforce gates (e.g., `npm run verify` runs automatically before every `git commit` or `git push`).

## Commands Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run Vitest tests |
| `npm run verify` | Run lint + tests (the verification gate) |

## Demo Issues

See [`docs/demo-issues.md`](docs/demo-issues.md) for ready-to-copy issue bodies:

- **Issue A (API):** Add `Cache-Control: no-store` header to `/api/health`
- **Issue B (UI):** Add a "Markdown is the system." tagline to the homepage
