
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Database, Server, Link, Network, Plug, Cloud } from 'lucide-react';

const TechStack: React.FC = () => {
  const techCategories = [
    {
      category: "Data Sources",
      description: "Connect to your existing data warehouses and lakes with minimal setup",
      icon: <Database className="h-8 w-8 text-superlens-richBlue" />,
      technologies: [
        { name: "Snowflake", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg" },
        { name: "AWS Redshift", logo: "aws-redshift", isLucideIcon: true },
        { name: "Google BigQuery", logo: "https://cdn.worldvectorlogo.com/logos/google-bigquery-logo-1.svg" },
        { name: "Azure Synapse", logo: "azure-synapse", isLucideIcon: true },
        { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" }
      ]
    },
    {
      category: "Enterprise Systems",
      description: "Integrate with your current enterprise software ecosystem",
      icon: <Server className="h-8 w-8 text-superlens-richBlue" />,
      technologies: [
        { name: "Salesforce", logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" },
        { name: "SAP", logo: "https://cdn.worldvectorlogo.com/logos/sap-3.svg" },
        { name: "Oracle", logo: "https://cdn.worldvectorlogo.com/logos/oracle-6.svg" },
        { name: "Microsoft 365", logo: "https://cdn.worldvectorlogo.com/logos/office-365-1.svg" },
        { name: "Workday", logo: "workday", isLucideIcon: true }
      ]
    },
    {
      category: "APIs & Services",
      description: "Leverage your existing APIs and microservices architecture",
      icon: <Link className="h-8 w-8 text-superlens-richBlue" />,
      technologies: [
        { name: "REST APIs", logo: "rest-apis", isLucideIcon: true },
        { name: "GraphQL", logo: "graphql", isLucideIcon: true },
        { name: "SOAP", logo: "soap", isLucideIcon: true },
        { name: "gRPC", logo: "https://grpc.io/img/logos/grpc-icon-color.png" },
        { name: "Webhooks", logo: "https://cdn-icons-png.flaticon.com/512/2621/2621213.png" }
      ]
    },
    {
      category: "Cloud Platforms",
      description: "Deploy anywhere - we're cloud agnostic and flexible",
      icon: <Network className="h-8 w-8 text-superlens-richBlue" />,
      technologies: [
        { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
        { name: "Google Cloud", logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-2.svg" },
        { name: "Microsoft Azure", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-3.svg" },
        { name: "Alibaba Cloud", logo: "alibaba-cloud", isLucideIcon: true },
        { name: "Digital Ocean", logo: "https://cdn.worldvectorlogo.com/logos/digitalocean.svg" }
      ]
    },
    {
      category: "BI Tools",
      description: "Complement your existing analytics investments",
      icon: <Plug className="h-8 w-8 text-superlens-richBlue" />,
      technologies: [
        { name: "Tableau", logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
        { name: "Power BI", logo: "https://cdn.worldvectorlogo.com/logos/power-bi.svg" },
        { name: "Looker", logo: "https://cdn.worldvectorlogo.com/logos/looker-1.svg" },
        { name: "Qlik", logo: "https://cdn.worldvectorlogo.com/logos/qlik-1.svg" },
        { name: "Domo", logo: "https://cdn.worldvectorlogo.com/logos/domo.svg" }
      ]
    }
  ];

  const additionalLogos = [
    { name: "Databricks", logo: "https://cdn.worldvectorlogo.com/logos/databricks.svg" },
    { name: "Splunk", logo: "https://cdn.worldvectorlogo.com/logos/splunk.svg" },
    { name: "Elastic", logo: "https://cdn.worldvectorlogo.com/logos/elastic-2.svg" },
    { name: "New Relic", logo: "https://cdn.worldvectorlogo.com/logos/new-relic.svg" },
    { name: "DataDog", logo: "https://cdn.worldvectorlogo.com/logos/datadog.svg" },
    { name: "Confluent", logo: "https://cdn.worldvectorlogo.com/logos/confluent.svg" },
  ];

  const renderTechLogo = (tech: { name: string; logo: string; isLucideIcon?: boolean }) => {
    if (tech.isLucideIcon) {
      // For Lucide icons
      switch (tech.logo) {
        case "aws-redshift":
          return <Cloud className="w-8 h-8 text-superlens-richBlue" />;
        case "azure-synapse":
          return <Cloud className="w-8 h-8 text-superlens-richBlue" />;
        case "workday":
          return <Cloud className="w-8 h-8 text-superlens-richBlue" />;
        case "rest-apis":
          return <Link className="w-8 h-8 text-superlens-richBlue" />;
        case "graphql":
          return <Link className="w-8 h-8 text-superlens-richBlue rotate-45" />;
        case "soap":
          return <Link className="w-8 h-8 text-superlens-richBlue" />;
        case "alibaba-cloud":
          return <Cloud className="w-8 h-8 text-superlens-richBlue" />;
        default:
          return <Cloud className="w-8 h-8 text-superlens-richBlue" />;
      }
    } else {
      // For image URLs
      return (
        <img 
          src={tech.logo} 
          alt={tech.name}
          className="w-8 h-8 object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = "/placeholder.svg";
          }}
          loading="lazy"
        />
      );
    }
  };

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
                <div className="flex flex-wrap gap-5">
                  {category.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="flex flex-col items-center"
                    >
                      {renderTechLogo(tech)}
                      <span className="text-xs text-gray-600 mt-2 font-medium">{tech.name}</span>
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
          <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
            {additionalLogos.map((logo, i) => (
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
