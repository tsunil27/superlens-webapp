import React from 'react';
import { Card, CardContent } from './ui/card';
import { Database, Server, Link, Network, Plug, Cloud } from 'lucide-react';

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-b from-white to-superlens-mutedBlue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-superlens-textBlue">
            Fits Seamlessly Into Your Existing Tech Stack
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            SuperLens integrates with the tools you already use, enhancing your capabilities without disrupting your workflow.
          </p>
        </div>

        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/6dcaeee2-25ff-496d-8a17-4c226a23f47f.png" 
            alt="Tech Stack Integration" 
            className="w-full md:w-[150%] max-w-5xl mx-auto" 
            style={{ maxWidth: "150%" }}
          />
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-superlens-richBlue font-medium mb-4">
            And many more integrations available out of the box
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
            {[
              { name: "Databricks", logo: "https://cdn.worldvectorlogo.com/logos/databricks.svg" },
              { name: "Splunk", logo: "https://cdn.worldvectorlogo.com/logos/splunk.svg" },
              { name: "Elastic", logo: "https://cdn.worldvectorlogo.com/logos/elastic-2.svg" },
              { name: "New Relic", logo: "https://cdn.worldvectorlogo.com/logos/new-relic.svg" },
              { name: "DataDog", logo: "https://cdn.worldvectorlogo.com/logos/datadog.svg" },
              { name: "Confluent", logo: "https://cdn.worldvectorlogo.com/logos/confluent.svg" },
            ].map((logo, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center"
                title={logo.name}
              >
                <img 
                  src={logo.logo}
                  alt={`${logo.name} Logo`}
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "/placeholder.svg";
                  }}
                  loading="lazy"
                />
                <span className="text-xs text-gray-600 mt-2 font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
