
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TechStack from '@/components/TechStack';
import Solutions from '@/components/Solutions';
import SecurityTrust from '@/components/SecurityTrust';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/4 lg:min-h-screen">
          <Navigation />
        </div>
        <div className="lg:w-3/4">
          <main>
            <Hero />
            <Features />
            <TechStack />
            <Solutions />
            <SecurityTrust />
            <CTA />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
