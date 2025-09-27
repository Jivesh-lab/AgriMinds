import { useState } from 'react';
import NDVIDisplay from '../NDVIDisplay';

export default function NDVIDisplayExample() {
  // todo: remove mock data
  const [selectedField, setSelectedField] = useState<string>("field-1");
  
  const mockFields = [
    {
      fieldId: "field-1",
      fieldName: "North Field A",
      ndviValue: 0.78,
      healthStatus: "excellent" as const,
      area: 2.5,
      lastUpdated: "2 hours ago"
    },
    {
      fieldId: "field-2", 
      fieldName: "South Field B",
      ndviValue: 0.65,
      healthStatus: "good" as const,
      area: 3.2,
      lastUpdated: "3 hours ago"
    },
    {
      fieldId: "field-3",
      fieldName: "East Field C", 
      ndviValue: 0.45,
      healthStatus: "moderate" as const,
      area: 1.8,
      lastUpdated: "1 hour ago"
    },
    {
      fieldId: "field-4",
      fieldName: "West Field D",
      ndviValue: 0.32,
      healthStatus: "poor" as const,
      area: 2.1,
      lastUpdated: "4 hours ago"
    }
  ];

  const handleFieldSelect = (fieldId: string) => {
    setSelectedField(fieldId);
    console.log(`Selected field: ${fieldId}`);
  };

  const handleRefresh = () => {
    console.log("Refreshing NDVI data");
  };

  return (
    <div className="max-w-6xl p-6">
      <NDVIDisplay
        fields={mockFields}
        selectedField={selectedField}
        onFieldSelect={handleFieldSelect}
        onRefresh={handleRefresh}
      />
    </div>
  );
}