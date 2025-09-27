import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import AuthForm from "@/components/AuthForm";
import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";

interface User {
  name: string;
  email: string;
  avatar?: string;
}

export default function Home() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [showAuth, setShowAuth] = useState(false);

  const handleLogin = (email: string, password: string) => {
    // todo: remove mock authentication
    console.log('Login attempt:', { email, password });
    
    // Mock successful login
    setUser({
      name: email.split('@')[0].replace(/[^a-zA-Z]/g, ' '),
      email: email,
    });
    setShowAuth(false);
  };

  const handleRegister = (data: any) => {
    // todo: remove mock authentication  
    console.log('Register attempt:', data);
    
    // Mock successful registration
    setUser({
      name: data.name,
      email: data.email,
    });
    setShowAuth(false);
  };

  const handleLogout = () => {
    setUser(undefined);
    setShowAuth(false);
    console.log('User logged out');
  };

  const handleGetStarted = () => {
    if (user) {
      // User is already logged in, scroll to dashboard
      document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setShowAuth(true);
    }
  };

  const handleViewDashboard = () => {
    if (user) {
      document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setShowAuth(true);
    }
  };

  if (showAuth && !user) {
    return (
      <AuthForm 
        onLogin={handleLogin}
        onRegister={handleRegister}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        user={user}
        notifications={user ? 3 : 0}
        onLogout={handleLogout}
      />
      
      <main>
        {/* Hero Section */}
        <section id="hero">
          <HeroSection 
            onGetStarted={handleGetStarted}
            onViewDashboard={handleViewDashboard}
          />
        </section>

        {/* Dashboard Section (only show if user is logged in) */}
        {user && (
          <section id="dashboard" className="pt-16">
            <Dashboard />
          </section>
        )}

        {/* Features Section (show when not logged in) */}
        {!user && (
          <section className="py-24 px-6 bg-muted/30">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold font-serif mb-4">
                  Powerful Features for Modern Farming
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Everything you need to monitor, analyze, and optimize your crop production
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-blue-500/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-600 text-2xl">💧</div>
                  </div>
                  <h3 className="font-semibold mb-2">Real-time Soil Data</h3>
                  <p className="text-sm text-muted-foreground">
                    Monitor moisture, pH, and temperature in real-time
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-green-500/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-green-600 text-2xl">🌱</div>
                  </div>
                  <h3 className="font-semibold mb-2">NDVI Crop Health</h3>
                  <p className="text-sm text-muted-foreground">
                    Satellite imagery analysis for vegetation health
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-purple-500/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-purple-600 text-2xl">🤖</div>
                  </div>
                  <h3 className="font-semibold mb-2">AI Recommendations</h3>
                  <p className="text-sm text-muted-foreground">
                    Smart irrigation and fertilizer suggestions
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-orange-500/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-orange-600 text-2xl">⚠️</div>
                  </div>
                  <h3 className="font-semibold mb-2">Predictive Alerts</h3>
                  <p className="text-sm text-muted-foreground">
                    Early warning system for crop stress
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <button
                  onClick={handleGetStarted}
                  className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  data-testid="button-features-get-started"
                >
                  Start Monitoring Your Crops
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="bg-muted/50 py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <div className="bg-primary w-6 h-6 rounded flex items-center justify-center">
                    <span className="text-white text-sm">🌱</span>
                  </div>
                  Agri-Minds
                </h3>
                <p className="text-sm text-muted-foreground">
                  Empowering smallholder farmers with AI-powered crop monitoring
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Platform</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground">Dashboard</a></li>
                  <li><a href="#" className="hover:text-foreground">Field Management</a></li>
                  <li><a href="#" className="hover:text-foreground">Reports</a></li>
                  <li><a href="#" className="hover:text-foreground">API</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Support</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground">Help Center</a></li>
                  <li><a href="#" className="hover:text-foreground">Contact Us</a></li>
                  <li><a href="#" className="hover:text-foreground">Community</a></li>
                  <li><a href="#" className="hover:text-foreground">Training</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground">About</a></li>
                  <li><a href="#" className="hover:text-foreground">Blog</a></li>
                  <li><a href="#" className="hover:text-foreground">Careers</a></li>
                  <li><a href="#" className="hover:text-foreground">Privacy</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2024 Agri-Minds. All rights reserved. Built for sustainable farming.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}