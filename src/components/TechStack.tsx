
import React from 'react';
import { 
  Database, 
  FileSpreadsheet,
  Server, 
  FileStack, 
  BarChart4, 
  Layers,
  Snowflake,
  Cloud,
  TableProperties
} from 'lucide-react';

const TechStack: React.FC = () => {
  const techIcons = [
    { name: 'Snowflake', icon: <Snowflake className="h-12 w-12 text-[#29B5E8]" /> },
    { name: 'Databricks', icon: <Cloud className="h-12 w-12 text-[#FF3621]" /> },
    { name: 'Google BigQuery', icon: <Layers className="h-12 w-12 text-[#4285F4]" /> },
    { name: 'Amazon S3', icon: <Server className="h-12 w-12 text-[#569A31]" /> },
    { name: 'Amazon Redshift', icon: <Database className="h-12 w-12 text-[#8C4FFF]" /> },
    { name: 'Oracle', icon: <TableProperties className="h-12 w-12 text-[#F80000]" /> },
    { name: 'Salesforce', icon: <BarChart4 className="h-12 w-12 text-[#1589EE]" /> },
    { name: 'Excel', icon: <FileSpreadsheet className="h-12 w-12 text-[#217346]" /> },
    { name: 'Google Sheets', icon: <FileSpreadsheet className="h-12 w-12 text-[#0F9D58]" /> },
    { name: 'PostgreSQL', icon: <FileStack className="h-12 w-12 text-[#336791]" /> },
    { name: 'MySQL', icon: <Database className="h-12 w-12 text-[#4479A1]" /> },
    { name: 'SQL Server', icon: <Database className="h-12 w-12 text-[#CC2927]" /> },
    { name: 'SingleStore', icon: <Database className="h-12 w-12 text-[#AA00FF]" /> },
    { name: 'Clickhouse', icon: <Database className="h-12 w-12 text-[#FFCC01]" /> },
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
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 md:gap-12 items-center justify-items-center">
            {techIcons.map((tech, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center"
                aria-label={tech.name}
                title={tech.name}
              >
                {tech.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
