
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TechStack from '@/components/TechStack';
import Solutions from '@/components/Solutions';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <TechStack />
        <Solutions />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
