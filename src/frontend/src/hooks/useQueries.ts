import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { useInternetIdentity } from './useInternetIdentity';
import type { Account, UserProfile } from '../backend';

// Account creation mutation
export function useCreateAccount() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; email: string; password: string; planId?: string | null }) => {
      if (!actor) throw new Error('Actor not available');
      const result = await actor.createAccount(data.name, data.email, data.password, data.planId || null);
      if (result !== 'Account successfully created!') {
        throw new Error(result);
      }
      return result;
    },
    onSuccess: () => {
      // Invalidate account statistics to update the counter
      queryClient.invalidateQueries({ queryKey: ['accountStatistics'] });
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
      return actor.getAccountStatistics();
    },
    enabled: !!actor && !isFetching,
  });
}

// List all accounts (admin only)
export function useListAllAccounts() {
  const { actor, isFetching } = useActor();
  const { identity } = useInternetIdentity();

  return useQuery<Account[]>({
    queryKey: ['allAccounts'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.listAllAccounts();
    },
    enabled: !!actor && !isFetching && !!identity,
    retry: false,
  });
}

// Get caller user profile
export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();
  const { identity } = useInternetIdentity();

  const query = useQuery<UserProfile | null>({
    queryKey: ['currentUserProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching && !!identity,
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
      return actor.saveCallerUserProfile(profile);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
  });
}

// Check if caller is admin
export function useIsCallerAdmin() {
  const { actor, isFetching } = useActor();
  const { identity } = useInternetIdentity();

  return useQuery<boolean>({
    queryKey: ['isCallerAdmin'],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !isFetching && !!identity,
    retry: false,
  });
}
