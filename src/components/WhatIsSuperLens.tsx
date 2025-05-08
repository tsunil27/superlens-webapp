
import React from 'react';
import { Card } from './ui/card';

const WhatIsSuperLens: React.FC = () => {
  return (
    <section id="what-is-superlens" className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-superlens-textBlue mb-4">What is SuperLens?</h2>
          <p className="text-lg text-superlens-textBlue/80 max-w-3xl mx-auto">
            SuperLens is a decision intelligence platform that enables data-driven insights through AI-powered analytics
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="video-carousel relative w-full h-[320px] md:h-[400px] bg-gray-100 rounded-lg overflow-hidden">
                {/* Video/Image loop container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="carousel-container w-full h-full">
                    <div className="carousel-slide animate-carousel">
                      <img 
                        src="/lovable-uploads/eb7991e4-c439-4e38-bce0-d3bcdbf80f42.png" 
                        alt="SuperLens Platform" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-superlens-richBlue/80 flex items-center justify-center cursor-pointer hover:bg-superlens-richBlue transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <Card className="p-8 border-none shadow-lg">
              <h3 className="text-2xl font-semibold text-superlens-textBlue mb-4">
                Streamline Decision-Making with AI
              </h3>
              <p className="text-superlens-textBlue/80 mb-6">
                SuperLens combines the power of artificial intelligence with business intelligence to help teams make data-backed decisions faster and with greater accuracy.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-superlens-richBlue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Automated insights that identify patterns and anomalies in your data</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-superlens-richBlue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Natural language processing for querying complex data without SQL knowledge</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-superlens-richBlue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Advanced visualization tools that make data interpretation simple</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSuperLens;
