import GreenSectionCard from '@/components/GreenSectionCard';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Privacy Policy
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Last updated: February 5, 2026
          </p>

          <GreenSectionCard className="p-8">
            <ScrollArea className="h-[600px] pr-4">
              <div className="space-y-8">
                {/* Overview */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    At TelsFX, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our platform and services.
                  </p>
                </section>

                {/* Information We Collect */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Account information (name, email address, password)</li>
                    <li>Profile information and preferences</li>
                    <li>Communication data when you contact us</li>
                    <li>Usage data and analytics</li>
                    <li>Device and browser information</li>
                  </ul>
                </section>

                {/* How We Use Your Information */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process your transactions and manage your account</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Analyze usage patterns and optimize user experience</li>
                    <li>Protect against fraudulent or illegal activity</li>
                  </ul>
                </section>

                {/* Cookies and Tracking */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. Cookies and Tracking Technologies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings, though disabling cookies may affect your ability to use certain features of our service.
                  </p>
                </section>

                {/* Data Sharing */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. Information Sharing and Disclosure</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We do not sell your personal information. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>With your consent or at your direction</li>
                    <li>With service providers who assist in our operations</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and prevent fraud</li>
                    <li>In connection with a business transfer or merger</li>
                  </ul>
                </section>

                {/* Data Retention */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it.
                  </p>
                </section>

                {/* Security */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                {/* Your Rights */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">8. Your Privacy Rights and Choices</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Access and receive a copy of your data</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of your data</li>
                    <li>Object to or restrict certain processing</li>
                    <li>Withdraw consent where processing is based on consent</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    To exercise these rights, please contact us through the channels provided below.
                  </p>
                </section>

                {/* Children's Privacy */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information promptly.
                  </p>
                </section>

                {/* International Transfers */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">10. International Data Transfers</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                  </p>
                </section>

                {/* Contact */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <ul className="list-none space-y-2 text-muted-foreground ml-4">
                    <li>• Telegram: t.me/Portal_fx_sign</li>
                    <li>• Website: TelsFX platform</li>
                  </ul>
                </section>

                {/* Updates */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">12. Updates to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                  </p>
                </section>

                {/* Acknowledgment */}
                <section className="border-t pt-6 mt-8">
                  <p className="text-muted-foreground leading-relaxed italic">
                    By using TelsFX, you acknowledge that you have read and understood this Privacy Policy.
                  </p>
                </section>
              </div>
            </ScrollArea>
          </GreenSectionCard>
        </div>
      </div>
    </div>
  );
}
