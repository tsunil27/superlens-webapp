
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Database, Server, Link, Network, Plug } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

const TechStack: React.FC = () => {
  const techCategories = [
    {
      category: "Data Sources",
      description: "Connect to your existing data warehouses and lakes with minimal setup",
      icon: <Database className="h-8 w-8 text-superlens-richBlue" />,
      technologies: [
        { name: "Snowflake", logo: "/placeholder.svg" },
        { name: "AWS Redshift", logo: "/placeholder.svg" },
        { name: "Google BigQuery", logo: "/placeholder.svg" },
        { name: "Azure Synapse", logo: "/placeholder.svg" },
        { name: "MongoDB", logo: "/placeholder.svg" }
      ]
    },
    {
      category: "Enterprise Systems",
      description: "Integrate with your current enterprise software ecosystem",
      icon: <Server className="h-8 w-8 text-superlens-richBlue" />,
      technologies: [
        { name: "Salesforce", logo: "/placeholder.svg" },
        { name: "SAP", logo: "/placeholder.svg" },
        { name: "Oracle", logo: "/placeholder.svg" },
        { name: "Microsoft 365", logo: "/placeholder.svg" },
        { name: "Workday", logo: "/placeholder.svg" }
      ]
    },
    {
      category: "APIs & Services",
      description: "Leverage your existing APIs and microservices architecture",
      icon: <Link className="h-8 w-8 text-superlens-richBlue" />,
      technologies: [
        { name: "REST APIs", logo: "/placeholder.svg" },
        { name: "GraphQL", logo: "/placeholder.svg" },
        { name: "SOAP", logo: "/placeholder.svg" },
        { name: "gRPC", logo: "/placeholder.svg" },
        { name: "Webhooks", logo: "/placeholder.svg" }
      ]
    },
    {
      category: "Cloud Platforms",
      description: "Deploy anywhere - we're cloud agnostic and flexible",
      icon: <Network className="h-8 w-8 text-superlens-richBlue" />,
      technologies: [
        { name: "AWS", logo: "/placeholder.svg" },
        { name: "Google Cloud", logo: "/placeholder.svg" },
        { name: "Microsoft Azure", logo: "/placeholder.svg" },
        { name: "IBM Cloud", logo: "/placeholder.svg" },
        { name: "Oracle Cloud", logo: "/placeholder.svg" }
      ]
    },
    {
      category: "BI Tools",
      description: "Complement your existing analytics investments",
      icon: <Plug className="h-8 w-8 text-superlens-richBlue" />,
      technologies: [
        { name: "Tableau", logo: "/placeholder.svg" },
        { name: "Power BI", logo: "/placeholder.svg" },
        { name: "Looker", logo: "/placeholder.svg" },
        { name: "Qlik", logo: "/placeholder.svg" },
        { name: "Domo", logo: "/placeholder.svg" }
      ]
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
          {techCategories.map((category, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-superlens-textBlue">{category.category}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-3">
                  {category.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="flex flex-col items-center"
                    >
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 mb-1 bg-white flex items-center justify-center">
                        {tech.logo ? (
                          <img 
                            src={tech.logo} 
                            alt={tech.name}
                            className="w-8 h-8 object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null;
                              target.src = "/placeholder.svg";
                            }}
                          />
                        ) : (
                          <Skeleton className="w-8 h-8 rounded-md" />
                        )}
                      </div>
                      <span className="text-xs text-gray-600">{tech.name}</span>
                    </div>
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
          <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-16 w-16 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src="/placeholder.svg"
                  alt={`Tech Logo ${i+1}`}
                  className="w-12 h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
