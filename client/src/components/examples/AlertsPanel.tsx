import AlertsPanel from '../AlertsPanel';

export default function AlertsPanelExample() {
  // todo: remove mock data
  const mockAlerts = [
    {
      id: "1",
      type: "critical" as const,
      title: "Low Soil Moisture Detected",
      message: "Soil moisture has dropped to 45%. Immediate irrigation recommended to prevent crop stress.",
      timestamp: "2 hours ago",
      fieldName: "North Field A",
      actionRequired: "Schedule Irrigation"
    },
    {
      id: "2", 
      type: "warning" as const,
      title: "pH Levels Elevated",
      message: "Soil pH has risen to 7.8. Consider applying sulfur to lower pH levels.",
      timestamp: "1 day ago",
      fieldName: "South Field B",
      actionRequired: "Apply pH Treatment"
    },
    {
      id: "3",
      type: "info" as const,
      title: "Weather Update",
      message: "Rain expected in 3 days. You may want to delay planned irrigation.",
      timestamp: "3 hours ago",
      fieldName: "All Fields"
    },
    {
      id: "4",
      type: "success" as const,
      title: "Optimal Growth Conditions",
      message: "NDVI index shows healthy crop growth. Current conditions are ideal.",
      timestamp: "5 hours ago", 
      fieldName: "East Field C"
    }
  ];

  return (
    <div className="max-w-2xl p-6">
      <AlertsPanel alerts={mockAlerts} />
    </div>
  );
}