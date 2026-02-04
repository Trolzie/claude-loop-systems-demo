# Claude Loop Systems Demo

This repo is a demo for a 45-minute developer talk: "Systems Engineering in the Age of AI".

The point: the system is Markdown.
- Project memory (see `.claude/CLAUDE.md` and `.claude/rules/*.md`)
- Agents (see `.claude/agents/*.md`)
- Skills (see `.claude/skills/*/SKILL.md`)

We will build a small TypeScript codebase and a maintenance loop that can:
1) turn a change request into a plan,
2) implement it,
3) verify it (tests + lint),
4) decide: accept / escalate / rollback.

## Demo Plan (Draft)

- Step 1: Memory - write rules that define what "good" looks like
- Step 2: Agents - create specialized roles (Planner, Implementer, Reviewer)
- Step 3: Skills - create repeatable commands (spec, implement, test, fix)
- Step 4: Loop - run the workflow on a small TypeScript project

## Repo Structure

- `.claude/CLAUDE.md`: always-on project memory (what Claude should optimize for)
- `.claude/rules/`: modular rules referenced by project memory
- `.claude/agents/`: specialized subagents for different roles
- `.claude/skills/`: reusable skills (commands) for repeatable workflows

## Ground Rules

- Keep everything demoable live.
- Prefer small diffs and fast feedback.
- No hidden magic: each behavior should be encoded in a `.md` file.
