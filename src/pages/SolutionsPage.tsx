
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const SolutionsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Solutions</h1>
          <p className="text-gray-600 mb-8">Industry-specific solutions powered by our AI platform.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 text-superlens-textBlue">Software & Tech</h2>
              <p className="text-gray-600">Optimize product development with data-driven insights that enhance user experience, improve technical architecture, and guide your product roadmap.</p>
              <a href="/solutions/software-tech" className="text-superlens-blue font-medium mt-4 inline-block">Learn more →</a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 text-superlens-textBlue">Media Entertainment</h2>
              <p className="text-gray-600">Transform content delivery with AI-driven analytics that help understand viewer preferences and optimize content strategies.</p>
              <a href="/solutions/media-entertainment" className="text-superlens-blue font-medium mt-4 inline-block">Learn more →</a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 text-superlens-textBlue">Sports Streaming</h2>
              <p className="text-gray-600">Enhance fan experiences through data intelligence that delivers personalized content and optimizes streaming quality.</p>
              <a href="/solutions/sports-streaming" className="text-superlens-blue font-medium mt-4 inline-block">Learn more →</a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 text-superlens-textBlue">Gaming</h2>
              <p className="text-gray-600">Level up your gaming platform with player insights that optimize game design and create personalized gaming experiences.</p>
              <a href="/solutions/gaming" className="text-superlens-blue font-medium mt-4 inline-block">Learn more →</a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 text-superlens-textBlue">Retail & eCommerce</h2>
              <p className="text-gray-600">Revolutionize shopping experiences with data analytics that personalize customer journeys and drive conversion.</p>
              <a href="/solutions/retail-ecommerce" className="text-superlens-blue font-medium mt-4 inline-block">Learn more →</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;
