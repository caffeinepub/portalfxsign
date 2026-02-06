import { ReactNode } from 'react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useIsCallerAdmin } from '../hooks/useQueries';
import { useRouteTransition } from '../hooks/useRouteTransition';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Loader2, HelpCircle, Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface AdminAccessGateProps {
  children: ReactNode;
}

export default function AdminAccessGate({ children }: AdminAccessGateProps) {
  const { login, loginStatus, identity, isInitializing } = useInternetIdentity();
  const { data: isAdmin, isLoading: isCheckingAdmin } = useIsCallerAdmin();
  const { startTransition } = useRouteTransition();
  const [copied, setCopied] = useState(false);

  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === 'logging-in';

  // Get the current principal if available
  const currentPrincipal = identity?.getPrincipal().toString();

  const handleCopyPrincipal = async () => {
    if (currentPrincipal) {
      await navigator.clipboard.writeText(currentPrincipal);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleNavigateToHelp = () => {
    startTransition('/admin-help');
  };

  // Show loading state while initializing or checking admin status
  if (isInitializing || (isAuthenticated && isCheckingAdmin)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <Loader2 className="w-12 h-12 animate-spin text-emerald-600" />
        <p className="text-muted-foreground">Verifying access...</p>
      </div>
    );
  }

  // Not authenticated - show login CTA
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 px-4">
        <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
          <Shield className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Admin Access Required</h2>
          <p className="text-muted-foreground max-w-md">
            This page is restricted to administrators. Please log in to continue.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            size="lg"
            onClick={login}
            disabled={isLoggingIn}
            className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Logging in...
              </>
            ) : (
              'Admin Login'
            )}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleNavigateToHelp}
          >
            <HelpCircle className="mr-2 h-5 w-5" />
            Need Help?
          </Button>
        </div>
      </div>
    );
  }

  // Authenticated but not admin - show access denied with principal info
  if (!isAdmin) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 px-4 py-8">
        <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center">
          <Shield className="w-10 h-10 text-destructive" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Access Denied</h2>
          <p className="text-muted-foreground max-w-md">
            You do not have permission to view this page. Only administrators can access this content.
          </p>
        </div>

        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-lg">Your Internet Identity Principal</CardTitle>
            <CardDescription>
              This is your unique identifier on the Internet Computer
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentPrincipal ? (
              <>
                <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                  <code className="text-xs font-mono flex-1 break-all">
                    {currentPrincipal}
                  </code>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleCopyPrincipal}
                    className="shrink-0"
                  >
                    {copied ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <Alert>
                  <AlertDescription className="text-sm">
                    <strong>To gain admin access:</strong> The admin Principal must be configured in{' '}
                    <code className="text-xs">frontend/src/config/admin.ts</code> and must exactly match 
                    the Principal shown above. After updating the configuration file, redeploy the application.
                  </AlertDescription>
                </Alert>
              </>
            ) : (
              <Alert>
                <AlertDescription>
                  Unable to retrieve your Principal. Please try logging out and logging back in.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        <Button
          size="lg"
          variant="outline"
          onClick={handleNavigateToHelp}
          className="mt-4"
        >
          <HelpCircle className="mr-2 h-5 w-5" />
          View Setup Instructions
        </Button>
      </div>
    );
  }

  // Authenticated and admin - render protected content
  return <>{children}</>;
}
