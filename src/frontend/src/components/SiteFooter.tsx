import { useRouteTransition } from '../hooks/useRouteTransition';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export default function SiteFooter() {
  const { startTransition } = useRouteTransition();

  return (
    <footer className="w-full border-t bg-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-semibold text-lg mb-3">About TelsFX</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A community platform inspired by sustainable technology innovation and partnership opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Button
                variant="link"
                className="justify-start p-0 h-auto text-sm text-muted-foreground hover:text-foreground"
                onClick={() => startTransition('/')}
              >
                Home
              </Button>
              <Button
                variant="link"
                className="justify-start p-0 h-auto text-sm text-muted-foreground hover:text-foreground"
                onClick={() => startTransition('/plans')}
              >
                Access Plans
              </Button>
              <Button
                variant="link"
                className="justify-start p-0 h-auto text-sm text-muted-foreground hover:text-foreground"
                onClick={() => startTransition('/products')}
              >
                Products
              </Button>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Legal</h3>
            <div className="flex flex-col gap-2">
              <Button
                variant="link"
                className="justify-start p-0 h-auto text-sm text-muted-foreground hover:text-foreground"
                onClick={() => startTransition('/terms')}
              >
                Terms & Conditions
              </Button>
              <Button
                variant="link"
                className="justify-start p-0 h-auto text-sm text-muted-foreground hover:text-foreground"
                onClick={() => startTransition('/privacy')}
              >
                Privacy Policy
              </Button>
              <Button
                variant="link"
                className="justify-start p-0 h-auto text-sm text-muted-foreground hover:text-foreground"
                onClick={() => startTransition('/telegram')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Recognition */}
        <div className="border-t pt-8 mb-6">
          <p className="text-sm text-muted-foreground text-center mb-4">
            Inspired by the vision and innovation of Elon Musk and the following companies:
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs text-muted-foreground">
            <span>Tesla</span>
            <span>•</span>
            <span>SpaceX</span>
            <span>•</span>
            <span>Neuralink</span>
            <span>•</span>
            <span>The Boring Company</span>
            <span>•</span>
            <span>X (formerly Twitter)</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © 2026. Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
