
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
        {/* Outer sunburst aura effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full opacity-20 animate-pulse" style={{ transform: 'scale(1.8)' }}></div>
        
        {/* Rays of light emanating from center */}
        <div className="absolute inset-0" style={{ overflow: 'hidden' }}>
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute top-1/2 left-1/2 h-8 w-0.5 bg-yellow-400 opacity-70"
              style={{ 
                transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-14px)`,
                transformOrigin: 'bottom center' 
              }}
            ></div>
          ))}
        </div>
        
        {/* Middle aura */}
        <div className="absolute inset-0 bg-gradient-to-r from-superlens-blue to-superlens-lightBlue rounded-full opacity-40" style={{ transform: 'scale(1.4)' }}></div>
        
        {/* Inner aura */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Eye background glow */}
            <div className="absolute inset-0 bg-white rounded-full opacity-60 animate-pulse" style={{ transform: 'scale(1.5)', filter: 'blur(4px)' }}></div>
            
            {/* Eye icon */}
            <Eye 
              size={24} 
              className="text-superlens-blue stroke-[2.5px] z-10 relative"
            />
            
            {/* Iris highlight */}
            <div className="absolute w-3 h-3 bg-superlens-lightBlue rounded-full top-0 right-0 animate-pulse"></div>
            
            {/* Eye reflection */}
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
