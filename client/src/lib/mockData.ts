// Mock data for the Agri-Minds application
export interface MockUser {
  name: string;
  email: string;
  avatar?: string;
}

export interface FieldData {
  id: string;
  name: string;
  cropType: string;
  area: number; // in hectares
  coordinates: string;
  status: 'active' | 'fallow' | 'harvested';
  plantingDate: string;
  expectedHarvest: string;
}

export interface SoilData {
  moisture: number; // percentage
  ph: number;
  temperature: number; // celsius
  nitrogen: number; // ppm
  phosphorus: number; // ppm
  potassium: number; // ppm
  timestamp: string;
}

export interface NDVIData {
  value: number; // 0-1 scale
  date: string;
  health: 'Poor' | 'Fair' | 'Good' | 'Excellent';
}

export interface AlertData {
  id: string;
  type: 'critical' | 'warning' | 'info' | 'success';
  title: string;
  message: string;
  timestamp: string;
  fieldName: string;
  actionRequired?: string;
}

// Mock user authentication
export const mockAuth = {
  login: async (email: string, password: string): Promise<MockUser> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email && password) {
      return {
        name: email.split('@')[0].replace(/[^a-zA-Z]/g, ' '),
        email: email,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
      };
    }
    throw new Error('Invalid credentials');
  },

  register: async (data: { name: string; email: string; password: string }): Promise<MockUser> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      name: data.name,
      email: data.email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.email}`
    };
  }
};

// Mock field data
export const mockFields: FieldData[] = [
  {
    id: '1',
    name: 'North Field',
    cropType: 'Wheat',
    area: 2.5,
    coordinates: '40.7128, -74.0060',
    status: 'active',
    plantingDate: '2024-03-15',
    expectedHarvest: '2024-08-20'
  },
  {
    id: '2',
    name: 'South Field',
    cropType: 'Corn',
    area: 3.2,
    coordinates: '40.7589, -73.9851',
    status: 'active',
    plantingDate: '2024-04-01',
    expectedHarvest: '2024-09-15'
  },
  {
    id: '3',
    name: 'East Field',
    cropType: 'Soybeans',
    area: 1.8,
    coordinates: '40.7282, -73.7949',
    status: 'active',
    plantingDate: '2024-05-10',
    expectedHarvest: '2024-10-05'
  }
];

// Generate mock soil data for the last 7 days
export const generateMockSoilData = (): SoilData[] => {
  const data: SoilData[] = [];
  const now = new Date();
  
  for (let i = 6; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    data.push({
      moisture: Math.random() * 40 + 30, // 30-70%
      ph: Math.random() * 2 + 6, // 6-8
      temperature: Math.random() * 10 + 20, // 20-30°C
      nitrogen: Math.random() * 50 + 100, // 100-150 ppm
      phosphorus: Math.random() * 30 + 20, // 20-50 ppm
      potassium: Math.random() * 80 + 120, // 120-200 ppm
      timestamp: date.toISOString()
    });
  }
  
  return data;
};

// Generate mock NDVI data for the last 30 days
export const generateMockNDVIData = (): NDVIData[] => {
  const data: NDVIData[] = [];
  const now = new Date();
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    const value = Math.random() * 0.4 + 0.4; // 0.4-0.8 NDVI
    let health: 'Poor' | 'Fair' | 'Good' | 'Excellent';
    
    if (value < 0.5) health = 'Poor';
    else if (value < 0.6) health = 'Fair';
    else if (value < 0.7) health = 'Good';
    else health = 'Excellent';
    
    data.push({
      value,
      date: date.toISOString().split('T')[0],
      health
    });
  }
  
  return data;
};

// Mock alerts
export const mockAlerts: AlertData[] = [
  {
    id: '1',
    type: 'warning',
    title: 'Low Soil Moisture',
    message: 'North Field moisture levels are below optimal range. Consider irrigation.',
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
    fieldName: 'North Field',
    actionRequired: 'Schedule Irrigation'
  },
  {
    id: '2',
    type: 'info',
    title: 'Weather Update',
    message: 'Rain expected in the next 48 hours. Adjust irrigation schedule accordingly.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    fieldName: 'South Field',
    actionRequired: 'Adjust Schedule'
  },
  {
    id: '3',
    type: 'critical',
    title: 'Sensor Offline',
    message: 'East Field sensor #3 has been offline for 6 hours. Check connection.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(), // 6 hours ago
    fieldName: 'East Field',
    actionRequired: 'Check Connection'
  }
];

// Mock AI recommendations
export const mockAIRecommendations = [
  {
    id: '1',
    type: 'irrigation' as const,
    title: 'Irrigation Optimization',
    description: 'Based on soil moisture and weather forecast, reduce irrigation by 15% this week.',
    confidence: 92,
    expectedImpact: 'Save 500L water, maintain crop health',
    priority: 'medium' as const,
    timeframe: 'Next 3 days',
    impact: 'Save 500L water, maintain crop health',
    actions: ['Apply 25mm of water to North Field', 'Schedule early morning irrigation', 'Monitor soil moisture daily']
  },
  {
    id: '2',
    type: 'fertilizer' as const,
    title: 'Nitrogen Application',
    description: 'Apply nitrogen fertilizer to South Field. Optimal timing is in 2-3 days.',
    confidence: 87,
    expectedImpact: 'Increase yield by 8-12%',
    priority: 'high' as const,
    timeframe: 'Next 2-3 days',
    impact: 'Increase yield by 8-12%',
    actions: ['Apply 150kg/ha nitrogen fertilizer', 'Water immediately after application', 'Monitor plant response']
  },
  {
    id: '3',
    type: 'pest_control' as const,
    title: 'Pest Monitoring',
    description: 'Aphid activity detected in corn fields. Monitor closely over next 5 days.',
    confidence: 75,
    expectedImpact: 'Prevent potential 5-10% yield loss',
    priority: 'medium' as const,
    timeframe: 'Next 5 days',
    impact: 'Prevent potential 5-10% yield loss',
    actions: ['Inspect corn plants daily', 'Apply organic pesticide if needed', 'Monitor beneficial insect populations']
  }
];