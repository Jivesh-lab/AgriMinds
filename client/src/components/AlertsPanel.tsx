import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, XCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Alert {
  id: string;
  type: "critical" | "warning" | "info" | "success";
  title: string;
  message: string;
  timestamp: string;
  fieldName: string;
  actionRequired?: string;
}

interface AlertsPanelProps {
  alerts: Alert[];
}

export default function AlertsPanel({ alerts }: AlertsPanelProps) {
  const getAlertIcon = (type: Alert['type']) => {
    switch (type) {
      case 'critical': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'success': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'info': return <Clock className="h-4 w-4 text-blue-500" />;
    }
  };

  const getAlertColors = (type: Alert['type']) => {
    switch (type) {
      case 'critical': return "bg-red-500/10 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800";
      case 'warning': return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800";
      case 'success': return "bg-green-500/10 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800";
      case 'info': return "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800";
    }
  };

  const getBadgeVariant = (type: Alert['type']) => {
    switch (type) {
      case 'critical': return "destructive";
      case 'warning': return "secondary";
      case 'success': return "default";
      case 'info': return "outline";
      default: return "outline";
    }
  };

  const handleDismissAlert = (alertId: string) => {
    console.log(`Dismissing alert: ${alertId}`);
  };

  const handleTakeAction = (alertId: string, action: string) => {
    console.log(`Taking action for alert ${alertId}: ${action}`);
  };

  return (
    <Card data-testid="alerts-panel">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Field Alerts
          <Badge variant="outline" className="ml-auto">
            {alerts.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <CheckCircle className="h-12 w-12 mx-auto mb-2 text-green-500" />
            <p>All fields are healthy!</p>
            <p className="text-sm">No alerts at this time.</p>
          </div>
        ) : (
          alerts.map((alert) => (
            <div
              key={alert.id}
              className={cn(
                "border rounded-lg p-4",
                getAlertColors(alert.type)
              )}
              data-testid={`alert-${alert.id}`}
            >
              <div className="flex items-start gap-3">
                {getAlertIcon(alert.type)}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-sm">{alert.title}</h4>
                    <Badge variant={getBadgeVariant(alert.type)} className="text-xs">
                      {alert.type}
                    </Badge>
                  </div>
                  <p className="text-sm mb-2">{alert.message}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Field: {alert.fieldName}</span>
                    <span>{alert.timestamp}</span>
                  </div>
                  {alert.actionRequired && (
                    <div className="flex gap-2 mt-3">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleTakeAction(alert.id, alert.actionRequired!)}
                        data-testid={`button-action-${alert.id}`}
                      >
                        {alert.actionRequired}
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDismissAlert(alert.id)}
                        data-testid={`button-dismiss-${alert.id}`}
                      >
                        Dismiss
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}