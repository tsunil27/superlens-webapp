
import React from 'react';
import TypingAnimation from './TypingAnimation';
import AIResponse from './AIResponse';
import QueryInput from './QueryInput';

interface ChatInterfaceProps {
  typedText: string;
  isTyping: boolean;
  showChart: boolean;
  activeQueryIndex: number;
  activeQuery: any;
  userInput: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  typedText,
  isTyping,
  showChart,
  activeQueryIndex,
  activeQuery,
  userInput,
  onInputChange,
  onKeyDown
}) => {
  return (
    <div className="mt-16 max-w-5xl mx-auto relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-superlens-lightBlue to-superlens-blue rounded-lg opacity-30 blur-sm"></div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 relative">
        {/* Chat Interface Header */}
        <div className="h-12 bg-gray-100 flex items-center px-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <div className="ml-4 text-sm font-medium text-gray-700">SuperLens AI Assistant</div>
        </div>
        
        {/* Chat Interface Body */}
        <div className="p-4 bg-white">
          <div className="flex flex-col space-y-4">
            {/* AI Message */}
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-superlens-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                <div className="w-4 h-4 rounded-full bg-superlens-blue animate-pulse"></div>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm text-gray-700">How can I help you analyze your business data today?</p>
              </div>
            </div>
            
            {/* User Message with Typing Animation */}
            <TypingAnimation 
              text={typedText} 
              isTyping={isTyping} 
            />
            
            {/* AI Response with Visualization */}
            <AIResponse
              showChart={showChart}
              activeQueryIndex={activeQueryIndex}
              activeQuery={activeQuery}
            />
            
            {/* Message Input */}
            <QueryInput
              userInput={userInput}
              onInputChange={onInputChange}
              onKeyDown={onKeyDown}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
