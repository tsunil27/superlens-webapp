import React, { useState } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from './ui/table';
import { Card, CardContent } from './ui/card';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  
  // Pricing table data from the image
  const features = [
    {
      name: "Conversational Insights",
      basic: true,
      pro: true,
      enterprise: true,
      basicNote: "",
      proNote: "",
      enterpriseNote: ""
    },
    {
      name: "Domain-Specific NLU (Media/Sports/Gaming)",
      basic: true,
      pro: true,
      enterprise: true,
      basicNote: "(limited)",
      proNote: "(all domains)",
      enterpriseNote: "(custom tuning)"
    },
    {
      name: "Data Source Integration",
      basic: "Up to 1 source (CSV/API)",
      pro: "All Data Connectors",
      enterprise: "All Data Connectors + Custom Integrations"
    },
    {
      name: "Metrics & Dimensions Coverage",
      basic: "Core KPIs",
      pro: "Advanced KPIs + custom metrics",
      enterprise: "Fully customisable"
    },
    {
      name: "Data Storytelling Engine",
      basic: "Standard visuals",
      pro: "Custom Dashboards",
      enterprise: "Interactive dashboards + action prompts"
    },
    {
      name: "Clarification Dialogue Engine",
      basic: "Basic clarifications",
      pro: "Smart follow-ups",
      enterprise: "Domain-aware dialogue handling"
    },
    {
      name: "Time-based Analytics",
      basic: "Last 30/90 days",
      pro: "Any time frame selection",
      enterprise: "Time series + cohort support"
    },
    {
      name: "User Access",
      basic: "Upto 5 users",
      pro: "Up to 15 users",
      enterprise: "Unlimited users (role-based)"
    },
    {
      name: "Support",
      basic: "Email support",
      pro: "Priority (email + chat)",
      enterprise: "Dedicated CSM + SLA guarantees"
    },
    {
      name: "Custom Branding",
      basic: false,
      pro: false,
      enterprise: true,
      enterpriseNote: "(white-labeled experience)"
    }
  ];
  
  // Plan summary data with updated pricing
  const plans = [
    {
      name: "Basic",
      price: "Coming Soon",
      description: "For small teams getting started with AI analytics",
      note: "",
      popular: false,
      cta: "Start Free Trial",
      link: "/free-trial"
    },
    {
      name: "Pro",
      price: "Coming Soon",
      description: "For growing companies with advanced analytics needs",
      note: "",
      popular: true,
      cta: "Start Free Trial",
      link: "/free-trial"
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      description: "For organizations with complex requirements",
      note: "",
      popular: false,
      cta: "Contact Sales",
      link: "/book-demo"
    }
  ];
  
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose the plan that works for your business. All plans include a 14-day free trial.
          </p>
        </div>
        
        {/* Plan cards summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? 'shadow-xl border-superlens-blue transform -translate-y-2' 
                  : 'shadow-sm border-gray-200 hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="bg-superlens-blue text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  {plan.name === "Basic" || plan.name === "Pro" ? (
                    <span className="text-4xl font-bold text-superlens-blue">{plan.price}</span>
                  ) : (
                    <span className="text-4xl font-bold">{plan.price}</span>
                  )}
                  {plan.note && <span className="text-gray-500 text-sm ml-2">{plan.note}</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <Link to={plan.link}>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-superlens-blue hover:bg-superlens-darkBlue' 
                        : ''
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Comparison table */}
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <Table className="border-collapse">
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="w-1/4 py-4 px-6 text-left font-bold text-gray-800">Feature</TableHead>
                <TableHead className="w-1/4 py-4 px-6 text-left font-bold text-gray-800">Basic</TableHead>
                <TableHead className="w-1/4 py-4 px-6 text-left font-bold text-gray-800">Pro</TableHead>
                <TableHead className="w-1/4 py-4 px-6 text-left font-bold text-gray-800">Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature, index) => (
                <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <TableCell className="py-4 px-6 border-t border-gray-200 font-medium">
                    {feature.name}
                  </TableCell>
                  <TableCell className="py-4 px-6 border-t border-gray-200">
                    {typeof feature.basic === 'boolean' ? (
                      feature.basic ? (
                        <div className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-1" />
                          {feature.basicNote && <span className="text-sm text-gray-600">{feature.basicNote}</span>}
                        </div>
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )
                    ) : (
                      <span className="text-sm">{feature.basic}</span>
                    )}
                  </TableCell>
                  <TableCell className="py-4 px-6 border-t border-gray-200">
                    {typeof feature.pro === 'boolean' ? (
                      feature.pro ? (
                        <div className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-1" />
                          {feature.proNote && <span className="text-sm text-gray-600">{feature.proNote}</span>}
                        </div>
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )
                    ) : (
                      <span className="text-sm">{feature.pro}</span>
                    )}
                  </TableCell>
                  <TableCell className="py-4 px-6 border-t border-gray-200">
                    {typeof feature.enterprise === 'boolean' ? (
                      feature.enterprise ? (
                        <div className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-1" />
                          {feature.enterpriseNote && <span className="text-sm text-gray-600">{feature.enterpriseNote}</span>}
                        </div>
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )
                    ) : (
                      <span className="text-sm">{feature.enterprise}</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {/* CTA section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Need help choosing the right plan?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book-demo">
              <Button size="lg" className="bg-superlens-blue hover:bg-superlens-darkBlue">
                Book a Demo
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
