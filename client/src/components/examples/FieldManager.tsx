import { useState } from 'react';
import FieldManager from '../FieldManager';

export default function FieldManagerExample() {
  // todo: remove mock data
  const [fields, setFields] = useState([
    {
      id: "1",
      name: "North Field A",
      cropType: "corn",
      area: 2.5,
      coordinates: "40.7128, -74.0060",
      status: "active" as const,
      plantingDate: "2024-04-15",
      expectedHarvest: "2024-09-30"
    },
    {
      id: "2",
      name: "South Field B", 
      cropType: "wheat",
      area: 3.2,
      coordinates: "40.7000, -74.0100",
      status: "active" as const,
      plantingDate: "2024-03-20",
      expectedHarvest: "2024-08-15"
    },
    {
      id: "3",
      name: "East Field C",
      cropType: "soybeans", 
      area: 1.8,
      coordinates: "40.7200, -74.0000",
      status: "harvested" as const,
      plantingDate: "2024-05-01",
      expectedHarvest: "2024-10-15"
    }
  ]);

  const handleAddField = (fieldData: any) => {
    const newField = {
      ...fieldData,
      id: Date.now().toString()
    };
    setFields([...fields, newField]);
    console.log('Added field:', newField);
  };

  const handleEditField = (id: string, fieldData: any) => {
    setFields(fields.map(field => 
      field.id === id ? { ...field, ...fieldData } : field
    ));
    console.log('Edited field:', id, fieldData);
  };

  const handleDeleteField = (id: string) => {
    setFields(fields.filter(field => field.id !== id));
    console.log('Deleted field:', id);
  };

  return (
    <div className="max-w-6xl p-6">
      <FieldManager
        fields={fields}
        onAddField={handleAddField}
        onEditField={handleEditField}
        onDeleteField={handleDeleteField}
      />
    </div>
  );
}