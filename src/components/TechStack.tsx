
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Database, Server, Link, Network, Plug, Cloud, FileText, FileSpreadsheet, Table2 } from 'lucide-react';

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
      </div>
    </section>
  );
};

export default TechStack;
