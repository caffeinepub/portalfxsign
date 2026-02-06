import { useRouteTransition } from '../hooks/useRouteTransition';
import GreenSectionCard from '../components/GreenSectionCard';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Shield, ArrowRight } from 'lucide-react';
import UsersWorldwideKpi from '../components/UsersWorldwideKpi';

export default function LandingPage() {
  const { startTransition } = useRouteTransition();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-background dark:from-emerald-950/20 dark:via-teal-950/20 dark:to-background" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              TelsFX
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join a community inspired by sustainable technology innovation and partnership opportunities
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <Button
              size="lg"
              className="text-lg px-8 py-6 h-auto bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
              onClick={() => startTransition('/plans')}
            >
              Explore Partnership Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <UsersWorldwideKpi />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <GreenSectionCard className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Mission</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground text-center leading-relaxed mb-8">
                We are building a community of forward-thinking individuals who believe in the power of 
                sustainable technology and collaborative partnerships. Our platform connects members with 
                opportunities inspired by innovation in electric vehicles, renewable energy, and cutting-edge technology.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Growth Focused</h3>
                <p className="text-muted-foreground">
                  Access opportunities designed to help you grow alongside sustainable technology innovation
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <Users className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
                <p className="text-muted-foreground">
                  Join a global network of partners committed to innovation and mutual success
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Transparent</h3>
                <p className="text-muted-foreground">
                  Clear partnership terms and straightforward opportunities for all members
                </p>
              </div>
            </div>
          </GreenSectionCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-background dark:from-emerald-950/20 dark:via-teal-950/20 dark:to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose a partnership plan that matches your goals and join our growing community today
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 h-auto bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
            onClick={() => startTransition('/plans')}
          >
            View Partnership Plans
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
