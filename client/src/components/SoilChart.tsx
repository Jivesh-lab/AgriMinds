import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SoilDataPoint {
  date: string;
  moisture: number;
  pH: number;
  temperature: number;
}

interface SoilChartProps {
  data: SoilDataPoint[];
  metric: 'moisture' | 'pH' | 'temperature';
  title: string;
}

export default function SoilChart({ data, metric, title }: SoilChartProps) {
  const getColor = (metric: string) => {
    switch (metric) {
      case 'moisture': return '#3b82f6'; // blue
      case 'pH': return '#10b981'; // green
      case 'temperature': return '#f59e0b'; // amber
      default: return '#6b7280'; // gray
    }
  };

  const getUnit = (metric: string) => {
    switch (metric) {
      case 'moisture': return '%';
      case 'pH': return '';
      case 'temperature': return '°C';
      default: return '';
    }
  };

  return (
    <Card data-testid={`chart-${metric}`}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="date" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}${getUnit(metric)}`}
              />
              <Tooltip 
                formatter={(value) => [`${value}${getUnit(metric)}`, title]}
                labelFormatter={(label) => `Date: ${label}`}
                contentStyle={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey={metric} 
                stroke={getColor(metric)}
                strokeWidth={2}
                dot={{ fill: getColor(metric), strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}