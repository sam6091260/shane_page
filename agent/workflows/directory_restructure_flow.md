---
description: Standardized process for reviewing and safely restructuring a directory.
---

1. Analyze and Plan.
   - Call skill: `review_directory_structure` on the target directory.
   - Present the proposed new folder structure to the user for approval.
2. Wait for user consensus.
   - Do not proceed until the user approves the specific files to be moved.
3. Execute Moves.
   - Using the `run_command` tool, safely create new directories (`mkdir -p`) and move files (`mv`).
4. Fix Broken Imports.
   - Renaming or moving files will break relative and absolute paths in other files.
   - Use `grep_search` to find references to the old file paths across the codebase.
   - Use `replace_file_content` to update the import statements to the new paths.
5. Verification.
   - Run the project's linter (e.g., `eslint`) or build command to ensure there are no unresolved module errors.
