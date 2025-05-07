
import React, { useRef, useEffect } from 'react';
import { Input } from '../ui/input';

interface QueryInputProps {
  userInput: string;
  isTyping: boolean;
  typedText: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const QueryInput: React.FC<QueryInputProps> = ({ 
  userInput, 
  isTyping,
  typedText,
  onInputChange, 
  onKeyDown 
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus the input when typing starts
  useEffect(() => {
    if (isTyping && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isTyping]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="mt-2 border-t border-gray-100 pt-3 pb-1">
      <div className="flex items-center border border-gray-200 rounded-full bg-white px-4 py-2" onClick={focusInput}>
        <Input 
          type="text" 
          placeholder="Ask SuperLens about your data..." 
          className="flex-1 text-sm border-none outline-none focus:ring-0 bg-transparent"
          value={isTyping ? typedText : userInput}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          ref={inputRef}
          readOnly={isTyping} // Make input readonly when auto-typing
        />
        <button className="bg-superlens-blue text-white rounded-full w-6 h-6 flex items-center justify-center ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default QueryInput;
