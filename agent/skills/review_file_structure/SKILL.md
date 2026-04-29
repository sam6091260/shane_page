---
name: review_file_structure
description: Check a specific file for potential structural improvements or simplification.
---

1. Identify the target file.
   - If the user provided a `<file-name>`, find its absolute path.
   - If not, ask the user to specify the file.
2. Read the content of the file using `view_file` or `view_code_item` if it is very large.
3. Analyze the code structure. Look for:
   - **Complexity**: Deeply nested conditionals or loops ("arrow code").
   - **Duplication**: Repeated logic that can be extracted into functions or constants.
   - **Separation of Concerns**: Logic that belongs in a separate hook, utility, or component.
   - **Readability**: Confusing variable names or long functions.
   - **Modern Practices**: Use of outdated patterns where newer syntax (e.g., async/await, optional chaining) would be cleaner.
4. Formulate specific suggestions for improvement.
   - For each suggestion, explain *why* it improves the code (e.g., "reduces cognitive load", "improves testability").
5. Present the findings to the user.
   - If the changes are straightforward, offer to apply them.
