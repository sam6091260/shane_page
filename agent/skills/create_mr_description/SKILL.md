---
name: create_mr_description
description: Create a MR title and description for the current branch in Traditional Chinese in markdown format.
---

1. Identify the current branch name.
   - Run `git branch --show-current`.
2. Determine the scope of changes compared to the main branch.
   - Run `git diff main...HEAD --name-only` (or compare against `master` or `develop` if `main` does not exist).
3. View the actual code changes.
   - Run `git diff main...HEAD` (this might be large, so you can also rely on your knowledge of recent changes if appropriate, or read specific files).
4. Generate a Merge Request Title in **Traditional Mandarin Chinese**.
   - The title should be concise and clearly state the main objective of the branch.
5. Generate a Short Description.
   - This should be in **Traditional Mandarin Chinese**.
   - Summarize the key changes, bug fixes, or features implemented.
6. Check if there are any specific files `<file-name>` mentioned in the user request to include specific details about.
7. Output the generated Title and Description formatted for a Pull Request / Merge Request.
