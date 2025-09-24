import { MoreHorizontal } from "lucide-react";

const chartData = [
  { month: "Jan", moneyIn: 85, moneyOut: 45 },
  { month: "Feb", moneyIn: 95, moneyOut: 55 },
  { month: "Mar", moneyIn: 75, moneyOut: 35 },
  { month: "Apr", moneyIn: 88, moneyOut: 50 },
  { month: "May", moneyIn: 75, moneyOut: 35 },
  { month: "Jun", moneyIn: 92, moneyOut: 52 },
  { month: "Jul", moneyIn: 85, moneyOut: 45 },
  { month: "Aug", moneyIn: 88, moneyOut: 48 },
  { month: "Sep", moneyIn: 85, moneyOut: 45 },
  { month: "Oct", moneyIn: 90, moneyOut: 50 },
  { month: "Nov", moneyIn: 95, moneyOut: 55 },
  { month: "Dec", moneyIn: 82, moneyOut: 42 },
];

export function InsightsChart() {
  const maxValue = 100;

  return (
    <div className="bg-white rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-manrope font-bold text-gray-900">
          Insights
        </h2>
        <button>
          <MoreHorizontal className="h-6 w-6 text-gray-800" />
        </button>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary-700"></div>
          <span className="text-sm font-manrope text-gray-500">Money out</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary-400"></div>
          <span className="text-sm font-manrope text-gray-500">Money In</span>
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-80 flex flex-col justify-between text-xs text-gray-500 font-manrope">
          <span>100k</span>
          <span>80k</span>
          <span>60k</span>
          <span>40k</span>
          <span>20k</span>
          <span>0</span>
        </div>

        {/* Chart bars */}
        <div className="ml-10 flex items-end justify-between h-80 border-b border-gray-200">
          {chartData.map((data, index) => {
            const moneyInHeight = (data.moneyIn / maxValue) * 100;
            const moneyOutHeight = (data.moneyOut / maxValue) * 100;
            
            return (
              <div key={data.month} className="flex flex-col items-center">
                {/* Bar container */}
                <div className="w-4 h-80 flex flex-col justify-end mb-2 relative">
                  {/* Money In bar (light blue) */}
                  <div 
                    className="w-full bg-primary-400 rounded-t"
                    style={{ height: `${moneyInHeight}%` }}
                  ></div>
                  {/* Money Out bar (dark blue) */}
                  <div 
                    className="w-full bg-primary-700 rounded-t absolute bottom-0"
                    style={{ height: `${moneyOutHeight}%` }}
                  ></div>
                </div>
                
                {/* Month label */}
                <span className="text-xs text-gray-500 font-manrope mt-2">
                  {data.month}
                </span>
              </div>
            );
          })}
        </div>

        {/* Horizontal grid lines */}
        <div className="absolute left-10 top-0 right-0 h-80 pointer-events-none">
          {[0, 1, 2, 3, 4, 5].map((line) => (
            <div
              key={line}
              className="absolute w-full border-t border-gray-100"
              style={{ top: `${(line / 5) * 100}%` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
