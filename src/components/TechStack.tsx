
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
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Data Sources Card */}
          <Card className="shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                  <Database className="h-8 w-8 text-superlens-richBlue" />
                </div>
                <h3 className="text-xl font-bold text-superlens-textBlue">Data Sources</h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <img 
                    src="https://cdn.worldvectorlogo.com/logos/databricks.svg" 
                    alt="Databricks Logo" 
                    className="w-10 h-10 object-contain mb-2" 
                  />
                  <span className="text-xs text-center text-gray-600">Databricks</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <Database className="w-10 h-10 text-superlens-richBlue mb-2" />
                  <span className="text-xs text-center text-gray-600">PostgreSQL</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <Database className="w-10 h-10 text-superlens-richBlue mb-2" />
                  <span className="text-xs text-center text-gray-600">MySQL</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <Database className="w-10 h-10 text-superlens-richBlue mb-2" />
                  <span className="text-xs text-center text-gray-600">SQL Server</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <Database className="w-10 h-10 text-superlens-richBlue mb-2" />
                  <span className="text-xs text-center text-gray-600">DynamoDB</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <Cloud className="w-10 h-10 text-superlens-richBlue mb-2" />
                  <span className="text-xs text-center text-gray-600">Snowflake</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Adhoc Sources Card */}
          <Card className="shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <FileText className="h-8 w-8 text-superlens-richBlue" />
                </div>
                <h3 className="text-xl font-bold text-superlens-textBlue">Adhoc Sources</h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-3 rounded-lg hover:bg-green-50 transition-colors">
                  <FileText className="w-10 h-10 text-superlens-richBlue mb-2" />
                  <span className="text-xs text-center text-gray-600">CSV</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg hover:bg-green-50 transition-colors">
                  <FileSpreadsheet className="w-10 h-10 text-superlens-richBlue mb-2" />
                  <span className="text-xs text-center text-gray-600">Excel</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg hover:bg-green-50 transition-colors">
                  <Table2 className="w-10 h-10 text-superlens-richBlue mb-2" />
                  <span className="text-xs text-center text-gray-600">Google Sheets</span>
                </div>
              </div>
            </CardContent>
          </Card>
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
