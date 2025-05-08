
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 mb-10">
          <h1 className="text-4xl font-bold mb-4 text-center">Pricing Plans</h1>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Choose the right plan for your business needs with our flexible pricing options.
            All plans include a 14-day free trial with no credit card required.
          </p>
        </div>
        <Pricing />
      </main>
      <CTA />
      <Footer />
    </div>
  );
};

export default PricingPage;
