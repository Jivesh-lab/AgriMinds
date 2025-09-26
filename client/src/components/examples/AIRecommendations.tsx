import AIRecommendations from '../AIRecommendations';

export default function AIRecommendationsExample() {
  // todo: remove mock data
  const mockRecommendations = [
    {
      id: "1",
      type: "irrigation" as const,
      title: "Increase Irrigation Schedule",
      description: "Soil moisture levels are below optimal range for corn growth stage",
      confidence: 92,
      priority: "high" as const,
      timeframe: "Next 24 hours",
      impact: "Prevent stress and improve yield by an estimated 15-20%",
      actions: [
        "Apply 25mm of water to North Field A",
        "Schedule irrigation for early morning (5-7 AM)",
        "Monitor soil moisture after irrigation",
        "Adjust future schedule based on weather forecast"
      ]
    },
    {
      id: "2", 
      type: "fertilizer" as const,
      title: "Nitrogen Application Recommended",
      description: "Crop analysis indicates nitrogen deficiency in vegetative growth phase",
      confidence: 87,
      priority: "medium" as const,
      timeframe: "Within 1 week",
      impact: "Restore healthy plant color and boost growth rate by 12-18%",
      actions: [
        "Apply nitrogen-rich fertilizer at 120 kg/ha",
        "Use split application method over 2 weeks",
        "Focus on areas with yellowing leaves",
        "Test soil after 2 weeks to assess improvement"
      ]
    },
    {
      id: "3",
      type: "pest_control" as const,
      title: "Preventive Pest Management",
      description: "Weather conditions favor pest development in next 2 weeks",
      confidence: 74,
      priority: "low" as const,
      timeframe: "Next 2 weeks",
      impact: "Prevent potential crop damage and reduce pesticide costs by 30%",
      actions: [
        "Scout fields every 3 days for early detection",
        "Apply biological pest control agents",
        "Remove crop residue from field edges",
        "Monitor trap counts and weather conditions"
      ]
    }
  ];

  const handleAcceptRecommendation = (id: string) => {
    console.log(`Accepted recommendation: ${id}`);
  };

  const handleDismissRecommendation = (id: string) => {
    console.log(`Dismissed recommendation: ${id}`);
  };

  const handleRefresh = () => {
    console.log("Refreshing AI recommendations");
  };

  const handleExportReport = () => {
    console.log("Exporting recommendations report");
  };

  return (
    <div className="max-w-4xl p-6">
      <AIRecommendations
        recommendations={mockRecommendations}
        onAcceptRecommendation={handleAcceptRecommendation}
        onDismissRecommendation={handleDismissRecommendation}
        onRefresh={handleRefresh}
        onExportReport={handleExportReport}
      />
    </div>
  );
}