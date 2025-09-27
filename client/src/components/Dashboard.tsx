import { useState, useEffect } from "react";
import DashboardCard from "./DashboardCard";
import SoilChart from "./SoilChart";
import AlertsPanel from "./AlertsPanel";
import NDVIDisplay from "./NDVIDisplay";
import AIRecommendations from "./AIRecommendations";
import FieldManager from "./FieldManager";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Droplet, Thermometer, Activity, Leaf, BarChart3, Brain, Settings, MapPin } from "lucide-react";
import { 
  generateMockSoilData, 
  generateMockNDVIData, 
  mockAlerts, 
  mockAIRecommendations, 
  mockFields,
  type SoilData,
  type NDVIData,
  type AlertData,
  type FieldData
} from "@/lib/mockData";

export default function Dashboard() {
  const [selectedField, setSelectedField] = useState("1");
  const [soilData, setSoilData] = useState<SoilData[]>([]);
  const [ndviData, setNdviData] = useState<NDVIData[]>([]);
  const [alertsData, setAlertsData] = useState<AlertData[]>(mockAlerts);
  const [fieldsData, setFieldsData] = useState<FieldData[]>(mockFields);

  // Load mock data on component mount
  useEffect(() => {
    setSoilData(generateMockSoilData());
    setNdviData(generateMockNDVIData());
  }, []);

  // Calculate dashboard summary from latest soil data
  const latestSoilData = soilData[soilData.length - 1];
  const latestNdviData = ndviData[ndviData.length - 1];
  
  const dashboardData = {
    soilMoisture: { 
      value: latestSoilData?.moisture || 68, 
      status: (latestSoilData?.moisture || 68) > 60 ? "good" as const : "warning" as const, 
      trend: "stable" as const, 
      trendValue: "No change" 
    },
    pH: { 
      value: latestSoilData?.ph || 6.8, 
      status: "good" as const, 
      trend: "up" as const, 
      trendValue: "+0.2 from last week" 
    },
    temperature: { 
      value: latestSoilData?.temperature || 24, 
      status: (latestSoilData?.temperature || 24) > 25 ? "warning" as const : "good" as const, 
      trend: "up" as const, 
      trendValue: "+3°C from yesterday" 
    },
    ndvi: { 
      value: latestNdviData?.value || 0.75, 
      status: "good" as const, 
      trend: "up" as const, 
      trendValue: "+0.05 this week" 
    }
  };

  // Transform soil data for chart
  const chartSoilData = soilData.map(data => ({
    date: new Date(data.timestamp).toLocaleDateString(),
    moisture: data.moisture,
    pH: data.ph,
    temperature: data.temperature
  }));

  // Transform NDVI data for display
  const ndviFields = fieldsData.map(field => ({
    fieldId: field.id,
    fieldName: field.name,
    ndviValue: Math.random() * 0.3 + 0.5, // Random NDVI between 0.5-0.8
    healthStatus: Math.random() > 0.5 ? "excellent" as const : "good" as const,
    area: field.area,
    lastUpdated: "2 hours ago"
  }));

  // Handlers
  const handleFieldSelect = (fieldId: string) => {
    setSelectedField(fieldId);
    console.log(`Selected field: ${fieldId}`);
  };

  const handleRefreshNDVI = () => {
    console.log("Refreshing NDVI data");
    setNdviData(generateMockNDVIData());
  };

  const handleDismissAlert = (alertId: string) => {
    setAlertsData(prev => prev.filter(alert => alert.id !== alertId));
    console.log(`Dismissed alert: ${alertId}`);
  };

  const handleAcceptRecommendation = (id: string) => {
    console.log(`Accepted recommendation: ${id}`);
  };

  const handleDismissRecommendation = (id: string) => {
    console.log(`Dismissed recommendation: ${id}`);
  };

  const handleRefreshRecommendations = () => {
    console.log("Refreshing recommendations");
  };

  const handleExportReport = () => {
    console.log("Exporting report");
  };

  const handleAddField = (fieldData: Partial<FieldData>) => {
    const newField: FieldData = {
      id: Date.now().toString(),
      name: fieldData.name || "New Field",
      cropType: fieldData.cropType || "Unknown",
      area: fieldData.area || 1.0,
      coordinates: fieldData.coordinates || "40.7128, -74.0060",
      status: fieldData.status || "active",
      plantingDate: fieldData.plantingDate || new Date().toISOString().split('T')[0],
      expectedHarvest: fieldData.expectedHarvest || new Date().toISOString().split('T')[0]
    };
    setFieldsData([...fieldsData, newField]);
    console.log('Added field:', newField);
  };

  const handleEditField = (id: string, fieldData: Partial<FieldData>) => {
    setFieldsData(fieldsData.map(field => 
      field.id === id ? { ...field, ...fieldData } : field
    ));
    console.log('Edited field:', id, fieldData);
  };

  const handleDeleteField = (id: string) => {
    setFieldsData(fieldsData.filter(field => field.id !== id));
    console.log('Deleted field:', id);
  };

  return (
    <div className="min-h-screen bg-background p-6" data-testid="dashboard">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-serif mb-2">Farm Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor your fields, track crop health, and get AI-powered recommendations
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Soil Moisture"
            value={dashboardData.soilMoisture.value}
            unit="%"
            status={dashboardData.soilMoisture.status}
            icon={<Droplet className="h-4 w-4" />}
            description="Optimal for current crop stage"
            trend={dashboardData.soilMoisture.trend}
            trendValue={dashboardData.soilMoisture.trendValue}
          />
          
          <DashboardCard
            title="pH Level"
            value={dashboardData.pH.value}
            status={dashboardData.pH.status}
            icon={<Activity className="h-4 w-4" />}
            description="Ideal range for most crops"
            trend={dashboardData.pH.trend}
            trendValue={dashboardData.pH.trendValue}
          />
          
          <DashboardCard
            title="Temperature"
            value={dashboardData.temperature.value}
            unit="°C"
            status={dashboardData.temperature.status}
            icon={<Thermometer className="h-4 w-4" />}
            description="Slightly above optimal"
            trend={dashboardData.temperature.trend}
            trendValue={dashboardData.temperature.trendValue}
          />
          
          <DashboardCard
            title="NDVI Index"
            value={dashboardData.ndvi.value}
            status={dashboardData.ndvi.status}
            icon={<Leaf className="h-4 w-4" />}
            description="Healthy vegetation detected"
            trend={dashboardData.ndvi.trend}
            trendValue={dashboardData.ndvi.trendValue}
          />
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid grid-cols-5 w-full max-w-2xl">
            <TabsTrigger value="overview" data-testid="tab-overview">
              <BarChart3 className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="health" data-testid="tab-health">
              <Leaf className="h-4 w-4 mr-2" />
              Crop Health
            </TabsTrigger>
            <TabsTrigger value="recommendations" data-testid="tab-recommendations">
              <Brain className="h-4 w-4 mr-2" />
              AI Insights
            </TabsTrigger>
            <TabsTrigger value="fields" data-testid="tab-fields">
              <MapPin className="h-4 w-4 mr-2" />
              Fields
            </TabsTrigger>
            <TabsTrigger value="alerts" data-testid="tab-alerts">
              <Settings className="h-4 w-4 mr-2" />
              Alerts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SoilChart data={chartSoilData} metric="moisture" title="Soil Moisture Trends" />
              <SoilChart data={chartSoilData} metric="pH" title="pH Level Trends" />
              <SoilChart data={chartSoilData} metric="temperature" title="Soil Temperature Trends" />
              <AlertsPanel alerts={alertsData.slice(0, 2)} />
            </div>
          </TabsContent>

          <TabsContent value="health" className="space-y-6">
            <NDVIDisplay
              fields={ndviFields}
              selectedField={selectedField}
              onFieldSelect={handleFieldSelect}
              onRefresh={handleRefreshNDVI}
            />
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <AIRecommendations
              recommendations={mockAIRecommendations}
              onAcceptRecommendation={handleAcceptRecommendation}
              onDismissRecommendation={handleDismissRecommendation}
              onRefresh={handleRefreshRecommendations}
              onExportReport={handleExportReport}
            />
          </TabsContent>

          <TabsContent value="fields" className="space-y-6">
            <FieldManager
              fields={fieldsData}
              onAddField={handleAddField}
              onEditField={handleEditField}
              onDeleteField={handleDeleteField}
            />
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <AlertsPanel alerts={alertsData} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}