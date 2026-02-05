import { ReactNode } from 'react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useIsCallerAdmin } from '../hooks/useQueries';
import { Button } from '@/components/ui/button';
import { Shield, Loader2 } from 'lucide-react';

interface AdminAccessGateProps {
  children: ReactNode;
}

export default function AdminAccessGate({ children }: AdminAccessGateProps) {
  const { login, loginStatus, identity, isInitializing } = useInternetIdentity();
  const { data: isAdmin, isLoading: isCheckingAdmin } = useIsCallerAdmin();

  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === 'logging-in';

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
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
        <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
          <Shield className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Admin Access Required</h2>
          <p className="text-muted-foreground max-w-md">
            This page is restricted to administrators. Please log in to continue.
          </p>
        </div>
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
      </div>
    );
  }

  // Authenticated but not admin - show access denied
  if (!isAdmin) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
        <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center">
          <Shield className="w-10 h-10 text-destructive" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Access Denied</h2>
          <p className="text-muted-foreground max-w-md">
            You do not have permission to view this page. Only administrators can access this content.
          </p>
        </div>
      </div>
    );
  }

  // Authenticated and admin - render protected content
  return <>{children}</>;
}
