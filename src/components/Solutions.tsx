
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Solutions: React.FC = () => {
  const solutions = [
    {
      industry: "Software & Tech",
      title: "Optimize product development with data-driven insights",
      description: "Make informed decisions about your product roadmap, user experience, and technical architecture.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/solutions/software-tech"
    },
    {
      industry: "Media Entertainment",
      title: "Transform content delivery with AI-driven analytics",
      description: "Understand viewer preferences, optimize content strategies, and increase audience engagement.",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/solutions/media-entertainment"
    },
    {
      industry: "Sports Streaming",
      title: "Enhance fan experiences through data intelligence",
      description: "Deliver personalized content, optimize streaming quality, and monetize viewer engagement.",
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/solutions/sports-streaming"
    },
    {
      industry: "Gaming",
      title: "Level up your gaming platform with player insights",
      description: "Optimize game design, increase player retention, and create personalized gaming experiences.",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/solutions/gaming"
    },
    {
      industry: "Retail & eCommerce",
      title: "Revolutionize shopping experiences with data analytics",
      description: "Personalize customer journeys, optimize inventory, and drive conversion with actionable insights.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
                  <img 
                    src={solution.image} 
                    alt={solution.industry} 
                    className="rounded-lg shadow-lg relative w-full h-64 md:h-80 object-cover"
                  />
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
