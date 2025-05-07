
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
        { name: "Snowflake", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg" },
        { name: "AWS Redshift", logo: "https://static-00.iconduck.com/assets.00/aws-redshift-icon-423x512-midm8na8.png" },
        { name: "Google BigQuery", logo: "https://cdn.worldvectorlogo.com/logos/google-bigquery-logo-1.svg" },
        { name: "Azure Synapse", logo: "https://cdn.worldvectorlogo.com/logos/azure-synapse-analytics.svg" },
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
        { name: "Workday", logo: "https://cdn.worldvectorlogo.com/logos/workday-1.svg" }
      ]
    },
    {
      category: "APIs & Services",
      description: "Leverage your existing APIs and microservices architecture",
      icon: <Link className="h-8 w-8 text-superlens-richBlue" />,
      technologies: [
        { name: "REST APIs", logo: "https://cdn.worldvectorlogo.com/logos/rest-api.svg" },
        { name: "GraphQL", logo: "https://cdn.worldvectorlogo.com/logos/graphql.svg" },
        { name: "SOAP", logo: "https://www.svgrepo.com/show/374111/soap.svg" },
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
        { name: "IBM Cloud", logo: "https://cdn.worldvectorlogo.com/logos/ibm-cloud.svg" },
        { name: "Oracle Cloud", logo: "https://cdn.worldvectorlogo.com/logos/oracle-cloud-logo.svg" }
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
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 mb-1 bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-all">
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
                      </div>
                      <span className="text-xs text-gray-600 mt-1 font-medium">{tech.name}</span>
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
            {additionalLogos.map((logo, i) => (
              <div 
                key={i} 
                className="h-16 w-16 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden hover:shadow-md transition-all"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
