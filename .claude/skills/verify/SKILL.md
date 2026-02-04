---
name: verify
description: Run the repo verification suite (lint + tests) and summarize results.
allowed-tools: Bash(npm *)
---

# Verify

Run the verification suite and summarize results concisely.

## Command

```bash
npm run verify
```

## Output format

```md
✅ VERIFY PASS
- lint: PASS
- tests: PASS
```

Or:

```md
❌ VERIFY FAIL
- lint: FAIL
- tests: SKIPPED | FAIL

Next step: <most likely fix / where to look>
```
