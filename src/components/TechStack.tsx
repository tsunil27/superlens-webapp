
import React from 'react';
import { 
  Database, 
  Server, 
  Boxes, 
  CircleStack, 
  File, 
  FileJson, 
  CalendarClock, 
  BarChart4, 
  ScrollText, 
  Layers 
} from 'lucide-react';

const TechStack: React.FC = () => {
  const techIcons = [
    { name: 'Salesforce', icon: <BarChart4 className="h-10 w-10 text-[#00A1E0]" /> },
    { name: 'MongoDB', icon: <Database className="h-10 w-10 text-[#4DB33D]" /> },
    { name: 'PostgreSQL', icon: <CircleStack className="h-10 w-10 text-[#336791]" /> },
    { name: 'MySQL', icon: <Database className="h-10 w-10 text-[#4479A1]" /> },
    { name: 'S3', icon: <Server className="h-10 w-10 text-[#569A31]" /> },
    { name: 'Snowflake', icon: <Boxes className="h-10 w-10 text-[#29B5E8]" /> },
    { name: 'Excel', icon: <File className="h-10 w-10 text-[#217346]" /> },
    { name: 'JSON', icon: <FileJson className="h-10 w-10 text-[#F5DE19]" /> },
    { name: 'BigQuery', icon: <Layers className="h-10 w-10 text-[#4285F4]" /> },
    { name: 'CSV', icon: <ScrollText className="h-10 w-10 text-[#EC6630]" /> },
    { name: 'API', icon: <CalendarClock className="h-10 w-10 text-[#444444]" /> },
    { name: 'Redshift', icon: <Database className="h-10 w-10 text-[#8C4FFF]" /> },
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
            {techIcons.map((tech, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">
                  {tech.icon}
                </div>
                <span className="font-medium text-gray-800">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
