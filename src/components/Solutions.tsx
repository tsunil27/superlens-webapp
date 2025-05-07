
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
      industry: "Financial Services",
      title: "Accelerate growth while minimizing risk",
      description: "Identify market opportunities, optimize investment strategies, and enhance risk management processes.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/solutions/financial-services"
    },
    {
      industry: "Healthcare",
      title: "Improve patient outcomes through data analytics",
      description: "Uncover patterns in patient data, optimize treatment plans, and streamline operational efficiency.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/solutions/healthcare"
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
