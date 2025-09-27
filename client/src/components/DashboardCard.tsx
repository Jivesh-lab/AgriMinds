import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  value: string | number;
  unit?: string;
  status: "good" | "warning" | "critical";
  icon: React.ReactNode;
  description?: string;
  trend?: "up" | "down" | "stable";
  trendValue?: string;
}

export default function DashboardCard({ 
  title, 
  value, 
  unit, 
  status, 
  icon, 
  description,
  trend,
  trendValue 
}: DashboardCardProps) {
  const statusColors = {
    good: "bg-green-500/10 text-green-700 dark:text-green-300",
    warning: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-300", 
    critical: "bg-red-500/10 text-red-700 dark:text-red-300"
  };

  const trendColors = {
    up: "text-green-600 dark:text-green-400",
    down: "text-red-600 dark:text-red-400",
    stable: "text-gray-600 dark:text-gray-400"
  };

  return (
    <Card className="hover-elevate" data-testid={`card-${title.toLowerCase().replace(' ', '-')}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 mb-2">
          <div className="text-2xl font-bold">
            {value}
            {unit && <span className="text-sm font-normal text-muted-foreground ml-1">{unit}</span>}
          </div>
          <Badge className={cn("text-xs", statusColors[status])}>
            {status}
          </Badge>
        </div>
        
        {trend && trendValue && (
          <div className={cn("text-xs flex items-center gap-1", trendColors[trend])}>
            <span>{trend === "up" ? "↗" : trend === "down" ? "↘" : "→"}</span>
            <span>{trendValue}</span>
          </div>
        )}
        
        {description && (
          <p className="text-xs text-muted-foreground mt-1">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}