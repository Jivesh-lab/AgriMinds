import SoilChart from '../SoilChart';

export default function SoilChartExample() {
  // todo: remove mock data
  const mockData = [
    { date: '2024-01-01', moisture: 65, pH: 6.5, temperature: 22 },
    { date: '2024-01-02', moisture: 68, pH: 6.6, temperature: 23 },
    { date: '2024-01-03', moisture: 62, pH: 6.4, temperature: 24 },
    { date: '2024-01-04', moisture: 70, pH: 6.7, temperature: 25 },
    { date: '2024-01-05', moisture: 67, pH: 6.8, temperature: 24 },
    { date: '2024-01-06', moisture: 69, pH: 6.9, temperature: 23 },
    { date: '2024-01-07', moisture: 68, pH: 6.8, temperature: 24 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      <SoilChart 
        data={mockData} 
        metric="moisture" 
        title="Soil Moisture Trends"
      />
      <SoilChart 
        data={mockData} 
        metric="pH" 
        title="pH Level Trends"
      />
      <SoilChart 
        data={mockData} 
        metric="temperature" 
        title="Soil Temperature Trends"
      />
    </div>
  );
}