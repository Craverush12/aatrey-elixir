# BURANSH Documentation Inventory

Last updated: 2026-04-24

## Active Docs

- `README.md`: primary developer/operator setup, env, commerce, launch, and smoke-test guide.
- `FINAL_EXECUTION_PLAN.md`: final closeout sequence for content, image generation, ops, QA, and deployment.
- `IMAGE_GENERATION_MANIFEST.md`: exact still-asset generation prompts, file targets, and review guardrails.
- `FINAL_HANDOFF.md`: final VPS hosting, update, database retrieval, env, QA, and approval SOP.
- `FINAL_AUDIT_SCOPE.md`: current implementation status and remaining launch dependencies.
- `TASK_BOARD.md`: closeout task status and handoff notes.
- `CLIENT_REVIEW_REQUEST.md`: client, legal, brand, and operations inputs still needed.
- `REVIEW_AGENT_BRIEF.md`: review criteria for final brand/QA pass.
- `AGENTS.md`: local agent/project rules.
- `CLAUDE.md`: compatibility pointer to `AGENTS.md`.

## Historical Or Reference Files

- `buransh-copy-assets.jsx`
- `buransh-evolved-system.jsx`
- `buransh-full-blueprint.jsx`

These are non-runtime blueprint/reference files. They are intentionally excluded from ESLint and should not be treated as production app code.

## Delete Candidates

No Markdown documentation should be deleted right now. The current docs each serve a different handoff purpose.

After final client/legal approval, these can be reconsidered:

- `TASK_BOARD.md`, if the team no longer wants an execution-history artifact.
- `FINAL_AUDIT_SCOPE.md`, if its contents are folded into a formal launch report.
- `REVIEW_AGENT_BRIEF.md`, after final review is complete.

Do not delete `CLIENT_REVIEW_REQUEST.md` until every launch input is approved and recorded elsewhere.
