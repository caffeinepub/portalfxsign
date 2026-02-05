import { Separator } from '@/components/ui/separator';
import { useRouteTransition } from '@/hooks/useRouteTransition';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const { startTransition } = useRouteTransition();

  const teslaAssociatedCompanies = [
    'Panasonic Corporation',
    'Samsung SDI',
    'LG Energy Solution',
    'CATL (Contemporary Amperex Technology)',
    'Ganfeng Lithium',
    'Albemarle Corporation',
  ];

  const handleTermsClick = () => {
    startTransition('/terms');
  };

  const handlePrivacyClick = () => {
    startTransition('/privacy');
  };

  return (
    <footer className="w-full border-t border-border/40 bg-muted/30">
      {/* Leadership & Companies Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Industry Recognition</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Inspired by leaders in sustainable technology and innovation
          </p>
        </div>

        {/* Elon Musk Recognition */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-lg p-8 border border-emerald-200 dark:border-emerald-800">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Elon Musk</h3>
              <p className="text-lg text-muted-foreground mb-4">Founder & CEO of Tesla, Inc.</p>
              <p className="text-sm text-muted-foreground italic">
                A visionary leader in sustainable technology, electric vehicles, and renewable energy innovation
              </p>
            </div>
          </div>
        </div>

        {/* Associated Companies */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-6">
            Companies Known to Work with Tesla
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {teslaAssociatedCompanies.map((company, index) => (
              <div
                key={index}
                className="bg-muted/50 rounded-lg p-4 text-center border border-border/50"
              >
                <p className="font-medium text-sm">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator className="container mx-auto" />

      {/* Legal Links */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button 
              onClick={handleTermsClick}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms & Conditions
            </button>
            <button 
              onClick={handlePrivacyClick}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <Separator className="container mx-auto" />

      {/* Copyright */}
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear}
        </p>
      </div>
    </footer>
  );
}
