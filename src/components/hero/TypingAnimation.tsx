
import React from 'react';

interface TypingAnimationProps {
  text: string;
  isTyping: boolean;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, isTyping }) => {
  return (
    <div className="flex items-start justify-end">
      <div className="bg-superlens-blue rounded-lg p-3 max-w-[80%]">
        <p className="text-sm text-white">
          {text}
          {isTyping && (
            <span className="inline-block w-1.5 h-4 bg-white ml-0.5 animate-pulse"></span>
          )}
        </p>
      </div>
      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center ml-3 flex-shrink-0">
        <span className="text-xs font-medium text-gray-700">You</span>
      </div>
    </div>
  );
};

export default TypingAnimation;
