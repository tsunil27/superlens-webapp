
import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const HeroTitle: React.FC = () => {
  return (
    <div className="w-full text-left">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-superlens-textBlue mb-6 leading-tight">
        AI-Powered Decision Intelligence Platform
      </h1>
      <p className="text-lg md:text-xl text-superlens-textBlue/80 mb-8 leading-relaxed">
        Transform your data into actionable insights with SuperLens. Our advanced AI platform helps you make faster, smarter business decisions.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/book-demo">
          <Button size="lg" className="bg-superlens-richBlue text-white hover:bg-superlens-blue font-medium px-8">
            Book a Demo
          </Button>
        </Link>
        <Link to="/free-trial">
          <Button size="lg" variant="outline" className="border-superlens-richBlue text-superlens-richBlue hover:bg-superlens-richBlue hover:text-white font-medium px-8">
            Start Free Trial
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroTitle;
