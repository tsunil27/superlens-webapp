
import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Search, Sparkles } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-10 h-10 md:w-12 md:h-12">
        <div className="absolute inset-0 bg-superlens-richBlue rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Eye 
            size={28} 
            className="text-superlens-blue stroke-[2.5px] z-10"
          />
          <Sparkles 
            size={14} 
            className="absolute text-blue-500 top-0 right-0 animate-pulse" 
          />
          <Search 
            size={12} 
            className="absolute text-blue-400 bottom-1 right-1" 
          />
        </div>
      </div>
      <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-superlens-richBlue to-superlens-blue">
        SuperLens
      </span>
    </Link>
  );
};

export default Logo;
