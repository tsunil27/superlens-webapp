
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-background to-transparent opacity-70 z-10 pointer-events-none rounded-full" />
        <img
          src="/lovable-uploads/121ce3a6-23eb-46ab-a677-cf16ad9c5173.png"
          alt="SuperLens Logo"
          className="w-full h-full object-contain scale-110"
          style={{ 
            filter: 'drop-shadow(0 0 12px rgba(14, 165, 233, 0.7))',
            mixBlendMode: 'multiply'
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
