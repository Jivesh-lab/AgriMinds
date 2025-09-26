import DashboardCard from '../DashboardCard';
import { Droplet, Thermometer, Activity, Leaf } from 'lucide-react';

export default function DashboardCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {/* todo: remove mock data */}
      <DashboardCard
        title="Soil Moisture"
        value={68}
        unit="%"
        status="good"
        icon={<Droplet className="h-4 w-4" />}
        description="Optimal for current crop stage"
        trend="stable"
        trendValue="No change from yesterday"
      />
      
      <DashboardCard
        title="pH Level"
        value={6.8}
        status="good"
        icon={<Activity className="h-4 w-4" />}
        description="Ideal range for most crops"
        trend="up"
        trendValue="+0.2 from last week"
      />
      
      <DashboardCard
        title="Temperature"
        value={24}
        unit="°C"
        status="warning"
        icon={<Thermometer className="h-4 w-4" />}
        description="Slightly above optimal"
        trend="up"
        trendValue="+3°C from yesterday"
      />
      
      <DashboardCard
        title="NDVI Index"
        value={0.75}
        status="good"
        icon={<Leaf className="h-4 w-4" />}
        description="Healthy vegetation detected"
        trend="up"
        trendValue="+0.05 this week"
      />
    </div>
  );
}