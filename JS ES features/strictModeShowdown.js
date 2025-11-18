// Q8 – Strict Mode Showdown
// Problem function (invalid under strict):
// function demo(a, a) { total = 10; delete total; } demo(5,10);
// Two issues:
// - Duplicate parameter names (function demo(a,a)) are disallowed in strict mode.
// - Assigning to undeclared variable total creates implicit global (throws under strict).
// - delete total when total is not a configurable property gives errors in strict mode if improper.

// 1) Run WITHOUT strict (not recommended) -> duplicate params allowed; assigning to undeclared creates global 'total'.
// 2) Run WITH strict -> SyntaxError for duplicate params, ReferenceError for assignment to undeclared.

// Example showing both behaviors:

console.log("=== Running non-strict-like behavior (simulated) ===");
// Simulate what non-strict would allow:
function demoNonStrict(a1, a2) {
  // declare total explicitly to avoid strict-mode issues even if running without strict
  total = 10; // if not in strict, this would create global total (here we'll demonstrate but avoid crashing)
  console.log("demoNonStrict assigned total (global):", total);
  // delete global property: in non-strict delete globalThis.total might return true
  try {
    const deleted = delete globalThis.total;
    console.log("deleted globalThis.total?", deleted);
  } catch (e) {
    console.log("delete failed:", e.message);
  }
}
demoNonStrict(5, 10);

// Correct version using ES6 and strict mode:
(function correctDemo() {
  "use strict";
  function demo(a, b) {
    // unique param names (no duplicates)
    let total = 10; // declare with let/const -> block scoped
    console.log("demo (strict-safe) total:", total);
    // delete total -> not allowed (delete on local variable is syntax error), so avoid delete.
  }
  demo(5, 10);
})();

// Explanation:
// - Strict mode forbids duplicate parameter names, prevents implicit globals, and restricts delete semantics.
// - Correct approach: use distinct parameter names and explicitly declare variables with let/const/var.
