import { useState } from 'react';
import { useRouteTransition } from '../hooks/useRouteTransition';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Home, Package, CreditCard } from 'lucide-react';

export default function HeaderHamburgerMenu() {
  const { startTransition } = useRouteTransition();
  const [open, setOpen] = useState(false);

  const handleNavigation = (path: string) => {
    setOpen(false);
    startTransition(path);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-10 w-10">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[320px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Button
            variant="ghost"
            className="justify-start text-lg h-14"
            onClick={() => handleNavigation('/')}
          >
            <Home className="mr-3 h-5 w-5" />
            Home
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-lg h-14"
            onClick={() => handleNavigation('/plans')}
          >
            <CreditCard className="mr-3 h-5 w-5" />
            Access Plans
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-lg h-14"
            onClick={() => handleNavigation('/products')}
          >
            <Package className="mr-3 h-5 w-5" />
            Products
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
