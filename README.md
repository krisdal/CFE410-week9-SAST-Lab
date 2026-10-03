# CBE410 Week 9 — SAST / Source Code Analysis / Security Rules

Deliberately vulnerable teaching application. Use only in a local lab environment.

## Setup
- Node.js 20+ recommended
- `npm install`
- Semgrep: install using the current official Semgrep instructions for your OS/environment

## Scan
```bash
semgrep scan --config auto .
semgrep scan --config custom-rules.yml app.js
semgrep scan --config custom-rules.yml --json app.js > semgrep-results.json
```

## Student tasks
1. Run a baseline scan and record findings.
2. For each finding, identify rule, file/line, risky construct, likely impact, and confidence.
3. Classify each result: True Positive / False Positive / Needs Context.
4. Inspect `custom-rules.yml` and explain how each rule matches code.
5. Modify one rule to reduce noise or improve coverage.
6. Fix at least two confirmed findings and re-scan.
7. Compare before/after results and write the SAST report.

Do not submit raw scanner output as the report; include analyst reasoning.
