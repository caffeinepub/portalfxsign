import { useRouteTransition } from '../hooks/useRouteTransition';
import { Loader2 } from 'lucide-react';

export default function RouteTransitionOverlay() {
  const { isTransitioning } = useRouteTransition();

  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-16 h-16 text-emerald-600 dark:text-emerald-400 animate-spin" />
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
