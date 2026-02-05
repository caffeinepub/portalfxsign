import { useState } from 'react';
import { useRouterState } from '@tanstack/react-router';
import { useRouteTransition } from '../hooks/useRouteTransition';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function SiteHeader() {
  const { startTransition } = useRouteTransition();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Access Plans', path: '/plans' },
    { label: 'Products', path: '/products' },
  ];

  const handleNavigation = (path: string) => {
    startTransition(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <button
            onClick={() => handleNavigation('/')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/assets/generated/telsfx-logo-green-emblem.dim_512x512.png"
              alt="TelsFX"
              className="h-10 w-10"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              TelsFX
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={currentPath === item.path ? 'default' : 'ghost'}
                onClick={() => handleNavigation(item.path)}
                className={currentPath === item.path ? 'bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600' : ''}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/40">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  variant={currentPath === item.path ? 'default' : 'ghost'}
                  onClick={() => handleNavigation(item.path)}
                  className={`justify-start ${currentPath === item.path ? 'bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600' : ''}`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
