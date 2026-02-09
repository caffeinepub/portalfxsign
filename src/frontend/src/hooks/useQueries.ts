import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Account, UserProfile, UserLoginResponse, InternetIdentityLoginInfo } from '../backend';
import { normalizeBackendError } from '../utils/backendErrorMessage';

// Account creation mutation with health preflight check
export function useCreateAccount() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; email: string; password: string; planId?: string | null }) => {
      if (!actor) throw new Error('Actor not available');

      try {
        // Preflight health check to ensure canister is running
        await actor.healthCheck();
      } catch (healthError) {
        // If health check fails, throw normalized error and skip createAccount
        throw new Error(normalizeBackendError(healthError));
      }

      try {
        // Proceed with account creation
        const result = await actor.createAccount(data.name, data.email, data.password, data.planId || null);
        if (result !== 'Account successfully created!') {
          throw new Error(result);
        }
        return result;
      } catch (createError) {
        // Normalize any errors from createAccount
        throw new Error(normalizeBackendError(createError));
      }
    },
    onSuccess: () => {
      // Invalidate account statistics to update the counter
      queryClient.invalidateQueries({ queryKey: ['accountStatistics'] });
    },
  });
}

// User login mutation with health preflight check
export function useLogin() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (data: { email: string; password: string }): Promise<{ planId: string | null }> => {
      if (!actor) throw new Error('Actor not available');

      try {
        // Preflight health check to ensure canister is running
        await actor.healthCheck();
      } catch (healthError) {
        // If health check fails, throw normalized error and skip login
        throw new Error(normalizeBackendError(healthError));
      }

      try {
        // Attempt login
        const result: UserLoginResponse = await actor.login(data.email, data.password);

        if (result.__kind__ === 'failure') {
          // Throw the user-friendly error message from backend directly
          throw new Error(result.failure);
        }

        // Success case - return planId
        return { planId: result.success };
      } catch (loginError) {
        // Catch any transport/replica errors during the login call itself
        // Check if this is already a business logic error (from the failure branch above)
        const errorMessage = loginError instanceof Error ? loginError.message : String(loginError);
        
        // If it's a known business logic message, preserve it
        if (
          errorMessage.includes('Invalid email or password') ||
          errorMessage.includes('already in use') ||
          errorMessage.includes('Invalid email')
        ) {
          throw loginError;
        }
        
        // Otherwise, normalize transport/replica errors
        throw new Error(normalizeBackendError(loginError));
      }
    },
  });
}

// Get account statistics (total count)
export function useGetAccountStatistics() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['accountStatistics'],
    queryFn: async () => {
      if (!actor) return { totalAccounts: BigInt(0) };
      try {
        return await actor.getAccountStatistics();
      } catch (error) {
        console.error('Failed to fetch account statistics:', normalizeBackendError(error));
        return { totalAccounts: BigInt(0) };
      }
    },
    enabled: !!actor && !isFetching,
  });
}

// List all accounts (admin only)
export function useListAllAccounts() {
  const { actor, isFetching } = useActor();

  return useQuery<Account[]>({
    queryKey: ['allAccounts'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      try {
        return await actor.listAllAccounts();
      } catch (error) {
        throw new Error(normalizeBackendError(error));
      }
    },
    enabled: !!actor && !isFetching,
    retry: false,
  });
}

// List Internet Identity logins (admin only)
export function useListInternetIdentityLogins() {
  const { actor, isFetching } = useActor();

  return useQuery<InternetIdentityLoginInfo[]>({
    queryKey: ['internetIdentityLogins'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      try {
        return await actor.listInternetIdentityLogins();
      } catch (error) {
        throw new Error(normalizeBackendError(error));
      }
    },
    enabled: !!actor && !isFetching,
    retry: false,
  });
}

// Get caller user profile
export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<UserProfile | null>({
    queryKey: ['currentUserProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      try {
        return await actor.getCallerUserProfile();
      } catch (error) {
        throw new Error(normalizeBackendError(error));
      }
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

// Save caller user profile
export function useSaveCallerUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      if (!actor) throw new Error('Actor not available');
      try {
        return await actor.saveCallerUserProfile(profile);
      } catch (error) {
        throw new Error(normalizeBackendError(error));
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
  });
}
