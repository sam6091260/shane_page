---
name: generate_commit_message
description: Generate a commit message for the current changes based on git diff.
---

1. Check if there are any staged or unstaged changes.
   - Run `git status`.
2. Get the diff of the changes.
   - If there are staged changes, run `git diff --cached`.
   - If there are only unstaged changes, run `git diff`.
3. Analyze the diff to understand the changes.
   - Identify the primary purpose (feat, fix, refactor, style, chore, etc.).
   - Identify the scope (files or components affected).
4. Generate a conventional commit message.
   - Format: `<type>(<scope>): <subject>`
   - The subject should be imperative, lower case, and no period at the end.
   - If necessary, add a body to explain *why* and *how*.
5. output the generated commit message to the user for review.
