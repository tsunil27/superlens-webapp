
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="gradient-bg pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            AI-Powered Decision Intelligence Platform
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
            Transform your data into actionable insights with SuperLens. Our advanced AI platform helps you make faster, smarter business decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-demo">
              <Button size="lg" className="bg-superlens-lightBlue hover:bg-superlens-blue text-white font-medium px-8">
                Book a Demo
              </Button>
            </Link>
            <Link to="/free-trial">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-superlens-blue font-medium px-8">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-16 max-w-5xl mx-auto relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-superlens-lightBlue to-superlens-blue rounded-lg opacity-30 blur-sm"></div>
          <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-800 relative">
            <div className="h-12 bg-gray-800 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="p-2">
              <div className="w-full h-[300px] md:h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 rounded flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-superlens-lightBlue rounded-full opacity-20 animate-pulse"></div>
                    <img 
                      src="/lovable-uploads/59e45b98-2f23-4d86-b599-cb6283a28e44.png" 
                      alt="SuperLens Logo" 
                      className="w-full h-full object-contain lens-glow animate-float"
                    />
                  </div>
                  <p className="text-blue-300 text-lg font-mono">Analyzing business data...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract Shapes */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-white fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C57.88,9.59,98.85,26,138.93,38.89Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
