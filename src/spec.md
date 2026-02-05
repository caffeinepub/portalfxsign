# Specification

## Summary
**Goal:** Make the footer “Contact Us” action navigate to the site’s standalone Telegram page.

**Planned changes:**
- Update the footer “Contact Us” click handler to navigate to the `/telegram` route.
- Use the existing global route-transition UX by triggering navigation via `useRouteTransition().startTransition(...)`.
- Ensure existing footer links (“Terms & Conditions”, “Privacy Policy”) continue to work unchanged.

**User-visible outcome:** Clicking “Contact Us” in the site footer takes the user to `/telegram`, showing the standard transition spinner overlay and fade-in.
