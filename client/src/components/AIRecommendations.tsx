import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, Droplet, Sprout, Thermometer, Calendar, Download, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface Recommendation {
  id: string;
  type: "irrigation" | "fertilizer" | "pest_control" | "planting" | "harvesting";
  title: string;
  description: string;
  confidence: number;
  priority: "high" | "medium" | "low";
  timeframe: string;
  impact: string;
  actions: string[];
}

interface AIRecommendationsProps {
  recommendations: Recommendation[];
  onAcceptRecommendation: (id: string) => void;
  onDismissRecommendation: (id: string) => void;
  onRefresh: () => void;
  onExportReport: () => void;
}

export default function AIRecommendations({ 
  recommendations, 
  onAcceptRecommendation,
  onDismissRecommendation, 
  onRefresh,
  onExportReport
}: AIRecommendationsProps) {
  
  const getTypeIcon = (type: Recommendation['type']) => {
    switch (type) {
      case 'irrigation': return <Droplet className="h-4 w-4 text-blue-500" />;
      case 'fertilizer': return <Sprout className="h-4 w-4 text-green-500" />;
      case 'pest_control': return <Thermometer className="h-4 w-4 text-red-500" />;
      case 'planting': return <Calendar className="h-4 w-4 text-purple-500" />;
      case 'harvesting': return <Calendar className="h-4 w-4 text-orange-500" />;
    }
  };

  const getPriorityColor = (priority: Recommendation['priority']) => {
    switch (priority) {
      case 'high': return 'bg-red-500/10 text-red-700 dark:text-red-300';
      case 'medium': return 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-300';
      case 'low': return 'bg-blue-500/10 text-blue-700 dark:text-blue-300';
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'text-green-600';
    if (confidence >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <Card data-testid="ai-recommendations">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <div>
              <CardTitle>AI Recommendations</CardTitle>
              <CardDescription>
                Personalized farming suggestions based on your field data
              </CardDescription>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onExportReport}
              data-testid="button-export-report"
            >
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onRefresh}
              data-testid="button-refresh-recommendations"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {recommendations.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Brain className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
              <p>No recommendations available.</p>
              <p className="text-sm">Check back later for AI-generated insights.</p>
            </div>
          ) : (
            recommendations.map((rec) => (
              <div
                key={rec.id}
                className="border rounded-lg p-6 space-y-4"
                data-testid={`recommendation-${rec.id}`}
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {getTypeIcon(rec.type)}
                    <div>
                      <h3 className="font-semibold text-lg">{rec.title}</h3>
                      <p className="text-sm text-muted-foreground">{rec.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge className={cn("text-xs", getPriorityColor(rec.priority))}>
                      {rec.priority} priority
                    </Badge>
                    <div className="text-xs text-muted-foreground">
                      {rec.timeframe}
                    </div>
                  </div>
                </div>

                {/* Confidence Score */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>AI Confidence</span>
                    <span className={cn("font-medium", getConfidenceColor(rec.confidence))}>
                      {rec.confidence}%
                    </span>
                  </div>
                  <Progress value={rec.confidence} className="h-2" />
                </div>

                {/* Impact */}
                <div className="bg-muted/50 rounded-lg p-3">
                  <h4 className="text-sm font-medium mb-1">Expected Impact</h4>
                  <p className="text-sm text-muted-foreground">{rec.impact}</p>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Recommended Actions:</h4>
                  <ul className="space-y-1">
                    {rec.actions.map((action, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    onClick={() => onAcceptRecommendation(rec.id)}
                    data-testid={`button-accept-${rec.id}`}
                  >
                    Accept & Schedule
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => onDismissRecommendation(rec.id)}
                    data-testid={`button-dismiss-${rec.id}`}
                  >
                    Dismiss
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}