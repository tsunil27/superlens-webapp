
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Brain, Film, Trophy, Joystick, ShoppingCart } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      industry: "Software & Tech",
      title: "Optimize product development with data-driven insights",
      description: "Make informed decisions about your product roadmap, user experience, and technical architecture.",
      icon: Brain,
      link: "/solutions/software-tech"
    },
    {
      industry: "Media Entertainment",
      title: "Transform content delivery with AI-driven analytics",
      description: "Understand viewer preferences, optimize content strategies, and increase audience engagement.",
      icon: Film,
      link: "/solutions/media-entertainment"
    },
    {
      industry: "Sports Streaming",
      title: "Enhance fan experiences through data intelligence",
      description: "Deliver personalized content, optimize streaming quality, and monetize viewer engagement.",
      icon: Trophy,
      link: "/solutions/sports-streaming"
    },
    {
      industry: "Gaming",
      title: "Level up your gaming platform with player insights",
      description: "Optimize game design, increase player retention, and create personalized gaming experiences.",
      icon: Joystick,
      link: "/solutions/gaming"
    },
    {
      industry: "Retail & eCommerce",
      title: "Revolutionize shopping experiences with data analytics",
      description: "Personalize customer journeys, optimize inventory, and drive conversion with actionable insights.",
      icon: ShoppingCart,
      link: "/solutions/retail-ecommerce"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-superlens-mutedBlue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-superlens-textBlue">Industry Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            SuperLens adapts to the unique challenges of your industry with specialized analytics solutions.
          </p>
        </div>

        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-8 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-superlens-richBlue to-superlens-blue rounded-lg opacity-30 blur-sm"></div>
                  <div className="bg-white p-8 rounded-lg shadow-lg relative w-full h-64 md:h-80 flex items-center justify-center">
                    <solution.icon className="w-24 h-24 text-superlens-blue" />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <span className="text-superlens-richBlue font-semibold mb-2 inline-block">
                    {solution.industry}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-superlens-textBlue">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <Link to={solution.link}>
                    <Button className="bg-superlens-richBlue hover:bg-superlens-darkBlue">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
