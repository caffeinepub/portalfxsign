/**
 * Normalizes backend and agent errors into concise, professional English messages.
 * Prevents raw replica rejection details from being shown to users.
 */
export function normalizeBackendError(error: unknown): string {
  const errorString = String(error);
  const errorMessage = error instanceof Error ? error.message : errorString;

  // FIRST: Check for known business logic errors from backend and pass through
  // This must come before replica rejection checks to preserve user-facing messages
  if (
    errorMessage.includes('Invalid email or password') ||
    errorMessage.includes('already in use') ||
    errorMessage.includes('Invalid email') ||
    errorMessage.includes('must be at least')
  ) {
    // Extract the clean message if it's wrapped in error context
    const match = errorMessage.match(/(Invalid email or password[^.]*\.)/i);
    if (match) {
      return match[1];
    }
    return errorMessage;
  }

  // Detect canister stopped / IC0508 errors
  if (
    errorMessage.includes('IC0508') ||
    errorMessage.includes('is stopped') ||
    errorMessage.includes('Canister') && errorMessage.includes('stopped')
  ) {
    return 'Service is temporarily unavailable. Please try again shortly.';
  }

  // Detect replica rejection patterns
  if (
    errorMessage.includes('replica returned a rejection error') ||
    errorMessage.includes('Reject code') ||
    errorMessage.includes('non_replicated_rejection')
  ) {
    return 'Service is temporarily unavailable. Please try again shortly.';
  }

  // Detect network/connection errors
  if (
    errorMessage.includes('network') ||
    errorMessage.includes('fetch') ||
    errorMessage.includes('timeout')
  ) {
    return 'Unable to connect to the service. Please check your connection and try again.';
  }

  // Generic fallback for unknown errors
  return 'An unexpected error occurred. Please try again.';
}
