import GreenSectionCard from '../components/GreenSectionCard';
import GetStartedForm from '../components/GetStartedForm';
import UsersWorldwideKpi from '../components/UsersWorldwideKpi';
import { useRouteTransition } from '../hooks/useRouteTransition';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Globe, TrendingUp } from 'lucide-react';

export default function LandingPage() {
  const { startTransition } = useRouteTransition();

  const handleSignupSuccess = () => {
    startTransition('/telegram');
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-background to-teal-50/30 dark:from-emerald-950/20 dark:via-background dark:to-teal-950/10" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              Building Tomorrow's Future
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join a community of forward-thinking partners exploring opportunities inspired by sustainable innovation
            </p>
          </div>

          {/* Users Worldwide KPI */}
          <div className="flex justify-center mb-12">
            <UsersWorldwideKpi />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <GreenSectionCard className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <Zap className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
              <p className="text-muted-foreground">
                Participate in opportunities inspired by cutting-edge clean technology and sustainable energy solutions
              </p>
            </GreenSectionCard>

            <GreenSectionCard className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <Globe className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Community</h3>
              <p className="text-muted-foreground">
                Connect with like-minded individuals who share a passion for technological progress and a better future
              </p>
            </GreenSectionCard>

            <GreenSectionCard className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Exclusive Access</h3>
              <p className="text-muted-foreground">
                Unlock curated packages and resources designed to support your journey in sustainable technology
              </p>
            </GreenSectionCard>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-emerald-50/30 dark:to-emerald-950/10">
        <div className="container mx-auto max-w-4xl">
          <GreenSectionCard className="p-10 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Mission</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Welcome to <span className="font-semibold text-foreground">TelsFX</span>, a platform designed to help forward-thinking partners explore opportunities inspired by Tesla's vision of sustainable technology. Our mission is to connect individuals and businesses who share a passion for innovation, clean energy, and a better future.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                Through our exclusive partnership-style programs, members gain access to curated packages, insights, and unique opportunities that support technological progress. By joining our community and sharing your interest, you can unlock access to a range of resources designed to help you participate in building a smarter, greener tomorrow.
              </p>
            </div>
          </GreenSectionCard>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started Today</h2>
            <p className="text-lg text-muted-foreground">
              Create your account and unlock exclusive access to our partnership programs
            </p>
          </div>
          <GreenSectionCard className="p-8 md:p-10">
            <GetStartedForm onSuccess={handleSignupSuccess} />
          </GreenSectionCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-700 dark:to-teal-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Explore Our Programs?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Discover our Regular, VIP, and VIP+ partnership plans designed to match your goals and commitment level
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => startTransition('/plans')}
              className="text-lg px-8 py-6"
            >
              View Access Plans
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => startTransition('/products')}
              className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30"
            >
              Explore Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
