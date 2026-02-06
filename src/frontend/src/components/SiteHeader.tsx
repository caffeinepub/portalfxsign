import { useRouteTransition } from '../hooks/useRouteTransition';
import HeaderHamburgerMenu from './HeaderHamburgerMenu';

export default function SiteHeader() {
  const { startTransition } = useRouteTransition();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => startTransition('/')}
        >
          <img 
            src="/assets/generated/telsfx-logo-green-emblem.dim_512x512.png" 
            alt="TelsFX Logo" 
            className="h-8 w-8"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
            TelsFX
          </span>
        </div>

        <HeaderHamburgerMenu />
      </div>
    </header>
  );
}
