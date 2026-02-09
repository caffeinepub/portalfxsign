# Specification

## Summary
**Goal:** Track Internet Identity logins by principal ID and let the site owner/admin view an owner-only list of logged-in principals.

**Planned changes:**
- Backend: Add a new authenticated method to record an Internet Identity login for the caller principal, storing principal ID plus firstSeen, lastSeen, and loginCount.
- Backend: Add a new admin-only query method to return the list of recorded Internet Identity login records, enforcing access via the existing admin authorization model.
- Frontend: Add a new non-immutable tracker component/hook that detects when the user becomes authenticated via Internet Identity and calls the backend tracking method once per browser session (no spam), without blocking navigation if it fails.
- Frontend: Extend the existing admin-only `/users` area with a new section (or toggle) that displays the Internet Identity login records (principal ID, firstSeen, lastSeen, loginCount) in English, while preserving existing behavior and access-denied protections.

**User-visible outcome:** After Internet Identity users log in, the site owner/admin can open `/users` and see a protected table of all principals who have logged in (with timestamps and counts), while non-admin users cannot access or view the list.
