
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-12 h-12 md:w-14 md:h-14">
        <img
          src="/lovable-uploads/90a449f9-7a8d-4db5-afcb-b77e6743286c.png"
          alt="SuperLens Logo"
          className="w-full h-full object-contain"
          style={{ 
            filter: 'drop-shadow(0 0 8px rgba(14, 165, 233, 0.6))' 
          }}
        />
      </div>
      <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-superlens-richBlue to-superlens-blue">
        SuperLens
      </span>
    </Link>
  );
};

export default Logo;
