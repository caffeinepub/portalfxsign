# Specification

## Summary
**Goal:** Add a concise, standalone Privacy Policy page and ensure the footer “Privacy Policy” link navigates to it using the existing route-transition experience.

**Planned changes:**
- Create a new standalone page/route at `/privacy` containing concise, professionally structured Privacy Policy content in English (with clear section headings).
- Update the existing footer “Privacy Policy” link to navigate to `/privacy` using the app’s existing global route-transition UX (spinner + fade-in), without affecting other links.
- Verify the existing “Terms & Conditions” link continues to navigate to `/terms` with the same transition behavior.

**User-visible outcome:** Users can click “Privacy Policy” in the site footer (or visit `/privacy` directly) to view a concise Privacy Policy page, with the same transition experience as other routes.
