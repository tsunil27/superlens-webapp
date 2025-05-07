
import React from 'react';
import ChartDisplay from './ChartDisplay';

interface AIResponseProps {
  showChart: boolean;
  activeQueryIndex: number;
  activeQuery: any;
}

const AIResponse: React.FC<AIResponseProps> = ({ 
  showChart, 
  activeQueryIndex, 
  activeQuery 
}) => {
  if (!showChart) return null;

  let responseText;
  switch (activeQueryIndex) {
    case 0:
      responseText = "The data shows consistent revenue growth over the past 6 months. Would you like me to analyze specific growth factors?";
      break;
    case 1:
      responseText = "Customer engagement has shown a significant improvement in the last month. The trend indicates increasing user interaction.";
      break;
    case 2:
      responseText = "The acquisition funnel shows areas for optimization. Conversion from awareness to consideration could be improved.";
      break;
    default:
      responseText = "Here's the data you requested. Would you like any additional analysis?";
  }

  return (
    <div className="flex items-start animate-fade-in">
      <div className="w-8 h-8 rounded-full bg-superlens-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
        <div className="w-4 h-4 rounded-full bg-superlens-blue"></div>
      </div>
      <div className="bg-gray-100 rounded-lg p-3 max-w-[90%] w-full">
        <p className="text-sm text-gray-700 mb-3">
          Here's {
            activeQueryIndex === 0 ? "the incremental revenue month on month over the last 6 months:" :
            activeQueryIndex === 1 ? "the customer engagement analysis for last month:" :
            "the customer acquisition funnel analysis for the last quarter:"
          }
        </p>
        
        {/* Visualization Area */}
        <ChartDisplay 
          activeQuery={activeQuery} 
          activeQueryIndex={activeQueryIndex} 
        />
        
        <p className="text-sm text-gray-700">{responseText}</p>
      </div>
    </div>
  );
};

export default AIResponse;
