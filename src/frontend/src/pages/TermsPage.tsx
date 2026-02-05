import GreenSectionCard from '@/components/GreenSectionCard';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Terms & Conditions
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Last updated: February 5, 2026
          </p>

          <GreenSectionCard className="p-8">
            <ScrollArea className="h-[600px] pr-4">
              <div className="space-y-8">
                {/* Introduction */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to TelsFX. These Terms and Conditions ("Terms") govern your access to and use of our website, services, and products. By accessing or using TelsFX, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our services.
                  </p>
                </section>

                {/* Acceptance of Terms */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    By creating an account, accessing our platform, or using any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. These Terms apply to all visitors, users, and others who access or use the service.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these Terms at any time. Your continued use of TelsFX after any such changes constitutes your acceptance of the new Terms.
                  </p>
                </section>

                {/* User Accounts */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    To access certain features of TelsFX, you may be required to create an account. You agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Accept responsibility for all activities that occur under your account</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent, abusive, or illegal activities.
                  </p>
                </section>

                {/* Services and Access Plans */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. Services and Access Plans</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    TelsFX offers various access plans and services. By selecting and subscribing to a plan, you agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Pay all applicable fees associated with your chosen plan</li>
                    <li>Comply with the specific terms and limitations of your selected plan</li>
                    <li>Understand that plan features, pricing, and availability may change</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    We reserve the right to modify, suspend, or discontinue any service or plan at any time with or without notice.
                  </p>
                </section>

                {/* Intellectual Property */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    All content, features, and functionality on TelsFX, including but not limited to text, graphics, logos, images, software, and design, are the exclusive property of TelsFX or its licensors and are protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from TelsFX without our prior written consent.
                  </p>
                </section>

                {/* User Conduct */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">6. User Conduct and Prohibited Activities</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    You agree not to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Use the service for any illegal or unauthorized purpose</li>
                    <li>Violate any laws in your jurisdiction</li>
                    <li>Infringe upon the rights of others</li>
                    <li>Transmit any harmful code, viruses, or malicious software</li>
                    <li>Attempt to gain unauthorized access to our systems or networks</li>
                    <li>Interfere with or disrupt the service or servers</li>
                    <li>Impersonate any person or entity</li>
                    <li>Collect or harvest information about other users</li>
                    <li>Use automated systems to access the service without permission</li>
                  </ul>
                </section>

                {/* Disclaimer */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">7. Disclaimer of Warranties</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    TelsFX is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>The service will be uninterrupted, timely, secure, or error-free</li>
                    <li>The results obtained from using the service will be accurate or reliable</li>
                    <li>Any errors in the service will be corrected</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Your use of TelsFX is at your sole risk. We disclaim all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
                  </p>
                </section>

                {/* Limitation of Liability */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To the maximum extent permitted by law, TelsFX and its affiliates, officers, employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill, arising out of or related to your use of or inability to use the service, even if we have been advised of the possibility of such damages.
                  </p>
                </section>

                {/* Indemnification */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to indemnify, defend, and hold harmless TelsFX and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your access to or use of the service, your violation of these Terms, or your violation of any rights of another party.
                  </p>
                </section>

                {/* Third-Party Links */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">10. Third-Party Links and Services</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    TelsFX may contain links to third-party websites or services that are not owned or controlled by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that TelsFX shall not be responsible or liable for any damage or loss caused by your use of any third-party content, goods, or services.
                  </p>
                </section>

                {/* Termination */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We may terminate or suspend your account and access to the service immediately, without prior notice or liability, for any reason, including but not limited to breach of these Terms.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Upon termination, your right to use the service will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                  </p>
                </section>

                {/* Governing Law */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">12. Governing Law and Jurisdiction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions. Any disputes arising from these Terms or your use of TelsFX shall be resolved in the appropriate courts, and you consent to the personal jurisdiction of such courts.
                  </p>
                </section>

                {/* Changes to Terms */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after revisions become effective, you agree to be bound by the revised terms.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    If you have any questions about these Terms, please contact us through the following channels:
                  </p>
                  <ul className="list-none space-y-2 text-muted-foreground ml-4">
                    <li>• Telegram: t.me/Portal_fx_sign</li>
                    <li>• Website: TelsFX platform</li>
                  </ul>
                </section>

                {/* Severability */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">15. Severability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions will remain in effect. The failure of TelsFX to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                  </p>
                </section>

                {/* Entire Agreement */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4">16. Entire Agreement</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms constitute the entire agreement between you and TelsFX regarding the use of our service and supersede all prior agreements and understandings, whether written or oral, regarding the subject matter herein.
                  </p>
                </section>

                {/* Acknowledgment */}
                <section className="border-t pt-6 mt-8">
                  <p className="text-muted-foreground leading-relaxed italic">
                    By using TelsFX, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
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
