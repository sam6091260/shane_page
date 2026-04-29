---
name: review_directory_structure
description: Analyze a directory's structure for architectural improvements, organization, and finding misplaced files.
---

1. **Identify the target directory to review.**
   - If not provided, ask the user which directory or feature module they want to review.
   - Use `list_dir` or tree commands to map out the current structure and see all files inside.

2. **Analyze the organization against best practices:**
   - **Grouping Strategy**: Are files grouped by feature (e.g., `modules/Dashboard/`) or by file type (e.g., `controllers/`, `views/`)? Suggest moving towards feature-based cohesion if it benefits the project.
   - **Colocation**: Are closely related files stored together? (e.g., component, its `.scss` file, and its specific utilities).
   - **Misplaced Files**: Look for files that violate the layer's responsibility (e.g., API calls mixed into generic `utils/`, or complex business logic inside presentation components).
   - **Nesting**: Is the directory too flat (creating clutter) or too deep (creating unnecessarily long import paths)?

3. **Formulate specific restructuring suggestions.**
   - Summarize the current state.
   - Group recommendations logically (e.g., "Phase 1: Move API definitions", "Phase 2: Colocate Styles").
   - For each move, explain *why* it improves maintainability, scalability, or separation of concerns.

4. **Present the findings to the user.**
   - Do not make changes immediately. Ask the user for their thoughts on the proposed new structure.
