
import React from 'react';
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
    <div className="mt-16 max-w-4xl mx-auto relative w-full h-[500px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-superlens-lightBlue to-superlens-blue rounded-lg opacity-30 blur-sm"></div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 relative h-full">
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
        <div className="p-4 bg-white h-[calc(100%-3rem)] flex flex-col">
          <div className="flex flex-col space-y-4 flex-grow">
            {/* AI Response with Visualization */}
            <AIResponse
              showChart={showChart}
              activeQueryIndex={activeQueryIndex}
              activeQuery={activeQuery}
            />
            
            {/* Message Input */}
            <div className="mt-auto">
              <QueryInput
                userInput={userInput}
                isTyping={isTyping} 
                typedText={typedText}
                onInputChange={onInputChange}
                onKeyDown={onKeyDown}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
