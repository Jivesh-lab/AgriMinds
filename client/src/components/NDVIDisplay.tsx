import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Map, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface NDVIData {
  fieldId: string;
  fieldName: string;
  ndviValue: number;
  healthStatus: "excellent" | "good" | "moderate" | "poor" | "critical";
  area: number;
  lastUpdated: string;
}

interface NDVIDisplayProps {
  fields: NDVIData[];
  selectedField?: string;
  onFieldSelect: (fieldId: string) => void;
  onRefresh: () => void;
}

export default function NDVIDisplay({ 
  fields, 
  selectedField, 
  onFieldSelect, 
  onRefresh 
}: NDVIDisplayProps) {
  
  const getHealthColor = (status: NDVIData['healthStatus']) => {
    switch (status) {
      case 'excellent': return 'bg-green-600';
      case 'good': return 'bg-green-400';
      case 'moderate': return 'bg-yellow-400';
      case 'poor': return 'bg-orange-400';
      case 'critical': return 'bg-red-500';
    }
  };

  const getHealthBadgeColor = (status: NDVIData['healthStatus']) => {
    switch (status) {
      case 'excellent': return 'bg-green-500/10 text-green-700 dark:text-green-300';
      case 'good': return 'bg-green-500/10 text-green-600 dark:text-green-400';
      case 'moderate': return 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-300';
      case 'poor': return 'bg-orange-500/10 text-orange-700 dark:text-orange-300';
      case 'critical': return 'bg-red-500/10 text-red-700 dark:text-red-300';
    }
  };

  const getRecommendation = (status: NDVIData['healthStatus']) => {
    switch (status) {
      case 'excellent': return 'Maintain current practices';
      case 'good': return 'Continue monitoring';
      case 'moderate': return 'Consider nutrient analysis';
      case 'poor': return 'Investigate stress factors';
      case 'critical': return 'Immediate intervention needed';
    }
  };

  return (
    <Card data-testid="ndvi-display">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-green-600" />
            NDVI Crop Health Index
          </CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={onRefresh}
            data-testid="button-refresh-ndvi"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Field Selection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fields.map((field) => (
              <div
                key={field.fieldId}
                className={cn(
                  "border rounded-lg p-4 cursor-pointer transition-all hover-elevate",
                  selectedField === field.fieldId 
                    ? "ring-2 ring-primary border-primary" 
                    : "border-border"
                )}
                onClick={() => onFieldSelect(field.fieldId)}
                data-testid={`field-card-${field.fieldId}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-sm">{field.fieldName}</h3>
                  <Badge className={cn("text-xs", getHealthBadgeColor(field.healthStatus))}>
                    {field.healthStatus}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-2xl font-bold text-foreground">
                    {field.ndviValue.toFixed(2)}
                  </div>
                  <div className="text-xs text-muted-foreground">NDVI</div>
                </div>

                {/* Visual Health Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                  <div
                    className={cn("h-2 rounded-full transition-all", getHealthColor(field.healthStatus))}
                    style={{ width: `${Math.min(field.ndviValue * 100, 100)}%` }}
                  ></div>
                </div>

                <div className="text-xs text-muted-foreground space-y-1">
                  <div>Area: {field.area} ha</div>
                  <div>Updated: {field.lastUpdated}</div>
                  <div className="font-medium text-foreground">
                    {getRecommendation(field.healthStatus)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="mt-6">
            <div className="border rounded-lg p-8 bg-muted/50 text-center">
              <Map className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-medium mb-2">Satellite Field Map</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Interactive NDVI map will display here showing vegetation health across selected field
              </p>
              <div className="flex justify-center gap-2 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span>Poor</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-yellow-400 rounded"></div>
                  <span>Moderate</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span>Excellent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}