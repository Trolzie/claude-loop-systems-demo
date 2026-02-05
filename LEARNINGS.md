# Learnings

One bullet per closed issue.

Format:
- YYYY-MM-DD - #N - Learning

- 2026-02-04 - #1 - Following existing component patterns (AppHeader → AppFooter) keeps diffs minimal and consistent.
- 2026-02-04 - #2 - Adding a test alongside header changes ensures the behavior is verified automatically.
- 2026-02-05 - #4 - Static UI components with no props are simpler to test; use getByRole for semantic elements like links.
- 2026-02-05 - #5 - Mock global fetch in tests to avoid network calls; vitest.stubGlobal makes it easy to isolate API routes.
