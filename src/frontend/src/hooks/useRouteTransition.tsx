import { createContext, useContext, useState, useCallback, ReactNode, useRef, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';

interface RouteTransitionContextType {
  isTransitioning: boolean;
  startTransition: (to: string, options?: { search?: Record<string, unknown> }) => void;
}

const RouteTransitionContext = createContext<RouteTransitionContextType | undefined>(undefined);

const TRANSITION_DURATION = 100; // 0.1 seconds

export function RouteTransitionProvider({ children }: { children: ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  const timersRef = useRef<{ navigation?: NodeJS.Timeout; cleanup?: NodeJS.Timeout; fallback?: NodeJS.Timeout }>({});

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (timersRef.current.navigation) clearTimeout(timersRef.current.navigation);
      if (timersRef.current.cleanup) clearTimeout(timersRef.current.cleanup);
      if (timersRef.current.fallback) clearTimeout(timersRef.current.fallback);
    };
  }, []);

  const startTransition = useCallback((to: string, options?: { search?: Record<string, unknown> }) => {
    // Clear any existing timers to prevent stale navigations
    if (timersRef.current.navigation) {
      clearTimeout(timersRef.current.navigation);
    }
    if (timersRef.current.cleanup) {
      clearTimeout(timersRef.current.cleanup);
    }
    if (timersRef.current.fallback) {
      clearTimeout(timersRef.current.fallback);
    }

    setIsTransitioning(true);

    // Show spinner for 0.1 seconds, then navigate
    timersRef.current.navigation = setTimeout(() => {
      try {
        navigate({ to, search: options?.search });
        
        // Keep spinner visible briefly during navigation, then hide
        timersRef.current.cleanup = setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      } catch (error) {
        console.error('Navigation error:', error);
        setIsTransitioning(false);
      }
    }, TRANSITION_DURATION);

    // Fallback: ensure overlay clears even if navigation fails
    timersRef.current.fallback = setTimeout(() => {
      setIsTransitioning(false);
    }, TRANSITION_DURATION + 500);
  }, [navigate]);

  return (
    <RouteTransitionContext.Provider value={{ isTransitioning, startTransition }}>
      {children}
    </RouteTransitionContext.Provider>
  );
}

export function useRouteTransition() {
  const context = useContext(RouteTransitionContext);
  if (!context) {
    throw new Error('useRouteTransition must be used within RouteTransitionProvider');
  }
  return context;
}
