
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ProductPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Product</h1>
          <p className="text-gray-600 mb-8">Our comprehensive AI-powered decision intelligence platform.</p>
          <div className="bg-gray-100 p-8 rounded-lg">
            <p>This is a placeholder for the Product page content, which will mirror Tellius' Platform page.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
