import GreenSectionCard from '../components/GreenSectionCard';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function TermsPage() {
  return (
    <div className="w-full py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <GreenSectionCard className="p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Terms & Conditions</h1>
          
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-6 text-sm text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing and using TelsFX, you accept and agree to be bound by the terms and provisions 
                  of this agreement. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">2. Partnership Plans</h2>
                <p className="leading-relaxed">
                  Our partnership plans provide access to community resources and opportunities. Plan details, 
                  benefits, and pricing are subject to change. We reserve the right to modify or discontinue 
                  any plan at any time with reasonable notice to members.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">3. User Accounts</h2>
                <p className="leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account credentials and for 
                  all activities that occur under your account. You agree to notify us immediately of any 
                  unauthorized use of your account.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">4. Prohibited Activities</h2>
                <p className="leading-relaxed mb-2">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Use our services for any illegal purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt our services</li>
                  <li>Impersonate any person or entity</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">5. Intellectual Property</h2>
                <p className="leading-relaxed">
                  All content, features, and functionality of TelsFX are owned by us and are protected by 
                  international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">6. Disclaimer of Warranties</h2>
                <p className="leading-relaxed">
                  Our services are provided "as is" without warranties of any kind, either express or implied. 
                  We do not guarantee that our services will be uninterrupted, secure, or error-free.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">7. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, 
                  special, consequential, or punitive damages arising out of or relating to your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">8. Termination</h2>
                <p className="leading-relaxed">
                  We reserve the right to terminate or suspend your account and access to our services at our 
                  sole discretion, without notice, for conduct that we believe violates these terms or is harmful 
                  to other users or our business.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">9. Changes to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users of any material 
                  changes by posting the new terms on this page. Your continued use of our services after such 
                  changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact Information</h2>
                <p className="leading-relaxed">
                  If you have any questions about these terms, please contact us through our Telegram community 
                  or email support.
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
