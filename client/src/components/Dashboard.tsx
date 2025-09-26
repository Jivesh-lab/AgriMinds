import { useState } from "react";
import DashboardCard from "./DashboardCard";
import SoilChart from "./SoilChart";
import AlertsPanel from "./AlertsPanel";
import NDVIDisplay from "./NDVIDisplay";
import AIRecommendations from "./AIRecommendations";
import FieldManager from "./FieldManager";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Droplet, Thermometer, Activity, Leaf, BarChart3, Brain, Settings, MapPin } from "lucide-react";

export default function Dashboard() {
  const [selectedField, setSelectedField] = useState("field-1");

  // todo: remove mock data
  const dashboardData = {
    soilMoisture: { value: 68, status: "good" as const, trend: "stable" as const, trendValue: "No change" },
    pH: { value: 6.8, status: "good" as const, trend: "up" as const, trendValue: "+0.2 from last week" },
    temperature: { value: 24, status: "warning" as const, trend: "up" as const, trendValue: "+3°C from yesterday" },
    ndvi: { value: 0.75, status: "good" as const, trend: "up" as const, trendValue: "+0.05 this week" }
  };

  const soilData = [
    { date: '2024-01-01', moisture: 65, pH: 6.5, temperature: 22 },
    { date: '2024-01-02', moisture: 68, pH: 6.6, temperature: 23 },
    { date: '2024-01-03', moisture: 62, pH: 6.4, temperature: 24 },
    { date: '2024-01-04', moisture: 70, pH: 6.7, temperature: 25 },
    { date: '2024-01-05', moisture: 67, pH: 6.8, temperature: 24 },
    { date: '2024-01-06', moisture: 69, pH: 6.9, temperature: 23 },
    { date: '2024-01-07', moisture: 68, pH: 6.8, temperature: 24 },
  ];

  const alerts = [
    {
      id: "1",
      type: "critical" as const,
      title: "Low Soil Moisture Detected",
      message: "Soil moisture has dropped to 45%. Immediate irrigation recommended.",
      timestamp: "2 hours ago",
      fieldName: "North Field A",
      actionRequired: "Schedule Irrigation"
    },
    {
      id: "2",
      type: "warning" as const,
      title: "pH Levels Elevated",
      message: "Soil pH has risen to 7.8. Consider applying sulfur.",
      timestamp: "1 day ago",
      fieldName: "South Field B",
      actionRequired: "Apply pH Treatment"
    }
  ];

  const ndviFields = [
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
    }
  ];

  const recommendations = [
    {
      id: "1",
      type: "irrigation" as const,
      title: "Increase Irrigation Schedule",
      description: "Soil moisture levels are below optimal range",
      confidence: 92,
      priority: "high" as const,
      timeframe: "Next 24 hours",
      impact: "Prevent stress and improve yield by 15-20%",
      actions: ["Apply 25mm of water", "Schedule early morning irrigation"]
    }
  ];

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
    }
  ]);

  // Handlers
  const handleFieldSelect = (fieldId: string) => {
    setSelectedField(fieldId);
    console.log(`Selected field: ${fieldId}`);
  };

  const handleRefreshNDVI = () => {
    console.log("Refreshing NDVI data");
  };

  const handleDismissAlert = (alertId: string) => {
    console.log(`Dismissing alert: ${alertId}`);
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

  const handleAddField = (fieldData: any) => {
    const newField = { ...fieldData, id: Date.now().toString() };
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
              <SoilChart data={soilData} metric="moisture" title="Soil Moisture Trends" />
              <SoilChart data={soilData} metric="pH" title="pH Level Trends" />
              <SoilChart data={soilData} metric="temperature" title="Soil Temperature Trends" />
              <AlertsPanel alerts={alerts.slice(0, 2)} />
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
              recommendations={recommendations}
              onAcceptRecommendation={handleAcceptRecommendation}
              onDismissRecommendation={handleDismissRecommendation}
              onRefresh={handleRefreshRecommendations}
              onExportReport={handleExportReport}
            />
          </TabsContent>

          <TabsContent value="fields" className="space-y-6">
            <FieldManager
              fields={fields}
              onAddField={handleAddField}
              onEditField={handleEditField}
              onDeleteField={handleDeleteField}
            />
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <AlertsPanel alerts={alerts} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}