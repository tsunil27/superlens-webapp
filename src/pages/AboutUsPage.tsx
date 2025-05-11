
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: "Naveen Govindan",
      position: "CEO & Founder",
      bio: "More than two decades of experience in enterprise software and analytics engineering. Previously VP, Data Product Engineering at DAZN, ex-Warner Bros. Discovery and at Sky, Virgin Media, Vodafone, BT."
    },
    {
      name: "John Smith",
      position: "Head Of Operations",
      bio: "John oversees all operational aspects of SuperLens, ensuring smooth delivery of our services to clients worldwide."
    },
    {
      name: "Dr. Sarah Johnson",
      position: "Chief Data Scientist",
      bio: "Sarah leads our data science initiatives, bringing deep expertise in machine learning and AI to our platform."
    },
    {
      name: "Michael Chen",
      position: "Principal Data Engineer",
      bio: "Michael architects our data infrastructure, ensuring scalability and performance across all our systems."
    },
    {
      name: "Alicia Rodriguez",
      position: "Lead Platform Engineer",
      bio: "Alicia drives the technical development of our platform, focusing on creating intuitive and powerful user experiences."
    },
    {
      name: "Robert Kim",
      position: "Senior Data Analyst",
      bio: "Robert specializes in turning complex data into actionable insights for our clients in various industries."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center">About Us</h1>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Vision</h2>
            <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                A world where every business decision is powered by intelligent data analysis, without the complexity and cost barriers.
              </p>
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                To democratize advanced data analytics and make AI-powered insights accessible to organizations of all sizes.
              </p>
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-superlens-blue font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
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

export default AboutUsPage;
