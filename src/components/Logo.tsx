
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full">
        <div className="absolute inset-0 bg-gradient-radial from-background to-transparent opacity-50 z-10 pointer-events-none rounded-full" />
        <img
          src="/lovable-uploads/5d1e7cd9-1678-410d-8ef3-c3582e6d4d2c.png"
          alt="SuperLens Logo"
          className="w-full h-full object-cover"
          style={{ 
            filter: 'drop-shadow(0 0 8px rgba(14, 165, 233, 0.5))'
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
