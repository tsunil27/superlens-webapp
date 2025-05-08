
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Brain, Film, Football, Joystick, ShoppingCart } from 'lucide-react';

// Solution Card Component
const SolutionCard = ({ 
  title, 
  description, 
  link, 
  icon: Icon 
}: { 
  title: string, 
  description: string, 
  link: string, 
  icon: React.ElementType 
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <div className="flex flex-col items-center mb-6">
        <div className="bg-superlens-blue/10 p-6 rounded-full mb-4">
          <Icon className="w-12 h-12 text-superlens-blue" />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-superlens-textBlue text-center">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
      <div className="text-center mt-6">
        <a href={link} className="text-superlens-blue font-medium inline-block">Learn more →</a>
      </div>
    </div>
  );
};

const SolutionsPage = () => {
  const solutions = [
    {
      title: "Software & Tech",
      description: "Optimize product development with data-driven insights that enhance user experience, improve technical architecture, and guide your product roadmap.",
      link: "/solutions/software-tech",
      icon: Brain
    },
    {
      title: "Media Entertainment",
      description: "Transform content delivery with AI-driven analytics that help understand viewer preferences and optimize content strategies.",
      link: "/solutions/media-entertainment",
      icon: Film
    },
    {
      title: "Sports Streaming",
      description: "Enhance fan experiences through data intelligence that delivers personalized content and optimizes streaming quality.",
      link: "/solutions/sports-streaming",
      icon: Football
    },
    {
      title: "Gaming",
      description: "Level up your gaming platform with player insights that optimize game design and create personalized gaming experiences.",
      link: "/solutions/gaming",
      icon: Joystick
    },
    {
      title: "Retail & eCommerce",
      description: "Revolutionize shopping experiences with data analytics that personalize customer journeys and drive conversion.",
      link: "/solutions/retail-ecommerce",
      icon: ShoppingCart
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Solutions</h1>
          <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Industry-specific solutions powered by our AI platform with custom visualizations for each sector.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={index}
                title={solution.title}
                description={solution.description}
                link={solution.link}
                icon={solution.icon}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;
