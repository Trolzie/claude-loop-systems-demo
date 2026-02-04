# Claude Code: Project Memory

You are working in `claude-loop-systems-demo`.

Goal
- Demonstrate a robust systems-engineering loop where Markdown is the system:
  - memory files define constraints and priorities
  - agents define roles
  - skills define repeatable workflows

Working agreement
- Prefer updating the system docs (memory/rules/agents/skills) before making large code changes.
- Keep changes small and reversible; avoid refactors unless requested.
- Make uncertainty explicit. If blocked, ask one short question.
- Maintain a runnable, fast feedback loop (lint/test) once the TypeScript project exists.

Additional rules
@.claude/rules/overview.md
