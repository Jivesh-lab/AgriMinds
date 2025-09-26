import { Button } from "@/components/ui/button";
import { Leaf, TrendingUp, Droplet, BarChart3 } from "lucide-react";
import heroImage from "@assets/generated_images/Agricultural_hero_background_image_b18d24b5.png";

export default function HeroSection() {
  const handleGetStarted = () => {
    console.log("Get Started clicked");
  };

  const handleViewDashboard = () => {
    console.log("View Dashboard clicked");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
          Agri-Minds
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          AI-powered crop monitoring and advisory platform for smallholder farmers. 
          Monitor soil health, track crop vitality, and get intelligent farming recommendations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            onClick={handleGetStarted}
            data-testid="button-get-started"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={handleViewDashboard}
            data-testid="button-view-dashboard"
            className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20"
          >
            View Dashboard
          </Button>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <Droplet className="w-8 h-8 mb-2 text-blue-300" />
            <span className="text-sm font-medium">Real-time Soil Data</span>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <Leaf className="w-8 h-8 mb-2 text-green-300" />
            <span className="text-sm font-medium">NDVI Maps</span>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <TrendingUp className="w-8 h-8 mb-2 text-yellow-300" />
            <span className="text-sm font-medium">AI Recommendations</span>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <BarChart3 className="w-8 h-8 mb-2 text-orange-300" />
            <span className="text-sm font-medium">Predictive Alerts</span>
          </div>
        </div>
      </div>
    </section>
  );
}