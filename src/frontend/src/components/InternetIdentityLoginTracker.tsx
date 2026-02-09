import { useInternetIdentityLoginTracker } from '../hooks/useInternetIdentityLoginTracker';

/**
 * Non-visual component that tracks Internet Identity logins globally.
 * Mount this once in your app layout to enable login tracking.
 */
export default function InternetIdentityLoginTracker() {
  useInternetIdentityLoginTracker();
  return null;
}
