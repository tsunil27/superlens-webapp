
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Database, Server, Link, Network, Plug } from 'lucide-react';

const TechStack: React.FC = () => {
  const integrations = [
    {
      category: "Data Sources",
      description: "Connect to your existing data warehouses and lakes with minimal setup",
      icon: <Database className="h-8 w-8 text-superlens-richBlue" />,
      technologies: ["Snowflake", "AWS Redshift", "Google BigQuery", "Azure Synapse", "MongoDB"]
    },
    {
      category: "Enterprise Systems",
      description: "Integrate with your current enterprise software ecosystem",
      icon: <Server className="h-8 w-8 text-superlens-richBlue" />,
      technologies: ["Salesforce", "SAP", "Oracle", "Microsoft 365", "Workday"]
    },
    {
      category: "APIs & Services",
      description: "Leverage your existing APIs and microservices architecture",
      icon: <Link className="h-8 w-8 text-superlens-richBlue" />,
      technologies: ["REST APIs", "GraphQL", "SOAP", "gRPC", "Webhooks"]
    },
    {
      category: "Cloud Platforms",
      description: "Deploy anywhere - we're cloud agnostic and flexible",
      icon: <Network className="h-8 w-8 text-superlens-richBlue" />,
      technologies: ["AWS", "Google Cloud", "Microsoft Azure", "IBM Cloud", "Oracle Cloud"]
    },
    {
      category: "BI Tools",
      description: "Complement your existing analytics investments",
      icon: <Plug className="h-8 w-8 text-superlens-richBlue" />,
      technologies: ["Tableau", "Power BI", "Looker", "Qlik", "Domo"]
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">{integration.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-superlens-textBlue">{integration.category}</h3>
                <p className="text-gray-600 mb-4">{integration.description}</p>
                <div className="flex flex-wrap gap-2">
                  {integration.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-superlens-blue/10 text-superlens-richBlue text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-superlens-richBlue font-medium mb-4">
            And many more integrations available out of the box
          </p>
          <div className="flex justify-center items-center space-x-8 mt-6 opacity-60">
            {/* Placeholder for tech logos - in a real app these would be actual images */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-12 w-24 bg-gray-200 rounded-md flex items-center justify-center">
                <span className="text-gray-500 font-medium">Logo {i+1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
