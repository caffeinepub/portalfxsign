# Specification

## Summary
**Goal:** Replace the existing dual green gradient background with a more visually pronounced, original green-to-teal abstract vector background applied globally across the site.

**Planned changes:**
- Create a new original abstract vector background SVG asset that transitions from green to teal with prominent abstract shapes.
- Remove/replace the existing `gradient-bg-right` dual-layer gradient (`::before/::after`) so it is no longer visible anywhere.
- Apply the new vector background globally from a single shared location (global CSS and/or root layout container), ensuring all routes use it consistently and content remains readable/clickable.

**User-visible outcome:** Every page shows the new pronounced green-to-teal abstract vector background consistently, with the prior dual green gradients fully removed and all existing navigation and route-transition behavior unchanged.
