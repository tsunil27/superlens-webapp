
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-[12.5rem] h-[12.5rem] md:w-[15rem] md:h-[15rem]">
        <img
          src="/lovable-uploads/e6c5fbb9-5190-4375-8b09-935b3be6a604.png"
          alt="SuperLens Logo"
          className="w-full h-full object-contain mix-blend-multiply"
          style={{ 
            filter: 'drop-shadow(0 0 0.5px #fff0)',
            transform: 'scale(1.25)'
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
