import GreenSectionCard from '../components/GreenSectionCard';
import { Button } from '@/components/ui/button';
import { MessageCircle, ExternalLink } from 'lucide-react';

export default function TelegramPage() {
  const telegramLink = 'https://t.me/Portal_fx_sign';

  return (
    <div className="w-full py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <GreenSectionCard className="p-10 md:p-14">
          {/* Icon and Title */}
          <div className="text-center mb-10">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center shadow-lg">
              <MessageCircle className="w-14 h-14 text-emerald-600 dark:text-emerald-400" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              Welcome to TelsFX
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mb-4">
              Thank you for creating your account! To complete your setup and unlock full access to our partnership programs, please join our official Telegram community.
            </p>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Our team is ready to assist you with personalized support, exclusive resources, and real-time updates. Click the button below to connect with us on Telegram.
            </p>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 dark:from-emerald-500 dark:to-teal-500 shadow-lg hover:shadow-xl transition-all"
            asChild
          >
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Join Our Telegram Community</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </Button>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Make sure you have Telegram installed on your device. The link will open in a new tab.
          </p>
        </GreenSectionCard>
      </div>
    </div>
  );
}
