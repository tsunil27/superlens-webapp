
import React from 'react';
import { Shield, Lock, FileCheck, Building, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const SecurityTrust: React.FC = () => {
  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      description: "Your data is always encrypted both in transit and at rest using industry-standard protocols",
      icon: <Lock className="h-8 w-8 text-superlens-richBlue" />
    },
    {
      title: "SOC 2 Compliant",
      description: "Our platform adheres to the strictest security standards and undergoes regular auditing",
      icon: <Shield className="h-8 w-8 text-superlens-richBlue" />
    },
    {
      title: "Data Governance",
      description: "Comprehensive access controls and audit trails ensure your data is handled properly",
      icon: <FileCheck className="h-8 w-8 text-superlens-richBlue" />
    },
    {
      title: "Enterprise SLAs",
      description: "We provide guaranteed uptime and response times backed by enterprise-grade SLAs",
      icon: <Building className="h-8 w-8 text-superlens-richBlue" />
    },
    {
      title: "Compliance Ready",
      description: "Meet regulatory requirements with built-in compliance features and documentation",
      icon: <Award className="h-8 w-8 text-superlens-richBlue" />
    }
  ];

  return (
    <section id="security" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-superlens-textBlue">
            Enterprise Grade Security You Can Trust
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            SuperLens provides the highest level of security and compliance, ensuring your sensitive data remains protected.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-superlens-blue/10 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-superlens-textBlue">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-superlens-mutedBlue px-4 py-2 rounded-full">
            <Shield className="h-5 w-5 text-superlens-richBlue" />
            <span className="text-superlens-richBlue font-medium">ISO 27001, GDPR, HIPAA, and CCPA compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTrust;
