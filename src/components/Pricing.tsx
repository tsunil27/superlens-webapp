
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Team",
      price: "$35",
      period: "per user/month",
      description: "Perfect for small teams getting started with analytics",
      features: [
        "Up to 10 users",
        "10GB data storage",
        "Natural language queries",
        "Basic visualizations",
        "Standard support",
        "1 year data history"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Business",
      price: "$75",
      period: "per user/month",
      description: "For growing companies with advanced analytics needs",
      features: [
        "Unlimited users",
        "50GB data storage",
        "Advanced AI insights",
        "Custom dashboards",
        "Priority support",
        "3 years data history",
        "Data governance"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored pricing",
      description: "For large organizations with complex requirements",
      features: [
        "Unlimited everything",
        "Dedicated instance",
        "White labeling",
        "24/7 dedicated support",
        "Custom integrations",
        "Unlimited history",
        "Advanced security features",
        "On-premise option"
      ],
      cta: "Contact Sales",
      popular: false
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
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
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <Link to={plan.name === "Enterprise" ? "/contact" : "/free-trial"}>
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
                <div className="mt-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check className="h-5 w-5 text-superlens-blue mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
