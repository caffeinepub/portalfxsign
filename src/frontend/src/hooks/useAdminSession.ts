import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { AdminLoginResponse, SessionToken } from '../backend';

const SESSION_TOKEN_KEY = 'admin_session_token';

// Store session token in sessionStorage
function storeSessionToken(token: SessionToken): void {
  sessionStorage.setItem(SESSION_TOKEN_KEY, token.toString());
}

// Retrieve session token from sessionStorage
function getStoredSessionToken(): SessionToken | null {
  const stored = sessionStorage.getItem(SESSION_TOKEN_KEY);
  if (!stored) return null;
  try {
    return BigInt(stored);
  } catch {
    return null;
  }
}

// Clear session token from sessionStorage
function clearSessionToken(): void {
  sessionStorage.removeItem(SESSION_TOKEN_KEY);
}

// Admin login mutation
export function useAdminLogin() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      if (!actor) throw new Error('Actor not available');
      const response: AdminLoginResponse = await actor.loginAdmin(email, password);
      
      if (response.__kind__ === 'failure') {
        throw new Error(response.failure);
      }
      
      return response.success;
    },
    onSuccess: (token) => {
      storeSessionToken(token);
      queryClient.invalidateQueries({ queryKey: ['adminSession'] });
      queryClient.invalidateQueries({ queryKey: ['allAccounts'] });
    },
  });
}

// Validate admin session
export function useValidateAdminSession() {
  const { actor, isFetching } = useActor();
  const storedToken = getStoredSessionToken();

  return useQuery({
    queryKey: ['adminSession', storedToken?.toString()],
    queryFn: async () => {
      if (!actor || !storedToken) return false;
      try {
        const isValid = await actor.validateAdminSession(storedToken);
        if (!isValid) {
          clearSessionToken();
        }
        return isValid;
      } catch {
        clearSessionToken();
        return false;
      }
    },
    enabled: !!actor && !isFetching && !!storedToken,
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Logout admin
export function useAdminLogout() {
  const queryClient = useQueryClient();

  return () => {
    clearSessionToken();
    queryClient.clear();
  };
}

// Hook to require admin session (for use in protected pages)
export function useRequireAdminSession() {
  const storedToken = getStoredSessionToken();
  const { data: isValid, isLoading } = useValidateAdminSession();

  return {
    hasToken: !!storedToken,
    isValid: isValid === true,
    isLoading,
    isAuthenticated: !!storedToken && isValid === true,
  };
}
