
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Database, Server, Link, Network, Plug } from 'lucide-react';

const TechStack: React.FC = () => {
  const techCategories = [
    {
      category: "Data Sources",
      description: "Connect to your existing data warehouses and lakes with minimal setup",
      icon: <Database className="h-8 w-8 text-superlens-richBlue" />,
      technologies: [
        { name: "Snowflake", logo: "https://source.unsplash.com/photo-1488590528505-98d2b5aba04b?w=64&h=64&fit=crop&auto=format" },
        { name: "AWS Redshift", logo: "https://source.unsplash.com/photo-1461749280684-dccba630e2f6?w=64&h=64&fit=crop&auto=format" },
        { name: "Google BigQuery", logo: "https://source.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=64&h=64&fit=crop&auto=format" },
        { name: "Azure Synapse", logo: "https://source.unsplash.com/photo-1531297484001-80022131f5a1?w=64&h=64&fit=crop&auto=format" },
        { name: "MongoDB", logo: "https://source.unsplash.com/photo-1498050108023-c5249f4df085?w=64&h=64&fit=crop&auto=format" }
      ]
    },
    {
      category: "Enterprise Systems",
      description: "Integrate with your current enterprise software ecosystem",
      icon: <Server className="h-8 w-8 text-superlens-richBlue" />,
      technologies: [
        { name: "Salesforce", logo: "https://source.unsplash.com/photo-1488590528505-98d2b5aba04b?w=64&h=64&fit=crop&auto=format" },
        { name: "SAP", logo: "https://source.unsplash.com/photo-1461749280684-dccba630e2f6?w=64&h=64&fit=crop&auto=format" },
        { name: "Oracle", logo: "https://source.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=64&h=64&fit=crop&auto=format" },
        { name: "Microsoft 365", logo: "https://source.unsplash.com/photo-1531297484001-80022131f5a1?w=64&h=64&fit=crop&auto=format" },
        { name: "Workday", logo: "https://source.unsplash.com/photo-1498050108023-c5249f4df085?w=64&h=64&fit=crop&auto=format" }
      ]
    },
    {
      category: "APIs & Services",
      description: "Leverage your existing APIs and microservices architecture",
      icon: <Link className="h-8 w-8 text-superlens-richBlue" />,
      technologies: [
        { name: "REST APIs", logo: "https://source.unsplash.com/photo-1488590528505-98d2b5aba04b?w=64&h=64&fit=crop&auto=format" },
        { name: "GraphQL", logo: "https://source.unsplash.com/photo-1461749280684-dccba630e2f6?w=64&h=64&fit=crop&auto=format" },
        { name: "SOAP", logo: "https://source.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=64&h=64&fit=crop&auto=format" },
        { name: "gRPC", logo: "https://source.unsplash.com/photo-1531297484001-80022131f5a1?w=64&h=64&fit=crop&auto=format" },
        { name: "Webhooks", logo: "https://source.unsplash.com/photo-1498050108023-c5249f4df085?w=64&h=64&fit=crop&auto=format" }
      ]
    },
    {
      category: "Cloud Platforms",
      description: "Deploy anywhere - we're cloud agnostic and flexible",
      icon: <Network className="h-8 w-8 text-superlens-richBlue" />,
      technologies: [
        { name: "AWS", logo: "https://source.unsplash.com/photo-1488590528505-98d2b5aba04b?w=64&h=64&fit=crop&auto=format" },
        { name: "Google Cloud", logo: "https://source.unsplash.com/photo-1461749280684-dccba630e2f6?w=64&h=64&fit=crop&auto=format" },
        { name: "Microsoft Azure", logo: "https://source.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=64&h=64&fit=crop&auto=format" },
        { name: "IBM Cloud", logo: "https://source.unsplash.com/photo-1531297484001-80022131f5a1?w=64&h=64&fit=crop&auto=format" },
        { name: "Oracle Cloud", logo: "https://source.unsplash.com/photo-1498050108023-c5249f4df085?w=64&h=64&fit=crop&auto=format" }
      ]
    },
    {
      category: "BI Tools",
      description: "Complement your existing analytics investments",
      icon: <Plug className="h-8 w-8 text-superlens-richBlue" />,
      technologies: [
        { name: "Tableau", logo: "https://source.unsplash.com/photo-1488590528505-98d2b5aba04b?w=64&h=64&fit=crop&auto=format" },
        { name: "Power BI", logo: "https://source.unsplash.com/photo-1461749280684-dccba630e2f6?w=64&h=64&fit=crop&auto=format" },
        { name: "Looker", logo: "https://source.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=64&h=64&fit=crop&auto=format" },
        { name: "Qlik", logo: "https://source.unsplash.com/photo-1531297484001-80022131f5a1?w=64&h=64&fit=crop&auto=format" },
        { name: "Domo", logo: "https://source.unsplash.com/photo-1498050108023-c5249f4df085?w=64&h=64&fit=crop&auto=format" }
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
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 mb-1">
                        <img 
                          src={tech.logo} 
                          alt={tech.name}
                          className="w-full h-full object-cover"
                        />
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
                  src={`https://source.unsplash.com/photo-148${i}312338219-ce68d2c6f44d?w=64&h=64&fit=crop&auto=format`}
                  alt={`Tech Logo ${i+1}`}
                  className="w-12 h-12 object-cover"
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
