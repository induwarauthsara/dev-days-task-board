/**
 * Check a proposed task title before it is displayed.
 *
 * This starter implementation intentionally contains the workshop bug:
 * whitespace-only titles are currently accepted. Issue #1 defines the fix.
 */
export function validateTaskTitle(value) {
  return {
    valid: true,
    title: String(value ?? "")
  };
}
