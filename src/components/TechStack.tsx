
import React from 'react';

const TechStack: React.FC = () => {
  const techLogos = [
    { name: 'Snowflake', logo: "/lovable-uploads/6dcaeee2-25ff-496d-8a17-4c226a23f47f.png" },
    { name: 'Databricks', logo: "/lovable-uploads/e06f01ce-eed4-490e-bbc4-126074383981.png" },
    { name: 'Google BigQuery', logo: "/lovable-uploads/90a449f9-7a8d-4db5-afcb-b77e6743286c.png" },
    { name: 'Amazon S3', logo: "/lovable-uploads/eb7991e4-c439-4e38-bce0-d3bcdbf80f42.png" },
    { name: 'Amazon Redshift', logo: "/lovable-uploads/5d1e7cd9-1678-410d-8ef3-c3582e6d4d2c.png" },
    { name: 'Oracle', logo: "/lovable-uploads/121ce3a6-23eb-46ab-a677-cf16ad9c5173.png" },
    { name: 'Salesforce', logo: "/lovable-uploads/59e45b98-2f23-4d86-b599-cb6283a28e44.png" },
    { name: 'CSV', logo: "/lovable-uploads/e6c5fbb9-5190-4375-8b09-935b3be6a604.png" },
    { name: 'Excel', logo: "/lovable-uploads/e6c5fbb9-5190-4375-8b09-935b3be6a604.png" },
    { name: 'Google Sheets', logo: "/lovable-uploads/90a449f9-7a8d-4db5-afcb-b77e6743286c.png" },
    { name: 'PostgreSQL', logo: "/lovable-uploads/c7d508be-61b3-4747-b60e-2ca1463b3e06.png" },
    { name: 'MySQL', logo: "/lovable-uploads/c7d508be-61b3-4747-b60e-2ca1463b3e06.png" },
    { name: 'SQL Server', logo: "/lovable-uploads/121ce3a6-23eb-46ab-a677-cf16ad9c5173.png" },
    { name: 'SingleStore', logo: "/lovable-uploads/c7d508be-61b3-4747-b60e-2ca1463b3e06.png" },
    { name: 'Clickhouse', logo: "/lovable-uploads/c7d508be-61b3-4747-b60e-2ca1463b3e06.png" },
  ];

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-b from-white to-superlens-mutedBlue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-superlens-textBlue">
            Seamlessly integrate with your tech stack
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            SuperLens integrates with the tools you already use, enhancing your capabilities without disrupting your workflow.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
            {techLogos.map((tech, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center"
                aria-label={tech.name}
                title={tech.name}
              >
                <div className="h-12 w-auto flex items-center justify-center mb-2">
                  <img 
                    src={tech.logo} 
                    alt={`${tech.name} logo`}
                    className="max-h-12 max-w-[100px] object-contain"
                  />
                </div>
                <span className="text-xs text-gray-600 text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
