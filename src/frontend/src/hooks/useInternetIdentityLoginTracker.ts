import { useEffect, useRef } from 'react';
import { useInternetIdentity } from './useInternetIdentity';
import { useActor } from './useActor';

const SESSION_STORAGE_KEY = 'ii_login_tracked';

/**
 * Hook that tracks Internet Identity logins by recording them to the backend
 * once per browser session per principal.
 */
export function useInternetIdentityLoginTracker() {
  const { identity } = useInternetIdentity();
  const { actor } = useActor();
  const hasTrackedRef = useRef(false);

  useEffect(() => {
    // Skip if already tracked in this component lifecycle
    if (hasTrackedRef.current) return;

    // Skip if no identity or actor available
    if (!identity || !actor) return;

    const principal = identity.getPrincipal();
    
    // Skip anonymous principals
    if (principal.isAnonymous()) return;

    const principalText = principal.toString();
    const storageKey = `${SESSION_STORAGE_KEY}_${principalText}`;

    // Check if already tracked in this session
    const alreadyTracked = sessionStorage.getItem(storageKey);
    if (alreadyTracked === 'true') {
      hasTrackedRef.current = true;
      return;
    }

    // Record the login
    actor
      .recordInternetIdentityLogin()
      .then(() => {
        // Mark as tracked in session storage
        sessionStorage.setItem(storageKey, 'true');
        hasTrackedRef.current = true;
      })
      .catch((error) => {
        // Fail silently, only log to console
        console.warn('Failed to record Internet Identity login:', error);
      });
  }, [identity, actor]);

  // Clear tracking flag when principal becomes anonymous (logout)
  useEffect(() => {
    if (!identity || identity.getPrincipal().isAnonymous()) {
      hasTrackedRef.current = false;
    }
  }, [identity]);
}
