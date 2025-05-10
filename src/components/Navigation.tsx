
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      label: "Register",
      href: "/register",
      hasDropdown: false
    },
    {
      label: "Pricing",
      href: "/pricing",
      hasDropdown: false
    },
    {
      label: "About Us",
      href: "/about-us",
      hasDropdown: false
    }
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link 
                  to={item.href}
                  className="text-gray-700 hover:text-superlens-blue font-medium"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white absolute top-16 left-0 right-0 z-50 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <div key={index} className="py-2">
                  <Link 
                    to={item.href}
                    className="text-gray-700 font-medium block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
