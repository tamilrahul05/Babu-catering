import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';

const PACKAGES = [
  {
    name: 'TRADITIONAL CLASSIC',
    desc: 'Traditional high-quality feast featuring key authentic classics.',
    badge: null,
    isPopular: false,
    features: [
      'Standard Welcome Drink',
      'Authentic Banana Leaf Meals',
      '12+ Traditional Delicacies',
      'Standard Catering Crockery',
      'Punctual On-Time Setup'
    ]
  },
  {
    name: 'AFFORDABLE LUXURY',
    desc: 'Bespoke culinary experience with diverse appetizers and sweet options.',
    badge: 'Affordable Luxury',
    isPopular: true,
    features: [
      'Welcome Drinks (2 Options)',
      '2 Appetizers / Snacks',
      '18+ Premium Delicacies',
      'Elegant Buffet Setup',
      '1 Premium Dessert Selection',
      'Traditional Leaf/Plate Dining'
    ]
  },
  {
    name: 'POPULAR CHOICE',
    desc: 'Full-service luxury banquet with dynamic live food stations.',
    badge: 'Popular Choice',
    isPopular: true,
    features: [
      'Artisanal Welcome Cocktails',
      '3 Live Counter Stations',
      '24+ Luxurious Platter Items',
      'Premium Dessert Bar',
      'Banquet Waiter Service Team',
      'Glassware & Linen Decor'
    ]
  },
  {
    name: 'SIGNATURE VIP',
    desc: 'Ultra-exclusive customized VIP dining designed for majestic weddings.',
    badge: null,
    isPopular: false,
    features: [
      'Liquid Nitrogen Mocktails',
      '5 Gourmet Live Stations',
      'Unlimited Platters & Buffets',
      'Imported Chocolate Fountains',
      'VIP Butler Waiter Service',
      'Exquisite Fine-Dining Theme'
    ]
  }
];

const PackageList = () => {
  return (
    <section id="packages" className="py-24 bg-white px-4 md:px-6 relative">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1.5 px-6 rounded-full bg-[#E8F8F0] text-[#0DCD6A] font-bold tracking-[0.25em] uppercase text-[10px] md:text-xs mb-4 border border-[#0DCD6A]/20"
          >
            PRESTIGIOUS PLANS
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight font-playfair italic text-[#219C45] mb-4"
          >
            Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zinc-700 text-sm md:text-base max-w-2xl mx-auto"
          >
            Select from our curated menu tiers designed to match standard gatherings, grand wedding banquets, and prestigious corporate galas.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                pkg.isPopular ? 'border-2 border-[#2ECC71] shadow-lg' : 'border border-zinc-200 shadow-sm'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2ECC71] text-white px-5 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap">
                  <Star size={10} fill="currentColor" /> {pkg.badge}
                </div>
              )}

              {/* Title & Description */}
              <h3 className="text-zinc-700 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] mb-4 mt-2">
                {pkg.name}
              </h3>
              
              <p className="text-zinc-700 text-[16px] font-medium leading-relaxed italic mb-8 max-w-[240px]">
                "{pkg.desc}"
              </p>

              {/* Divider */}
              <div className="w-full h-[1px] bg-zinc-200 mb-6 relative"></div>

              {/* Pricing Label */}
              <div className="flex flex-col items-center mb-8">
                <span className="text-zinc-700 text-xs font-black uppercase tracking-[0.15em] mb-1">
                  STARTING AT
                </span>
                <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.1em]">
                  / PLATE SERVING
                </span>
              </div>

              {/* Features List */}
              <ul className="flex flex-col gap-4 w-full text-left mt-auto">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#2ECC71] flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-700 text-[16px] font-medium leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PackageList;
