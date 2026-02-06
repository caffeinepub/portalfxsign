# Specification

## Summary
**Goal:** Make it easier for the site owner to access the admin-only stored user information by providing clear Internet Identity help and showing the current authenticated Principal when admin access is denied.

**Planned changes:**
- Add a new unlinked admin-help route/page that explains, in English, how the owner can access admin-only user information using Internet Identity, including a prominent external link to https://id.ai/manage (or the configured provider URL) and step-by-step instructions.
- Update the admin access denied UI to display the currently authenticated Internet Identity Principal (when available) and English instructions explaining that this Principal must match the configured admin Principal in frontend configuration.
- Keep the existing admin-only user list route (e.g., `/users`) protected: anonymous users are prompted to log in, non-admin authenticated users are denied, and the backend continues to reject non-admin callers; the UI continues to avoid displaying sensitive fields.

**User-visible outcome:** The owner can open a private help page to learn how to manage Internet Identity and find their Principal, and if denied admin access they can see their current Principal and what to configure to gain access; the admin-only user list remains available only after login + admin authorization.
