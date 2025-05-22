import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PartnersPage = () => {
  const partners = [
    { name: "DAZN", logo: "/lovable-uploads/dazn-logo.png" },
    { name: "Warner Bros Discovery", logo: "/lovable-uploads/wbd-logo.png" },
    { name: "Sky", logo: "/lovable-uploads/sky-logo.png" },
    { name: "Virgin Media", logo: "/lovable-uploads/virgin-logo.png" }
  ];

  return (
    <div className="min-h-screen bg-nexfab-dark text-white">
      <Navigation />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <section className="mb-20">
            <h1 className="text-5xl font-bold mb-12 text-center">Working With the Best</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="bg-nexfab-gray p-8 rounded-lg flex items-center justify-center"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-16 w-auto"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PartnersPage;