---
name: review_function_structure
description: Analyze a single function for structural improvements, readability, and simplification opportunities.
---

1. **Identify the target function.**
   - If the user provided a `<function-name>` or line range, locate it in the file.
   - If not, ask the user to specify which function to review.

2. **Read the function body** using `view_file` with the relevant line range.

3. **Analyze the function structure.** Look for:
   - **Single Responsibility**: Does the function do more than one conceptual job? If so, suggest splitting it into smaller, well-named helpers.
   - **Duplication**: Are there repeated code blocks or patterns inside the function that could be extracted into a local helper or shared utility?
   - **Loop & Mutation Patterns**: Are `for...in` / `for` loops used where `Object.entries`, `.map`, `.filter`, or `.reduce` would be clearer? Are variables unnecessarily mutated with `let` when `const` + functional patterns would suffice?
   - **Readability**: Are variable names vague or misleading? Are intermediate results left unnamed, making the logic opaque?
   - **Early Return / Guard Clauses**: Could early returns or guard clauses reduce nesting and flatten the logic?
   - **Modern Syntax**: Are there opportunities to use optional chaining (`?.`), nullish coalescing (`??`), destructuring, or template literals to simplify expressions?
   - **Performance**: Are there O(n²) operations (e.g., `.indexOf` inside `.filter` or `.map`) that could be replaced with a `Set` or `Map` for O(n) performance?
   - **Magic Values / Constants**: Are there inline literals or strings that should be named constants for clarity?

4. **Formulate specific, actionable suggestions.**
   - For each suggestion, explain *why* it improves the code (e.g., "eliminates O(n²) lookup", "reduces cognitive load", "improves testability").
   - If a refactor would change behavior subtly, call it out explicitly.

5. **Present the findings to the user.**
   - Group findings by category (e.g., Performance, Readability, Duplication).
   - If the changes are straightforward and low-risk, offer to apply them.
   - If the changes are significant, present a refactored version as a suggestion without applying immediately.
