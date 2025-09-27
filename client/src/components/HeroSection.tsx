import { Button } from "@/components/ui/button";
import { Leaf, TrendingUp, Droplet, BarChart3 } from "lucide-react";

interface HeroSectionProps {
  onGetStarted?: () => void;
  onViewDashboard?: () => void;
}

export default function HeroSection({ onGetStarted, onViewDashboard }: HeroSectionProps) {
  const handleGetStarted = () => {
    onGetStarted?.() || console.log("Get Started clicked");
  };

  const handleViewDashboard = () => {
    onViewDashboard?.() || console.log("View Dashboard clicked");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Animated Elements */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-green-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-60 right-32 w-24 h-24 bg-emerald-400/15 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-teal-400/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-300/12 rounded-full blur-xl animate-bounce delay-500"></div>
        </div>
        
        {/* Overlay pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        {/* Main heading with enhanced styling */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Leaf className="h-5 w-5 text-green-400" />
            <span className="text-sm font-medium">AI-Powered Agriculture</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent">
            Agri-Minds
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-green-50">
          AI-powered crop monitoring and advisory platform for smallholder farmers. 
          Monitor soil health, track crop vitality, and get intelligent farming recommendations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            onClick={handleGetStarted}
            data-testid="button-get-started"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-green-500/25 transition-all duration-300"
          >
            <Leaf className="h-5 w-5 mr-2" />
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={handleViewDashboard}
            data-testid="button-view-dashboard"
            className="border-2 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            <BarChart3 className="h-5 w-5 mr-2" />
            View Dashboard
          </Button>
        </div>

        {/* Feature highlights with enhanced design */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="group flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Droplet className="h-7 w-7 text-blue-400" />
            </div>
            <span className="text-sm font-semibold text-white mb-1">Real-time Soil Data</span>
            <span className="text-xs text-green-100 opacity-80">Monitor 24/7</span>
          </div>
          
          <div className="group flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Leaf className="h-7 w-7 text-green-400" />
            </div>
            <span className="text-sm font-semibold text-white mb-1">NDVI Analysis</span>
            <span className="text-xs text-green-100 opacity-80">Satellite Imagery</span>
          </div>
          
          <div className="group flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-14 h-14 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="h-7 w-7 text-purple-400" />
            </div>
            <span className="text-sm font-semibold text-white mb-1">AI Recommendations</span>
            <span className="text-xs text-green-100 opacity-80">Smart Insights</span>
          </div>
          
          <div className="group flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-14 h-14 bg-orange-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="h-7 w-7 text-orange-400" />
            </div>
            <span className="text-sm font-semibold text-white mb-1">Predictive Alerts</span>
            <span className="text-xs text-green-100 opacity-80">Early Warning</span>
          </div>
        </div>
      </div>
    </section>
  );
}