import { useRouteTransition } from '../hooks/useRouteTransition';
import GreenSectionCard from '../components/GreenSectionCard';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function PlanSuccessPage() {
  const { startTransition } = useRouteTransition();

  return (
    <div className="w-full py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <GreenSectionCard className="p-8 md:p-12 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
            Account Created Successfully!
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
            Your account has been created and you're ready to begin your partnership journey with TelsFX.
          </p>

          <div className="bg-muted/50 rounded-lg p-6 mb-8">
            <p className="text-base text-foreground mb-2">
              <strong>Next Step:</strong> Complete your setup on Telegram
            </p>
            <p className="text-sm text-muted-foreground">
              To finalize your partnership and access exclusive resources, please continue to our Telegram channel where our team will guide you through the next steps.
            </p>
          </div>

          <Button
            size="lg"
            className="w-full h-12 text-base bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
            onClick={() => startTransition('/telegram')}
          >
            Continue to Telegram
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </GreenSectionCard>
      </div>
    </div>
  );
}
