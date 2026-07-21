import React from 'react';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import Events from '@/components/home/Events';
import Tradition from '@/components/home/Tradition';
import Process from '@/components/home/Process';
import PackageList from '@/components/home/PackageList';
import GalleryTeaser from '@/components/home/GalleryTeaser';
import HomeFAQ from '@/components/home/HomeFAQ';
import ContactForm from '@/components/home/ContactForm';

const Home = () => {
  return (
    <main className="bg-zinc-950 min-h-screen overflow-hidden">
      {/* 1. Hero Welcome */}
      <Hero />
      
      {/* 2. Premium Counters */}
      <Stats />
      
      {/* 3. Catering Services */}
      <div id="events">
        <Events />
      </div>
      
      {/* 4. Legacy & Heritage */}
      <Tradition />
      
      {/* 5. Coordination Timeline */}
      <Process />
      
      {/* 6. Exclusive Packages */}
      <PackageList />
      
      {/* 7. Gallery Teaser */}
      <GalleryTeaser />
      
      {/* 8. FAQs */}
      <HomeFAQ />
      
      {/* 9. Contact & Inquiry Form */}
      <ContactForm />
    </main>
  );
};

export default Home;
