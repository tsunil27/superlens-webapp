
export type ChartMetric = {
  label: string;
  value: string;
  color: string;
}

export type Query = {
  text: string;
  chartType: 'bar' | 'line' | 'pie';
  data: any[];
  metrics: ChartMetric[];
}

// Define all queries and their corresponding data
export const queries: Query[] = [
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

export const typingSpeed = 50;
export const displayDuration = 6000; // 6 seconds for each query/chart
export const transitionDuration = 1000; // 1 second for transitions
