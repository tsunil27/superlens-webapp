
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-10 h-10 md:w-12 md:h-12">
        <div className="absolute inset-0 bg-superlens-blue rounded-full opacity-20 animate-pulse"></div>
        <img 
          src="/lovable-uploads/59e45b98-2f23-4d86-b599-cb6283a28e44.png" 
          alt="SuperLens Logo" 
          className="w-full h-full object-contain lens-glow"
        />
      </div>
      <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-superlens-blue to-superlens-lightBlue">
        SuperLens
      </span>
    </Link>
  );
};

export default Logo;
