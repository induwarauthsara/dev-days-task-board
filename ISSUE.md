# Issue #1: Prevent empty tasks from being added

## Problem

The task board creates an empty card when someone enters only spaces.

## Steps to reproduce

1. Open the task board.
2. Enter three spaces in the task field.
3. Select **Add task**.
4. An empty task appears.

## Expected behavior

- Empty or whitespace-only titles must not create a task.
- Show the message `Enter a task before adding.`
- Remove spaces from the beginning and end of valid titles.
- Valid tasks must continue to work.

## Acceptance criteria

- Empty text is rejected.
- Whitespace-only text is rejected.
- `  Prepare demo  ` appears as `Prepare demo`.
- Existing valid behavior still works.
- Automated tests cover these cases.

## Scope

Keep the change limited to task validation and its tests. Do not change the page design.
