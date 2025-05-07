
import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { LineChart, BarChart } from 'lucide-react';
import { ChartContainer } from './ui/chart';
import { 
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [showChart, setShowChart] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const fullText = "Show me the incremental revenue month on month over the last 6 months?";
  const typingSpeed = 50;
  
  const monthlyData = [
    { month: 'Jan', revenue: 12500 },
    { month: 'Feb', revenue: 14700 },
    { month: 'Mar', revenue: 16800 },
    { month: 'Apr', revenue: 19200 },
    { month: 'May', revenue: 21500 },
    { month: 'Jun', revenue: 24300 },
  ];

  useEffect(() => {
    setIsTyping(true);
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        setTimeout(() => {
          setShowChart(true);
        }, 500);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-superlens-textBlue mb-6 leading-tight">
            AI-Powered Decision Intelligence Platform
          </h1>
          <p className="text-lg md:text-xl text-superlens-textBlue/80 mb-8 leading-relaxed">
            Transform your data into actionable insights with SuperLens. Our advanced AI platform helps you make faster, smarter business decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-demo">
              <Button size="lg" className="bg-superlens-richBlue text-white hover:bg-superlens-blue font-medium px-8">
                Book a Demo
              </Button>
            </Link>
            <Link to="/free-trial">
              <Button size="lg" variant="outline" className="border-superlens-richBlue text-superlens-richBlue hover:bg-superlens-richBlue hover:text-white font-medium px-8">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
        
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
                <div className="flex items-start justify-end">
                  <div className="bg-superlens-blue rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-white">{typedText}
                      {isTyping && <span className="inline-block w-1.5 h-4 bg-white ml-0.5 animate-pulse"></span>}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center ml-3 flex-shrink-0">
                    <span className="text-xs font-medium text-gray-700">You</span>
                  </div>
                </div>
                
                {/* AI Response with Visualization */}
                {showChart && (
                  <div className="flex items-start animate-fade-in">
                    <div className="w-8 h-8 rounded-full bg-superlens-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-4 h-4 rounded-full bg-superlens-blue"></div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[90%] w-full">
                      <p className="text-sm text-gray-700 mb-3">Here's the incremental revenue month on month over the last 6 months:</p>
                      
                      {/* Visualization Area */}
                      <div className="bg-white border border-gray-200 rounded-md p-3 mb-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-medium text-gray-500">Monthly Revenue (Last 6 Months)</span>
                          <div className="flex space-x-2">
                            <LineChart className="w-4 h-4 text-gray-400" />
                            <BarChart className="w-4 h-4 text-superlens-blue" />
                          </div>
                        </div>
                        
                        {/* Dynamic Bar Chart */}
                        <div className="h-48 w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <RechartsBarChart
                              data={monthlyData}
                              margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                            >
                              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                              <YAxis
                                tickFormatter={(value) => `$${value/1000}k`}
                                tick={{ fontSize: 12 }}
                                width={40}
                              />
                              <Tooltip
                                formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Revenue']}
                                labelFormatter={(label) => `Month: ${label}`}
                              />
                              <Bar 
                                dataKey="revenue" 
                                fill="#0056b3" 
                                animationDuration={2000}
                                animationBegin={300}
                                radius={[4, 4, 0, 0]} 
                              />
                            </RechartsBarChart>
                          </ResponsiveContainer>
                        </div>
                        
                        {/* Metrics Row */}
                        <div className="grid grid-cols-3 gap-2 mt-3 border-t border-gray-100 pt-2">
                          <div className="text-center">
                            <p className="text-xs text-gray-500">Overall Growth</p>
                            <p className="text-sm font-medium text-superlens-textBlue">+94.4%</p>
                          </div>
                          <div className="text-center border-x border-gray-100">
                            <p className="text-xs text-gray-500">Avg. Monthly Growth</p>
                            <p className="text-sm font-medium text-superlens-textBlue">+14.2%</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-gray-500">Projection Next Month</p>
                            <p className="text-sm font-medium text-green-600">↑ $27.1k</p>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-700">The data shows consistent revenue growth over the past 6 months. Would you like me to analyze specific growth factors or compare to previous periods?</p>
                    </div>
                  </div>
                )}
                
                {/* Message Input */}
                <div className="mt-2 border-t border-gray-100 pt-3 pb-1">
                  <div className="flex items-center border border-gray-200 rounded-full bg-white px-4 py-2">
                    <input 
                      type="text" 
                      placeholder="Ask SuperLens about your data..." 
                      className="flex-1 text-sm border-none outline-none focus:ring-0 bg-transparent"
                      readOnly 
                    />
                    <button className="bg-superlens-blue text-white rounded-full w-6 h-6 flex items-center justify-center ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
