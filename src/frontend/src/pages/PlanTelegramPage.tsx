import GreenSectionCard from '../components/GreenSectionCard';
import { Button } from '@/components/ui/button';
import { MessageCircle, ExternalLink } from 'lucide-react';

export default function PlanTelegramPage() {
  const telegramLink = 'https://t.me/Portal_fx_sign';

  return (
    <div className="w-full py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <GreenSectionCard className="p-8 md:p-12 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center">
            <MessageCircle className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
            Join Our Telegram Community
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
            Connect with our team and community on Telegram to complete your partnership setup and get access to exclusive updates, resources, and support.
          </p>

          <div className="bg-muted/50 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-semibold text-base mb-3">What happens next:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">1.</span>
                <span>Click the button below to open our Telegram channel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">2.</span>
                <span>Join the channel and introduce yourself</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">3.</span>
                <span>Our team will reach out to guide you through the next steps</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">4.</span>
                <span>Get access to exclusive partnership resources and community</span>
              </li>
            </ul>
          </div>

          <Button
            size="lg"
            className="w-full h-12 text-base bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 dark:from-emerald-500 dark:to-teal-500"
            asChild
          >
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Open Telegram Channel
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>

          <p className="text-xs text-muted-foreground mt-6">
            Make sure you have Telegram installed on your device
          </p>
        </GreenSectionCard>
      </div>
    </div>
  );
}
