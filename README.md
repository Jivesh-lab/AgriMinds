# Agri-Minds - AI-Powered Crop Monitoring Platform

A modern, AI-powered agricultural monitoring platform designed for smallholder farmers. Monitor soil health, track crop vitality, and receive intelligent farming recommendations.

🚀 **Live Demo**: [Deploy to see your live demo URL]

## 📱 Features

- **Real-time Soil Monitoring**: Track moisture, pH, and temperature levels
- **NDVI Crop Health**: Satellite imagery analysis for vegetation health assessment
- **AI Recommendations**: Smart irrigation and fertilizer suggestions
- **Predictive Alerts**: Early warning system for crop stress and optimal actions
- **Field Management**: Organize and track multiple agricultural fields
- **Interactive Dashboard**: Comprehensive overview with beautiful charts and metrics

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: Radix UI, Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Routing**: Wouter
- **State Management**: React Hooks
- **Data**: Mock data for demonstration (no backend required)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Local Development

1. **Clone the repository**
```bash
git clone [your-repo-url]
cd AgriMinds-main
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 📦 Deployment Options

### Option 1: Vercel (Recommended) ⚡

1. **Push to GitHub**
   - Create a new repository on GitHub
   - Push your code to the repository

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project" 
   - Import your GitHub repository
   - Vercel will automatically detect the settings
   - Click "Deploy"
   - Your app will be live in minutes!

### Option 2: Netlify 🌐

1. **Method A: Drag & Drop**
   - Run `npm run build`
   - Go to [netlify.com](https://netlify.com)
   - Drag the `dist` folder to the deploy area
   - Your app is live instantly!

2. **Method B: Git Integration**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy automatically on every push

### Option 3: GitHub Pages 📄

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Enable GitHub Pages from the Actions tab

2. **Add GitHub Action** (create `.github/workflows/deploy.yml`)
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '18'
    - run: npm install
    - run: npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### Option 4: Surge.sh ⚡

```bash
# Install surge globally
npm install -g surge

# Build the project
npm run build

# Deploy
cd dist
surge
```

## 🎯 Demo Features

### User Authentication
- **Demo Login**: Use any email and password to access the dashboard
- **Mock Registration**: Create accounts with instant access

### Dashboard Sections
- **Overview**: Real-time soil metrics and trends
- **Crop Health**: NDVI analysis and vegetation monitoring
- **AI Insights**: Smart recommendations for farming actions
- **Fields**: Manage multiple agricultural fields
- **Alerts**: Monitoring alerts and notifications

### Sample Data
The application includes realistic mock data for:
- Soil moisture, pH, and temperature readings
- NDVI vegetation health indices
- Weather-based recommendations
- Field management data
- Alert notifications

## 🎨 Customization

### Adding Real Data Sources
To integrate with real sensors or APIs, modify the files in `client/src/lib/`:
- Replace mock data in `mockData.ts`
- Add API calls in new service files
- Update components to use real data

### Styling
- Tailwind CSS classes for styling
- Dark/light mode support included
- Responsive design for mobile devices

## 📂 Project Structure

```
AgriMinds-main/
├── client/src/
│   ├── components/          # React components
│   ├── pages/              # Page components
│   ├── lib/                # Utilities and mock data
│   └── hooks/              # Custom React hooks
├── package.json            # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS config
├── vercel.json           # Vercel deployment config
└── netlify.toml         # Netlify deployment config
```

## 🔧 Build Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Type Checking
npm run check        # TypeScript type checking
```

## 🌟 Demo Credentials

Use any valid email format and password to access the demo:
- **Email**: demo@agriminds.com
- **Password**: any password

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🚀 Live Deployment

Choose your preferred deployment method above and your Agri-Minds platform will be live and accessible to anyone on the internet within minutes!

---

Built with ❤️ for sustainable farming and agricultural innovation.