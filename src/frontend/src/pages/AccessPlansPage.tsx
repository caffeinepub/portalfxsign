import { useRouteTransition } from '../hooks/useRouteTransition';
import GreenSectionCard from '../components/GreenSectionCard';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function AccessPlansPage() {
  const { startTransition } = useRouteTransition();

  const handlePlanSignup = (planType: string) => {
    startTransition('/plans/signup', { search: { plan: planType } });
  };

  const handleLoginClick = (planType: string) => {
    // Set flags in sessionStorage to verify the login page was reached from plans
    sessionStorage.setItem('loginFromPlans', 'true');
    sessionStorage.setItem('loginPlanTier', planType);
    startTransition('/plans/login', { search: { plan: planType } });
  };

  return (
    <div className="w-full py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
            Access Plans
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the partnership plan that aligns with your goals and commitment level
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Regular Plan */}
          <GreenSectionCard className="p-8 flex flex-col">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Regular Partnership</h2>
              <p className="text-muted-foreground text-sm">Perfect for those starting their partnership journey</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">$300</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Partnership fee</p>
              <div className="bg-emerald-50 dark:bg-emerald-950/30 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <p className="text-xs text-muted-foreground mb-1">Potential profit:</p>
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">$5,000</p>
              </div>
            </div>

            <div className="space-y-3 mb-6 flex-1">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Access to partnership resources</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Community forum access</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Educational materials</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full" 
              onClick={() => handlePlanSignup('regular')}
            >
              Sign Up
            </Button>

            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Already have an account?
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleLoginClick('regular')}
                className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
              >
                Log in
              </Button>
            </div>
          </GreenSectionCard>

          {/* VIP Plan */}
          <GreenSectionCard className="p-8 flex flex-col border-2 border-emerald-500/50 dark:border-emerald-400/30 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-emerald-600 dark:bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              POPULAR
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">VIP Partnership</h2>
              <p className="text-muted-foreground text-sm">For serious partners seeking enhanced opportunities</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">$1,000</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Partnership fee</p>
              <div className="bg-emerald-50 dark:bg-emerald-950/30 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <p className="text-xs text-muted-foreground mb-1">Potential profit:</p>
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">$10,000</p>
              </div>
            </div>

            <div className="space-y-3 mb-6 flex-1">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">All Regular benefits</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Priority access to opportunities</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Dedicated support team</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Advanced analytics dashboard</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full" 
              onClick={() => handlePlanSignup('vip')}
            >
              Sign Up
            </Button>

            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Already have an account?
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleLoginClick('vip')}
                className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
              >
                Log in
              </Button>
            </div>
          </GreenSectionCard>

          {/* VIP+ Plan */}
          <GreenSectionCard className="p-8 flex flex-col">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">VIP+ Partnership</h2>
              <p className="text-muted-foreground text-sm">Elite tier for maximum profit potential</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">$5,000</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Partnership fee</p>
              <div className="bg-emerald-50 dark:bg-emerald-950/30 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <p className="text-xs text-muted-foreground mb-1">Potential profit:</p>
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">$15,000</p>
              </div>
            </div>

            <div className="space-y-3 mb-6 flex-1">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">All VIP benefits</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Exclusive partnership opportunities</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Personal account manager</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Premium profit-sharing model</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Early access to new products</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full" 
              onClick={() => handlePlanSignup('vip-plus')}
            >
              Sign Up
            </Button>

            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Already have an account?
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleLoginClick('vip-plus')}
                className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
              >
                Log in
              </Button>
            </div>
          </GreenSectionCard>
        </div>
      </div>
    </div>
  );
}
