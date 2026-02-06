import { useSearch } from '@tanstack/react-router';
import { useRouteTransition } from '../hooks/useRouteTransition';
import GreenSectionCard from '../components/GreenSectionCard';
import { Button } from '@/components/ui/button';
import { CheckCircle2, TrendingUp, Package, ExternalLink } from 'lucide-react';
import { SiTesla } from 'react-icons/si';

export default function PlanPostSignupPage() {
  const { startTransition } = useRouteTransition();
  const search = useSearch({ strict: false }) as { plan?: string };
  const selectedPlan = search.plan || 'regular';

  const planNames: Record<string, string> = {
    regular: 'Regular Partnership',
    vip: 'VIP Partnership',
    'vip-plus': 'VIP+ Partnership',
  };

  // Plan-specific data
  const planData: Record<string, {
    extraProfit: string;
    products: Array<{ name: string; description: string }>;
  }> = {
    regular: {
      extraProfit: '$1,200',
      products: [
        {
          name: 'Tesla Model 3 Performance Package',
          description: 'Access exclusive performance upgrade profit opportunities for Model 3 vehicles, including enhanced acceleration and handling features that drive value.',
        },
        {
          name: 'Tesla Powerwall Home Battery',
          description: 'Profit from residential energy storage solutions, enabling sustainable home power management with strong market demand.',
        },
        {
          name: 'Tesla Solar Roof Integration',
          description: 'Generate profit through solar roof installation programs, combining renewable energy generation with home aesthetics for premium returns.',
        },
      ],
    },
    vip: {
      extraProfit: '$2,500',
      products: [
        {
          name: 'Tesla Model S Plaid Edition',
          description: 'Premium profit opportunities from high-performance luxury sedan products with cutting-edge autonomous driving capabilities and strong market appeal.',
        },
        {
          name: 'Tesla Megapack Energy Storage',
          description: 'Commercial-scale energy storage profit opportunities for grid-level power management and sustainability with enterprise-level returns.',
        },
        {
          name: 'Tesla Supercharger Network Access',
          description: 'Exclusive profit benefits from the global fast-charging infrastructure network expansion with recurring revenue potential.',
        },
      ],
    },
    'vip-plus': {
      extraProfit: '$4,000',
      products: [
        {
          name: 'Tesla Cybertruck Founders Series',
          description: 'Elite profit access to revolutionary electric truck products with unmatched utility and performance capabilities driving maximum returns.',
        },
        {
          name: 'Tesla Semi Fleet Partnership',
          description: 'Premium commercial vehicle profit opportunities in sustainable long-haul transportation solutions with fleet-scale revenue potential.',
        },
        {
          name: 'Tesla Full Self-Driving Beta',
          description: 'Exclusive early access to advanced autonomous driving technology profit opportunities and development programs with exponential growth potential.',
        },
      ],
    },
  };

  const currentPlanData = planData[selectedPlan];

  return (
    <div className="w-full py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
            Welcome to {planNames[selectedPlan]}!
          </h1>
          <p className="text-lg text-muted-foreground">
            Your account has been successfully created. Here are your profit-generating products.
          </p>
        </div>

        {/* Profit Analysis Section */}
        <GreenSectionCard className="p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Your Profit Potential</h2>
              <p className="text-muted-foreground">Expected additional monthly earnings</p>
            </div>
          </div>
          <div className="text-center py-6 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg">
            <p className="text-4xl md:text-5xl font-bold text-emerald-600 dark:text-emerald-400">
              {currentPlanData.extraProfit}
            </p>
            <p className="text-sm text-muted-foreground mt-2">per month</p>
          </div>
        </GreenSectionCard>

        {/* Products Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-2xl font-bold">Your Profit-Generating Products</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            These Tesla-inspired products are designed to generate consistent profits for your partnership tier. Each product represents a unique opportunity to earn from sustainable technology innovation.
          </p>
          <div className="space-y-4">
            {currentPlanData.products.map((product, index) => (
              <GreenSectionCard key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                    <SiTesla className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              </GreenSectionCard>
            ))}
          </div>
        </div>

        {/* Telegram CTA Section */}
        <GreenSectionCard className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our Telegram community to connect with other partners, receive exclusive updates about your profit products, and get step-by-step guidance on maximizing your earnings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-base px-8 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
              onClick={() => startTransition('/telegram')}
            >
              Continue to Next Step
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8"
              asChild
            >
              <a
                href="https://t.me/Portal_fx_sign"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                Join Telegram Community
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </GreenSectionCard>
      </div>
    </div>
  );
}
