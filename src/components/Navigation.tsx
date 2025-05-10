
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
      label: "Pricing",
      href: "/pricing",
      hasDropdown: false
    },
    {
      label: "About Us",
      href: "/company",
      hasDropdown: true,
      dropdownItems: [
        { label: "About Us", href: "/company/about" },
        { label: "Careers", href: "/company/careers" },
        { label: "Blog", href: "/company/blog" },
        { label: "Contact", href: "/company/contact" }
      ]
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
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center text-gray-700 hover:text-superlens-blue font-medium">
                        {item.label}
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white rounded-lg shadow-lg p-2 w-64">
                      {item.dropdownItems?.map((dropdownItem, idx) => (
                        <DropdownMenuItem key={idx} asChild>
                          <Link 
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-superlens-gray rounded-md w-full text-sm"
                          >
                            {dropdownItem.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link 
                    to={item.href}
                    className="text-gray-700 hover:text-superlens-blue font-medium"
                  >
                    {item.label}
                  </Link>
                )}
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
                  {item.hasDropdown && (
                    <div className="pl-4 mt-1 border-l-2 border-gray-200 space-y-2">
                      {item.dropdownItems?.map((dropdownItem, idx) => (
                        <Link 
                          key={idx}
                          to={dropdownItem.href}
                          className="block py-1 text-gray-600 hover:text-superlens-blue text-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
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
