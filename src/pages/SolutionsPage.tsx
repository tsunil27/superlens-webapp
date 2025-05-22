import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const SolutionsPage = () => {
  return (
    <div className="min-h-screen bg-nexfab-dark text-white">
      <Navigation />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="mb-20 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Empowering Digital Media Organizations with Data-Driven Solutions
            </h1>
          </section>

          {/* Services Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Business Consulting */}
              <div className="bg-nexfab-gray p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-nexfab-yellow">
                  Business Consulting and Architecture
                </h3>
                <p className="text-gray-300">
                  NexFab provides expert business consulting and architecture services to help digital media organizations leverage data for strategic decision-making. Our team collaborates closely with clients to design tailored solutions that align with their business objectives.
                </p>
              </div>

              {/* Customer Data Platform */}
              <div className="bg-nexfab-gray p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-nexfab-yellow">
                  Customer Data Platform Implementation
                </h3>
                <p className="text-gray-300">
                  At NexFab, we specialize in the seamless implementation of customer data platforms, ensuring that organizations can effectively manage and utilize their customer data for targeted marketing and personalized customer experiences.
                </p>
              </div>

              {/* Data Engineering */}
              <div className="bg-nexfab-gray p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-nexfab-yellow">
                  Data Engineering and Marketing Automation
                </h3>
                <p className="text-gray-300">
                  Our data engineering and marketing automation services empower digital media organizations to optimize their marketing efforts through advanced data-driven strategies. We help streamline processes and enhance marketing efficiency.
                </p>
              </div>

              {/* Data Lakehouse */}
              <div className="bg-nexfab-gray p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-nexfab-yellow">
                  Data Lakehouse and Cost Optimization
                </h3>
                <p className="text-gray-300">
                  NexFab offers expertise in data lakehouse implementation and cost optimization on data platforms. We assist organizations in maximizing the value of their data while ensuring cost efficiency and performance.
                </p>
              </div>
            </div>
          </section>

          {/* Tailored Solutions Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Tailored Solutions for Your Organization</h2>
              <p className="text-lg text-gray-300 mb-8">
                We understand the unique needs of digital media organizations and strive to deliver tailored solutions that seamlessly integrate with your existing ecosystem. NexFab's approach ensures that our services align with your organization's specific goals and requirements.
              </p>
              <Button className="bg-nexfab-yellow text-black hover:bg-nexfab-yellow/90">
                Get Started
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;