import GreenSectionCard from '../components/GreenSectionCard';
import { Car, Battery, Sun, Zap, Home, Truck } from 'lucide-react';

const products = [
  {
    icon: Car,
    title: 'Electric Vehicles',
    description: 'Explore opportunities related to cutting-edge electric vehicle technology, from sedans to performance models. Learn about the future of sustainable transportation and how electric mobility is reshaping the automotive industry.',
    features: ['Zero emissions', 'Advanced autopilot capabilities', 'Long-range battery technology', 'Over-the-air software updates']
  },
  {
    icon: Battery,
    title: 'Energy Storage Solutions',
    description: 'Discover large-scale battery storage systems designed for homes, businesses, and utilities. These solutions enable renewable energy storage and grid stabilization for a more sustainable energy future.',
    features: ['Scalable capacity', 'Peak demand management', 'Backup power capability', 'Integration with solar systems']
  },
  {
    icon: Sun,
    title: 'Solar Energy Systems',
    description: 'Learn about integrated solar panel and roof solutions that generate clean, renewable energy. Modern solar technology makes sustainable power accessible for residential and commercial applications.',
    features: ['High-efficiency panels', 'Sleek aesthetic design', 'Energy independence', 'Long-term cost savings']
  },
  {
    icon: Zap,
    title: 'Charging Infrastructure',
    description: 'Understand the expanding network of fast-charging stations and home charging solutions. Charging infrastructure is critical to the widespread adoption of electric vehicles worldwide.',
    features: ['Rapid charging capability', 'Global network expansion', 'Home and commercial options', 'Smart grid integration']
  },
  {
    icon: Home,
    title: 'Smart Home Integration',
    description: 'Explore how sustainable energy products integrate with smart home systems for optimal efficiency. Monitor and control energy usage, storage, and generation from a unified platform.',
    features: ['Real-time monitoring', 'Automated optimization', 'Mobile app control', 'Energy usage insights']
  },
  {
    icon: Truck,
    title: 'Commercial & Industrial Solutions',
    description: 'Learn about electric trucks, semi-trucks, and industrial vehicles designed for commercial applications. Heavy-duty electric vehicles are transforming logistics and transportation industries.',
    features: ['Heavy payload capacity', 'Reduced operating costs', 'Lower maintenance requirements', 'Environmental compliance']
  }
];

export default function ProductsPage() {
  return (
    <div className="w-full py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
            Product Categories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the sustainable technology categories that inspire our partnership programs
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <GreenSectionCard key={index} className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                      <Icon className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">{product.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {product.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GreenSectionCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
