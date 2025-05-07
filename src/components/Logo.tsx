
import React from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-10 h-10 md:w-12 md:h-12">
        <div className="absolute inset-0 bg-gradient-to-r from-superlens-blue to-superlens-lightBlue rounded-full opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-superlens-blue rounded-full opacity-10 animate-pulse" style={{ transform: 'scale(1.5)' }}></div>
            <Eye 
              size={24} 
              className="text-superlens-blue stroke-[2.5px] z-10"
            />
            <div className="absolute w-3 h-3 bg-superlens-lightBlue rounded-full top-0 right-0 animate-pulse"></div>
            <div className="absolute w-2 h-2 bg-white opacity-80 rounded-full top-1 left-2"></div>
          </div>
        </div>
      </div>
      <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-superlens-richBlue to-superlens-blue">
        SuperLens
      </span>
    </Link>
  );
};

export default Logo;
