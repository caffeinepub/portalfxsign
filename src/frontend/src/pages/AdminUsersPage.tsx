import { useListAllAccounts, useListInternetIdentityLogins } from '../hooks/useQueries';
import { useRequireAdminSession } from '../hooks/useAdminSession';
import { useRouteTransition } from '../hooks/useRouteTransition';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Loader2, Users, ShieldCheck, AlertCircle, KeyRound } from 'lucide-react';

export default function AdminUsersPage() {
  const { hasToken, isValid, isLoading: sessionLoading } = useRequireAdminSession();
  const { startTransition } = useRouteTransition();

  // Show loading while checking session
  if (sessionLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center min-h-[40vh] space-y-4">
          <Loader2 className="w-12 h-12 animate-spin text-emerald-600" />
          <p className="text-muted-foreground">Verifying access...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, show access denied with navigation back
  if (!hasToken || !isValid) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
          <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
            <AlertCircle className="w-10 h-10 text-red-600 dark:text-red-400" />
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Access Denied</h1>
            <p className="text-muted-foreground max-w-md">
              You do not have permission to access this page. Please contact an administrator if you believe this is an error.
            </p>
          </div>

          <Button
            onClick={() => startTransition('/')}
            className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
          >
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  return <AdminUsersContent />;
}

function AdminUsersContent() {
  const { data: accounts, isLoading: accountsLoading, error: accountsError } = useListAllAccounts();
  const { data: iiLogins, isLoading: iiLoginsLoading, error: iiLoginsError } = useListInternetIdentityLogins();

  const isLoading = accountsLoading || iiLoginsLoading;

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center min-h-[40vh] space-y-4">
          <Loader2 className="w-12 h-12 animate-spin text-emerald-600" />
          <p className="text-muted-foreground">Loading user data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      {/* Registered Users Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
              <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle className="text-2xl">Registered Users</CardTitle>
              <CardDescription>
                View all user accounts created through the platform
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6 border-emerald-200 dark:border-emerald-800">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <AlertDescription className="text-sm">
              <strong>Privacy Notice:</strong> Sensitive fields (such as password hashes) are never displayed 
              in this interface for security reasons.
            </AlertDescription>
          </Alert>

          {accountsError ? (
            <Alert variant="destructive">
              <AlertDescription>
                Failed to load user accounts. Please try again later.
              </AlertDescription>
            </Alert>
          ) : !accounts || accounts.length === 0 ? (
            <div className="text-center py-12">
              <Users className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground">No user accounts found</p>
            </div>
          ) : (
            <>
              <div className="rounded-md border">
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
                            <span className="text-muted-foreground text-sm">No plan</span>
                          )}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {new Date(Number(account.created) / 1000000).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                Total accounts: <strong>{accounts.length}</strong>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Internet Identity Logins Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <KeyRound className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-2xl">Internet Identity Logins</CardTitle>
              <CardDescription>
                View all users who have logged in with Internet Identity
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {iiLoginsError ? (
            <Alert variant="destructive">
              <AlertDescription>
                Failed to load Internet Identity logins. Please try again later.
              </AlertDescription>
            </Alert>
          ) : !iiLogins || iiLogins.length === 0 ? (
            <div className="text-center py-12">
              <KeyRound className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground">No Internet Identity logins recorded yet</p>
            </div>
          ) : (
            <>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Principal ID</TableHead>
                      <TableHead>Login Count</TableHead>
                      <TableHead>First Login</TableHead>
                      <TableHead>Last Login</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {iiLogins.map((login, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-mono text-xs">
                          {login.principal.toString()}
                        </TableCell>
                        <TableCell>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                            {login.logins.toString()}
                          </span>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {new Date(Number(login.firstLogin) / 1000000).toLocaleString()}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {new Date(Number(login.lastLogin) / 1000000).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                Total Internet Identity users: <strong>{iiLogins.length}</strong>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
