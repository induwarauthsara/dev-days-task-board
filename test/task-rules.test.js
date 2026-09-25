import test from "node:test";
import assert from "node:assert/strict";

import { validateTaskTitle } from "../public/task-rules.js";

test("accepts a normal task title", () => {
  assert.deepEqual(validateTaskTitle("Check the projector"), {
    valid: true,
    title: "Check the projector"
  });
});

test("keeps existing task titles working", () => {
  const result = validateTaskTitle("Open the presentation");

  assert.equal(result.valid, true);
  assert.equal(result.title, "Open the presentation");
});
