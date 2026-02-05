import { useState } from 'react';
import AdminAccessGate from '../components/AdminAccessGate';
import { useListAllAccounts } from '../hooks/useQueries';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useQueryClient } from '@tanstack/react-query';
import { useRouteTransition } from '../hooks/useRouteTransition';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Loader2, Users, ArrowLeft, LogOut } from 'lucide-react';
import GreenSectionCard from '../components/GreenSectionCard';

export default function AdminUsersPage() {
  const { startTransition } = useRouteTransition();
  const { clear } = useInternetIdentity();
  const queryClient = useQueryClient();
  const { data: accounts, isLoading, error } = useListAllAccounts();

  const handleLogout = async () => {
    await clear();
    queryClient.clear();
    startTransition('/');
  };

  return (
    <AdminAccessGate>
      <div className="w-full py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="ghost"
              onClick={() => startTransition('/')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <Button
              variant="outline"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>

          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              User Accounts
            </h1>
            <p className="text-lg text-muted-foreground">
              View and manage all registered user accounts
            </p>
          </div>

          <GreenSectionCard className="p-6 md:p-8">
            {isLoading && (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <Loader2 className="w-10 h-10 animate-spin text-emerald-600" />
                <p className="text-muted-foreground">Loading accounts...</p>
              </div>
            )}

            {error && (
              <div className="text-center py-12">
                <p className="text-destructive">Failed to load accounts. Please try again.</p>
              </div>
            )}

            {!isLoading && !error && accounts && accounts.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                  <Users className="w-8 h-8 text-muted-foreground" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold">No Accounts Yet</h3>
                  <p className="text-muted-foreground">
                    User accounts will appear here once people start signing up.
                  </p>
                </div>
              </div>
            )}

            {!isLoading && !error && accounts && accounts.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Total accounts: <span className="font-semibold text-foreground">{accounts.length}</span>
                  </p>
                </div>
                <div className="rounded-md border overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Full Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Plan</TableHead>
                        <TableHead>Created</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {accounts.map((account, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{account.fullName}</TableCell>
                          <TableCell>{account.email}</TableCell>
                          <TableCell>
                            {account.planId ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                {account.planId}
                              </span>
                            ) : (
                              <span className="text-muted-foreground text-sm">None</span>
                            )}
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {new Date(Number(account.created) / 1000000).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}
          </GreenSectionCard>
        </div>
      </div>
    </AdminAccessGate>
  );
}
