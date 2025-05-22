import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NexFabHome = () => {
  const stats = [
    { number: "20+", label: "Years of Excellence" },
    { number: "50+", label: "Successful Deployments" },
    { number: "70M+", label: "Users Data Processed" },
    { number: "5+", label: "Global Clients" },
    { number: "100+", label: "Platform Integrations" }
  ];

  const services = [
    {
      title: "Cloud Analytics Solutions",
      description: "At NexFab, we specialize in modernizing cloud analytics to provide scalable and efficient solutions for businesses.",
      icon: "☁️"
    },
    {
      title: "Data Science Expertise",
      description: "With NexFab's data science acceleration services, businesses can leverage advanced analytics and predictive modeling.",
      icon: "📊"
    },
    {
      title: "Customized Application Development",
      description: "NexFab offers versatile and tailored application development services to meet your unique business needs.",
      icon: "💻"
    },
    {
      title: "Enhanced Customer Experience",
      description: "NexFab provides end-to-end customer experience services to help businesses thrive in the digital age.",
      icon: "👥"
    }
  ];

  const clients = [
    { name: "DAZN", logo: "/lovable-uploads/dazn-logo.png" },
    { name: "Warner Bros Discovery", logo: "/lovable-uploads/wbd-logo.png" },
    { name: "Sky", logo: "/lovable-uploads/sky-logo.png" },
    { name: "Virgin Media", logo: "/lovable-uploads/virgin-logo.png" }
  ];

  return (
    <div className="min-h-screen bg-nexfab-dark text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold mb-6">
              Empower Your Data with NexFab
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Unlock the Power of Data & AI for Informed Business Decisions
            </p>
            <div className="flex gap-4">
              <Button className="bg-nexfab-yellow text-black hover:bg-nexfab-yellow/90">
                Discover More
              </Button>
              <Link to="/products/superlens">
                <Button variant="outline" className="border-nexfab-yellow text-nexfab-yellow hover:bg-nexfab-yellow hover:text-black">
                  View Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-nexfab-gray via-nexfab-dark to-nexfab-dark"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-nexfab-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-nexfab-dark p-8 rounded-lg">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Experience and Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-nexfab-yellow mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-nexfab-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-8 bg-nexfab-dark rounded-lg">
                <img src={client.logo} alt={client.name} className="max-h-12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Elevate Your Data Strategy?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover how NexFab can optimize your data infrastructure and drive actionable insights for your business.
          </p>
          <Button className="bg-nexfab-yellow text-black hover:bg-nexfab-yellow/90">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default NexFabHome;