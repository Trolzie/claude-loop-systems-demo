# Claude Loop Systems (Next.js)

Small Next.js + TypeScript project used to demonstrate systems engineering loops where Markdown is the system.

## The System (Markdown)

- Project memory: `.claude/CLAUDE.md`
- Rules: `.claude/rules/*.md`
- Agents (roles): `.claude/agents/*.md`
- Skills (repeatable workflows): `.claude/skills/*/SKILL.md`

## Workflow (GitHub issues)

1. Create an issue using the "Change request" template.
2. Architect writes a tiny plan with explicit assumptions.
3. Implementer makes the smallest change that satisfies acceptance criteria.
4. Run verification: `npm run verify`.
5. Reviewer approves.
6. Commit to `main` with `Fixes #N`.

## Commands

```bash
npm install
npm run dev
npm run verify   # lint + tests
```

## Demo Issues

See `docs/demo-issues.md` for two ready-to-copy issue bodies (API then UI).
