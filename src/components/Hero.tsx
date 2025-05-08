import React, { useState, useEffect } from 'react';
import HeroTitle from './hero/HeroTitle';
import ChatInterface from './hero/ChatInterface';
import { queries, typingSpeed, displayDuration, transitionDuration } from './hero/HeroData';

const Hero: React.FC = () => {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showChart, setShowChart] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isAutoTyping, setIsAutoTyping] = useState(true);
  
  // Handle manual typing
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);
    
    if (isAutoTyping) {
      // If auto-typing is in progress, disable it and start manual mode
      setIsAutoTyping(false);
      setTypedText(value);
    } else {
      setTypedText(value);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // When user presses Enter, show the chart for their query
    if (e.key === 'Enter' && userInput.trim() !== '') {
      setIsTyping(false);
      setShowChart(true);
      
      // Reset after some time to continue the demo loop
      setTimeout(() => {
        setUserInput("");
        setTypedText("");
        setShowChart(false);
        setIsAutoTyping(true);
        setActiveQueryIndex((prevIndex) => (prevIndex + 1) % queries.length);
      }, displayDuration);
      
      e.preventDefault();
    }
  };

  // Reset and start typing the next query in auto mode
  useEffect(() => {
    if (!isAutoTyping) return; // Skip if manual mode is active
    
    const setupNextQuery = () => {
      setTypedText("");
      setShowChart(false);
      setIsTyping(true);
      
      let currentIndex = 0;
      const currentQuery = queries[activeQueryIndex].text;
      setUserInput(""); // Don't set complete query now, we'll build it up gradually
      
      const interval = setInterval(() => {
        if (currentIndex < currentQuery.length) {
          setTypedText(prev => prev + currentQuery.charAt(currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          setTimeout(() => {
            setShowChart(true);
            
            // Set timer for next query
            setTimeout(() => {
              setUserInput("");
              setActiveQueryIndex((prevIndex) => (prevIndex + 1) % queries.length);
            }, displayDuration);
            
          }, transitionDuration);
        }
      }, typingSpeed);
      
      return () => clearInterval(interval);
    };
    
    setupNextQuery();
  }, [activeQueryIndex, isAutoTyping]);

  return (
    <section className="bg-white py-10 md:py-16 relative overflow-hidden min-h-[80vh]">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start min-h-[60vh]">
          {/* Title and buttons section (left side) */}
          <div className="lg:w-1/2 flex items-start">
            <HeroTitle />
          </div>
          
          {/* Chat interface section (right side) */}
          <div className="lg:w-1/2 flex items-start">
            <ChatInterface 
              typedText={typedText}
              isTyping={isTyping}
              showChart={showChart}
              activeQueryIndex={activeQueryIndex}
              activeQuery={queries[activeQueryIndex]}
              userInput={userInput}
              onInputChange={handleUserInput}
              onKeyDown={handleInputKeyDown}
            />
          </div>
        </div>
      </div>
      
      {/* Abstract Shapes */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-superlens-mutedBlue fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C57.88,9.59,98.85,26,138.93,38.89Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
