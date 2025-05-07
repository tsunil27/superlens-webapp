
import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { ChartBar, ChartLine, ChartPie } from 'lucide-react';
import { ChartContainer } from './ui/chart';
import { 
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

const Hero: React.FC = () => {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showChart, setShowChart] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  
  // Define all queries and their corresponding data
  const queries = [
    {
      text: "Show me the incremental revenue month by month over the last 6 months?",
      chartType: "bar",
      data: [
        { month: 'Jan', revenue: 12500 },
        { month: 'Feb', revenue: 14700 },
        { month: 'Mar', revenue: 16800 },
        { month: 'Apr', revenue: 19200 },
        { month: 'May', revenue: 21500 },
        { month: 'Jun', revenue: 24300 },
      ],
      metrics: [
        { label: 'Overall Growth', value: '+94.4%', color: 'text-superlens-textBlue' },
        { label: 'Avg. Monthly Growth', value: '+14.2%', color: 'text-superlens-textBlue' },
        { label: 'Projection Next Month', value: '↑ $27.1k', color: 'text-green-600' },
      ]
    },
    {
      text: "Was there improvement in customer engagement last month?",
      chartType: "line",
      data: [
        { day: '1', engagement: 45 },
        { day: '5', engagement: 52 },
        { day: '10', engagement: 61 },
        { day: '15', engagement: 58 },
        { day: '20', engagement: 68 },
        { day: '25', engagement: 73 },
        { day: '30', engagement: 82 },
      ],
      metrics: [
        { label: 'Overall Increase', value: '+82.2%', color: 'text-green-600' },
        { label: 'Active Users', value: '+28.5%', color: 'text-green-600' },
        { label: 'Session Duration', value: '+12.3%', color: 'text-superlens-textBlue' },
      ]
    },
    {
      text: "How does the customer acquisition funnel analysis look for last quarter?",
      chartType: "pie",
      data: [
        { name: 'Awareness', value: 1200 },
        { name: 'Consideration', value: 850 },
        { name: 'Acquisition', value: 420 },
        { name: 'Retention', value: 310 },
      ],
      metrics: [
        { label: 'Conversion Rate', value: '35%', color: 'text-superlens-textBlue' },
        { label: 'Cost Per Acquisition', value: '-12.4%', color: 'text-green-600' },
        { label: 'Retention Rate', value: '73.8%', color: 'text-superlens-textBlue' },
      ]
    }
  ];

  const COLORS = ['#0056b3', '#0ea5e9', '#002850', '#00c2ff'];
  const typingSpeed = 50;
  const displayDuration = 6000; // 6 seconds for each query/chart
  const transitionDuration = 1000; // 1 second for transitions

  // Reset and start typing the next query
  useEffect(() => {
    const setupNextQuery = () => {
      setTypedText("");
      setShowChart(false);
      setIsTyping(true);
      
      let currentIndex = 0;
      const currentQuery = queries[activeQueryIndex].text;
      
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
              setActiveQueryIndex((prevIndex) => (prevIndex + 1) % queries.length);
            }, displayDuration);
            
          }, transitionDuration);
        }
      }, typingSpeed);
      
      return () => clearInterval(interval);
    };
    
    setupNextQuery();
  }, [activeQueryIndex]);

  // Render the appropriate chart based on the active query
  const renderActiveChart = () => {
    const activeQuery = queries[activeQueryIndex];
    
    switch (activeQuery.chartType) {
      case 'bar':
        return (
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart
                data={activeQuery.data}
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
        );
        
      case 'line':
        return (
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart
                data={activeQuery.data}
                margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
              >
                <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  width={40}
                />
                <Tooltip
                  formatter={(value) => [`${value}`, 'Engagement Score']}
                  labelFormatter={(label) => `Day: ${label}`}
                />
                <Line 
                  type="monotone"
                  dataKey="engagement" 
                  stroke="#0ea5e9" 
                  strokeWidth={2}
                  dot={{ stroke: '#0ea5e9', strokeWidth: 2, r: 4 }}
                  activeDot={{ stroke: '#0ea5e9', strokeWidth: 2, r: 6 }}
                  animationDuration={2000}
                />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
        );
        
      case 'pie':
        return (
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={activeQuery.data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  animationDuration={2000}
                >
                  {activeQuery.data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [value, 'Users']}
                />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        );
        
      default:
        return null;
    }
  };

  // Render the appropriate chart icon based on the active query
  const renderChartIcon = () => {
    const activeQuery = queries[activeQueryIndex];
    
    switch (activeQuery.chartType) {
      case 'bar':
        return <ChartBar className="w-4 h-4 text-superlens-blue" />;
      case 'line':
        return <ChartLine className="w-4 h-4 text-superlens-blue" />;
      case 'pie':
        return <ChartPie className="w-4 h-4 text-superlens-blue" />;
      default:
        return null;
    }
  };

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
                      <p className="text-sm text-gray-700 mb-3">Here's {
                        activeQueryIndex === 0 ? "the incremental revenue month on month over the last 6 months:" :
                        activeQueryIndex === 1 ? "the customer engagement analysis for last month:" :
                        "the customer acquisition funnel analysis for the last quarter:"
                      }</p>
                      
                      {/* Visualization Area */}
                      <div className="bg-white border border-gray-200 rounded-md p-3 mb-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-medium text-gray-500">
                            {activeQueryIndex === 0 ? "Monthly Revenue (Last 6 Months)" :
                             activeQueryIndex === 1 ? "Daily Engagement Score (Last Month)" :
                             "Customer Acquisition Funnel (Last Quarter)"}
                          </span>
                          <div className="flex space-x-2">
                            {activeQueryIndex !== 2 && <ChartLine className={`w-4 h-4 ${activeQueryIndex === 1 ? 'text-superlens-blue' : 'text-gray-400'}`} />}
                            {activeQueryIndex !== 1 && <ChartBar className={`w-4 h-4 ${activeQueryIndex === 0 ? 'text-superlens-blue' : 'text-gray-400'}`} />}
                            {activeQueryIndex === 2 && <ChartPie className="w-4 h-4 text-superlens-blue" />}
                          </div>
                        </div>
                        
                        {/* Dynamic Chart */}
                        {renderActiveChart()}
                        
                        {/* Metrics Row */}
                        <div className="grid grid-cols-3 gap-2 mt-3 border-t border-gray-100 pt-2">
                          {queries[activeQueryIndex].metrics.map((metric, index) => (
                            <div key={index} className={`text-center ${index === 1 ? 'border-x border-gray-100' : ''}`}>
                              <p className="text-xs text-gray-500">{metric.label}</p>
                              <p className={`text-sm font-medium ${metric.color}`}>{metric.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-700">
                        {activeQueryIndex === 0 
                          ? "The data shows consistent revenue growth over the past 6 months. Would you like me to analyze specific growth factors?"
                          : activeQueryIndex === 1 
                          ? "Customer engagement has shown a significant improvement in the last month. The trend indicates increasing user interaction."
                          : "The acquisition funnel shows areas for optimization. Conversion from awareness to consideration could be improved."}
                      </p>
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
