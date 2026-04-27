import React from 'react';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import PackageList from '../components/home/PackageList';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Tradition from '../components/home/Tradition';
import Process from '../components/home/Process';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Stats />
      <PackageList />
      <WhyChooseUs />
      <Tradition />
      <Process />
      <div className="pb-20">
        <Gallery />
      </div>
    </main>
  );
};

export default Home;
