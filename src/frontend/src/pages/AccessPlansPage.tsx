import { useRouteTransition } from '../hooks/useRouteTransition';
import GreenSectionCard from '../components/GreenSectionCard';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function AccessPlansPage() {
  const { startTransition } = useRouteTransition();

  const handlePlanSelect = (planType: string) => {
    startTransition('/plans/signup', { search: { plan: planType } });
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
          <GreenSectionCard 
            className="p-8 flex flex-col cursor-pointer hover:shadow-lg transition-shadow" 
            onClick={() => handlePlanSelect('regular')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handlePlanSelect('regular');
              }
            }}
          >
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
              onClick={(e) => {
                e.stopPropagation();
                handlePlanSelect('regular');
              }}
            >
              Select Regular
            </Button>
          </GreenSectionCard>

          {/* VIP Plan */}
          <GreenSectionCard 
            className="p-8 flex flex-col border-2 border-emerald-500/50 dark:border-emerald-400/30 relative overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" 
            onClick={() => handlePlanSelect('vip')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handlePlanSelect('vip');
              }
            }}
          >
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
                <span className="text-sm text-muted-foreground">Exclusive VIP events</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600" 
              onClick={(e) => {
                e.stopPropagation();
                handlePlanSelect('vip');
              }}
            >
              Select VIP
            </Button>
          </GreenSectionCard>

          {/* VIP+ Plan */}
          <GreenSectionCard 
            className="p-8 flex flex-col border-2 border-teal-500/50 dark:border-teal-400/30 relative overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" 
            onClick={() => handlePlanSelect('vip-plus')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handlePlanSelect('vip-plus');
              }
            }}
          >
            <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              PREMIUM
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">VIP+ Partnership</h2>
              <p className="text-muted-foreground text-sm">Elite tier for maximum commitment and returns</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">$5,000</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Partnership fee</p>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800">
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
                <span className="text-sm text-muted-foreground">Highest priority access</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Personal account manager</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Premium analytics suite</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Exclusive elite network</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 dark:from-emerald-500 dark:to-teal-500" 
              onClick={(e) => {
                e.stopPropagation();
                handlePlanSelect('vip-plus');
              }}
            >
              Select VIP+
            </Button>
          </GreenSectionCard>
        </div>

        {/* Additional Info */}
        <GreenSectionCard className="p-8 md:p-10 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Our partnership programs are designed to provide access to opportunities inspired by sustainable technology innovation. Members contribute on a regular schedule and gain access to exclusive resources, community insights, and potential returns based on program performance.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Each tier offers unique benefits and opportunities tailored to different levels of commitment. Join our community today and start your journey toward participating in the future of sustainable technology.
            </p>
          </div>
        </GreenSectionCard>
      </div>
    </div>
  );
}
