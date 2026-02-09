import { useState, useEffect, FormEvent } from 'react';
import { useSearch } from '@tanstack/react-router';
import { useRouteTransition } from '../hooks/useRouteTransition';
import { useLogin } from '../hooks/useQueries';
import { useActor } from '../hooks/useActor';
import GreenSectionCard from '../components/GreenSectionCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, Loader2 } from 'lucide-react';

export default function PlanLoginPage() {
  const { startTransition } = useRouteTransition();
  const search = useSearch({ strict: false }) as { plan?: string };
  const loginMutation = useLogin();
  const { actor, isFetching: actorInitializing } = useActor();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationError, setValidationError] = useState('');

  // Relax the guard to allow legitimate entry paths
  useEffect(() => {
    const fromPlans = sessionStorage.getItem('loginFromPlans');
    const fromSignup = sessionStorage.getItem('loginFromSignup');
    
    // Only redirect if neither flag is set (prevents direct URL access)
    // But allow navigation from plan cards and signup flow
    if (fromPlans !== 'true' && fromSignup !== 'true') {
      // Check if we have a plan in the URL, which indicates a legitimate entry
      if (!search.plan) {
        startTransition('/plans');
      }
    }
  }, [startTransition, search.plan]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setValidationError('');

    // Guard: Prevent submission if actor is not ready
    if (!actor) {
      setValidationError('Service is initializing. Please wait a moment.');
      return;
    }

    // Client-side validation
    if (!email.trim()) {
      setValidationError('Please enter your email address.');
      return;
    }

    if (!email.includes('@')) {
      setValidationError('Please enter a valid email address.');
      return;
    }

    if (!password) {
      setValidationError('Please enter your password.');
      return;
    }

    // Attempt login
    loginMutation.mutate(
      { email: email.trim(), password },
      {
        onSuccess: (data) => {
          // Resolve plan tier from multiple sources
          let planTier = data.planId || 
                        search.plan || 
                        sessionStorage.getItem('signupPlanTier') || 
                        sessionStorage.getItem('loginPlanTier') || 
                        'regular';

          // Persist plan tier for profit page
          sessionStorage.setItem('profitPagePlanTier', planTier);
          
          // Clear login flags
          sessionStorage.removeItem('loginFromPlans');
          sessionStorage.removeItem('loginFromSignup');
          sessionStorage.removeItem('signupPlanTier');
          sessionStorage.removeItem('loginPlanTier');

          // Navigate to profit page
          startTransition('/plans/profit', { search: { plan: planTier } });
        },
      }
    );
  };

  const isSubmitting = loginMutation.isPending;
  const backendError = loginMutation.error?.message;
  const isActorReady = !!actor && !actorInitializing;

  return (
    <div className="w-full py-20 px-4">
      <div className="container mx-auto max-w-md">
        <GreenSectionCard className="p-8">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-muted-foreground">
              Log in to access your partnership account
            </p>
          </div>

          {/* Actor Initialization Status */}
          {actorInitializing && (
            <Alert className="mb-4">
              <Loader2 className="h-4 w-4 animate-spin" />
              <AlertDescription>Initializing service, please wait...</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting || !isActorReady}
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isSubmitting || !isActorReady}
                required
              />
            </div>

            {/* Validation Error */}
            {validationError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{validationError}</AlertDescription>
              </Alert>
            )}

            {/* Backend Error - only show when not submitting */}
            {backendError && !isSubmitting && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{backendError}</AlertDescription>
              </Alert>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting || !isActorReady}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : !isActorReady ? (
                'Initializing...'
              ) : (
                'Log In'
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => startTransition('/plans')}
                className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
              >
                View plans
              </button>
            </p>
          </div>
        </GreenSectionCard>
      </div>
    </div>
  );
}
