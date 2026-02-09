import GreenSectionCard from '../components/GreenSectionCard';
import { Button } from '@/components/ui/button';
import { MessageCircle, ExternalLink } from 'lucide-react';

export default function TelegramPage() {
  const telegramLink = 'https://t.me/Portal_fx_sign';

  return (
    <div className="w-full py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <GreenSectionCard className="p-8 md:p-12 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
            <MessageCircle className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
            Welcome to TelsFX
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
            Join our Telegram community to connect with our team, get exclusive updates, and access partnership resources.
          </p>

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
              Join Telegram Channel
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
