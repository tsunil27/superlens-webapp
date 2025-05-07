
import React from 'react';
import { ChartBar, ChartLine, ChartPie } from 'lucide-react';
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
  Cell
} from 'recharts';

type ChartMetric = {
  label: string;
  value: string;
  color: string;
}

type QueryData = {
  chartType: string;
  data: any[];
  metrics: ChartMetric[];
}

interface ChartDisplayProps {
  activeQuery: QueryData;
  activeQueryIndex: number;
}

const COLORS = ['#0056b3', '#0ea5e9', '#002850', '#00c2ff'];

const ChartDisplay: React.FC<ChartDisplayProps> = ({ activeQuery, activeQueryIndex }) => {
  // Render the appropriate chart based on the active query
  const renderActiveChart = () => {
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

  // Render the chart header with title and icons
  const renderChartHeader = () => {
    return (
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
    );
  };

  // Render metrics row below the chart
  const renderMetricsRow = () => {
    return (
      <div className="grid grid-cols-3 gap-2 mt-3 border-t border-gray-100 pt-2">
        {activeQuery.metrics.map((metric, index) => (
          <div key={index} className={`text-center ${index === 1 ? 'border-x border-gray-100' : ''}`}>
            <p className="text-xs text-gray-500">{metric.label}</p>
            <p className={`text-sm font-medium ${metric.color}`}>{metric.value}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white border border-gray-200 rounded-md p-3 mb-3">
      {renderChartHeader()}
      {renderActiveChart()}
      {renderMetricsRow()}
    </div>
  );
};

export default ChartDisplay;
