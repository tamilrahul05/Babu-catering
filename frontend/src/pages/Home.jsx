import React from 'react';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import Events from '../components/home/Events';
import WhyChooseUs from '../components/home/WhyChooseUs';
import SignatureMenu from '../components/home/SignatureMenu';
import Tradition from '../components/home/Tradition';
import Process from '../components/home/Process';
import PackageList from '../components/home/PackageList';
import Gallery from '../components/Gallery';
import HomeFAQ from '../components/home/HomeFAQ';
import ContactForm from '../components/home/ContactForm';

const Home = () => {
 return (
 <main className="bg-zinc-950 min-h-screen overflow-hidden">
 
 {/* 1. Cinematic Hero Welcome */}
 <Hero />
 
 {/* 2. Premium Counters */}
 <Stats />
 
 {/* 3. bento Grid Catering Services */}
 <div id="events">
 <Events />
 </div>
 
 {/* 4. Five-Star Advantages */}
 <WhyChooseUs />
 
 {/* 5. Signature Delicacies Tab Showcase */}
 <SignatureMenu />
 
 {/* 6. Legacy & Heritage */}
 <Tradition />
 
 {/* 7. Coordination Timeline */}
 <Process />
 
 {/* 8. Exclusive Pricing Package Selection */}
 <PackageList />
 
 {/* 9. Lightboxed Masonry Photos & Videos */}
 <Gallery />
 
 {/* 11. Accordion Trust FAQs */}
 <HomeFAQ />
 
 {/* 12. Inquiry Contact panel with built-in calculators */}
 <ContactForm />
 
 </main>
 );
};

export default Home;


