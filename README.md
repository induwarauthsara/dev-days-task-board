# Dev Days Task Board

A small, visual starter project for demonstrating the workflow from a GitHub issue to a reviewed pull request with GitHub Copilot CLI.

The project intentionally contains the bug described in `ISSUE.md`. Everything else is ready for the live demo.

## Requirements

- Node.js 20 or later
- GitHub Copilot CLI for the live AI workflow

No package installation is required. The project uses only Node.js built-in modules and browser APIs.

## Run the project

```bash
npm start
```

Open <http://localhost:3000>.

## Run the baseline tests

```bash
npm test
```

The starter tests confirm that ordinary task titles already work. During the demo, Copilot should add coverage for the acceptance criteria in `ISSUE.md`.

## Reproduce the intentional bug

1. Enter several spaces in the task field.
2. Select **Add task**.
3. Observe the new blank task card.

## Suggested branch

```bash
git switch -c fix/1-empty-task
```

## Suggested Copilot prompts

### Plan

> Read `ISSUE.md`. Inspect the repository and propose the smallest implementation plan. Identify the files involved, edge cases, and verification commands. Do not modify files yet.

### Implement

> Implement the approved plan. Keep the change limited to task validation and its tests. Do not change the page design. Run the relevant tests.

### Prepare the pull request

> Review the diff for unrelated changes. Summarize the behavior and test evidence, then prepare a draft pull request description that includes `Fixes #1`. Do not merge it.
