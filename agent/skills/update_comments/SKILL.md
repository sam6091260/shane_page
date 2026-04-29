---
name: update_comments
description: Update the comments of a specific file to match its current code logic.
---

1. Identify the target file.
   - If the user provided a `<file-name>`, find its absolute path.
   - If not, ask the user to specify the file.
2. Read the content of the file using `view_file` or `view_code_item`.
3. Analyze the code and existing comments.
   - detailedly read the code logic.
   - Check if existing comments (docstrings, inline comments) are accurate, complete, and helpful.
   - Identify missing comments for complex logic or public APIs.
4. Generate updated comments.
   - **Docstrings**: Ensure functions, classes, and modules have clear descriptions of purpose, arguments, and return values.
   - **Inline Comments**: Explain *why* something is done, not just *what* is done. Remove obvious comments.
   - **Tone**: Keep it professional and concise.
5. Apply the updates.
   - Use `replace_file_content` or `multi_replace_file_content` to update the comments in the file.
