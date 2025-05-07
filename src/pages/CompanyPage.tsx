
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const CompanyPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Company</h1>
          <p className="text-gray-600 mb-8">Learn about our mission and the team behind SuperLens.</p>
          <div className="bg-gray-100 p-8 rounded-lg">
            <p>This is a placeholder for the Company page content, which will mirror Tellius' Company page.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CompanyPage;
