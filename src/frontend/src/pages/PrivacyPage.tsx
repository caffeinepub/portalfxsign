import GreenSectionCard from '../components/GreenSectionCard';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function PrivacyPage() {
  return (
    <div className="w-full py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <GreenSectionCard className="p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
          
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-6 text-sm text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h2>
                <p className="leading-relaxed">
                  We collect information you provide directly to us, including your name, email address, 
                  and any other information you choose to provide when creating an account or using our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Your Information</h2>
                <p className="leading-relaxed mb-2">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process your partnership applications and transactions</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Communicate with you about products, services, and events</li>
                  <li>Monitor and analyze trends and usage</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Information Sharing</h2>
                <p className="leading-relaxed">
                  We do not share your personal information with third parties except as described in this policy. 
                  We may share information with service providers who perform services on our behalf, and when 
                  required by law or to protect our rights.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Data Security</h2>
                <p className="leading-relaxed">
                  We take reasonable measures to help protect your personal information from loss, theft, 
                  misuse, unauthorized access, disclosure, alteration, and destruction. However, no security 
                  system is impenetrable.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Your Rights</h2>
                <p className="leading-relaxed">
                  You have the right to access, update, or delete your personal information at any time. 
                  You may also opt out of receiving promotional communications from us by following the 
                  instructions in those messages.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Changes to This Policy</h2>
                <p className="leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes 
                  by posting the new policy on this page and updating the "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about this privacy policy, please contact us through our 
                  Telegram community or email support.
                </p>
              </section>

              <p className="text-xs mt-8 pt-4 border-t">
                Last Updated: February 2026
              </p>
            </div>
          </ScrollArea>
        </GreenSectionCard>
      </div>
    </div>
  );
}
