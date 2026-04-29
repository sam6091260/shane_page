---
description: Standardize the process of finishing a task and preparing it for review.
---

1. Check for unsaved or uncommitted changes.
   - Run `git status`.
2. Generate a Conventional Commit Message.
   - Call skill: `generate_commit_message`.
3. Create a Merge Request Description.
   - Call skill: `create_mr_description`.
4. Review the outputs.
   - Present the commit message and MR description to the user for final approval.
