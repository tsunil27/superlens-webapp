
import React from 'react';
import { ArrowRight, MessageCircle, LineChart, Zap } from 'lucide-react';
import { Button } from './ui/button';

const HowSuperLensIsDifferent: React.FC = () => {
  return (
    <section id="how-superlens-is-different" className="py-16 bg-superlens-mutedBlue relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-superlens-textBlue mb-4">HOW SUPERLENS IS DIFFERENT</h2>
          <p className="text-xl text-superlens-textBlue/80 max-w-3xl mx-auto">
            Answer + ReAct to any question about your data - Ask questions and take action on your enterprise data!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:translate-y-[-5px]">
            <div className="w-14 h-14 bg-superlens-richBlue/10 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="h-7 w-7 text-superlens-richBlue" />
            </div>
            <h3 className="text-xl font-semibold text-superlens-textBlue mb-3">
              Conversational Analytics
            </h3>
            <p className="text-superlens-textBlue/80 mb-6">
              Ask questions in natural language and get instant visual insights without needing to write complex queries or understand data structures.
            </p>
            <Button variant="link" className="text-superlens-richBlue p-0 hover:no-underline flex items-center">
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:translate-y-[-5px]">
            <div className="w-14 h-14 bg-superlens-richBlue/10 rounded-full flex items-center justify-center mb-6">
              <LineChart className="h-7 w-7 text-superlens-richBlue" />
            </div>
            <h3 className="text-xl font-semibold text-superlens-textBlue mb-3">
              Automated Insights
            </h3>
            <p className="text-superlens-textBlue/80 mb-6">
              SuperLens automatically discovers key drivers, trends, and anomalies in your data and presents them without you having to search for them.
            </p>
            <Button variant="link" className="text-superlens-richBlue p-0 hover:no-underline flex items-center">
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:translate-y-[-5px]">
            <div className="w-14 h-14 bg-superlens-richBlue/10 rounded-full flex items-center justify-center mb-6">
              <Zap className="h-7 w-7 text-superlens-richBlue" />
            </div>
            <h3 className="text-xl font-semibold text-superlens-textBlue mb-3">
              Actionable Intelligence
            </h3>
            <p className="text-superlens-textBlue/80 mb-6">
              Go beyond just viewing data to take immediate action based on insights, all within the same platform without context switching.
            </p>
            <Button variant="link" className="text-superlens-richBlue p-0 hover:no-underline flex items-center">
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-32 bg-superlens-richBlue/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-24 bg-superlens-richBlue/5 rounded-tr-full"></div>
    </section>
  );
};

export default HowSuperLensIsDifferent;
