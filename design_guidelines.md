# Agri-Minds Design Guidelines

## Design Approach
**Reference-Based Approach** - Drawing inspiration from modern agricultural tech platforms and productivity tools like Linear and Notion, combined with the clean data visualization patterns of monitoring dashboards.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Light Mode: Primary brand green (120 60% 35%), Secondary earth tone (30 40% 45%)
- Dark Mode: Primary green (120 50% 40%), Secondary warm gray (30 15% 20%)

**Accent Colors:**
- Warning amber (45 85% 55%) for alerts
- Success green (140 70% 45%) for healthy status
- Error red (0 70% 50%) for critical alerts

**Background Treatments:**
- Subtle gradient overlays from light green to warm earth tones
- Clean white/dark backgrounds with minimal texture
- Gentle gradients appropriate for hero sections and card highlights

### Typography
- **Primary:** Inter (Google Fonts) - Clean, readable for data
- **Secondary:** Plus Jakarta Sans (Google Fonts) - Friendly for headings
- Sizes: text-sm to text-4xl with consistent hierarchy

### Layout System
**Spacing:** Consistent use of Tailwind units 2, 4, 6, 8, 12, 16
- Components: p-4, m-6, gap-4
- Sections: py-12, px-8
- Cards: p-6, rounded-lg

### Component Library

#### Navigation
- Clean header with logo, main navigation, and user profile
- Sidebar navigation for dashboard with iconography
- Breadcrumb navigation for deep pages

#### Dashboard Cards
- Summary cards with large numbers, icons, and status indicators
- Color-coded backgrounds (green/yellow/red) for quick status recognition
- Hover effects with subtle shadows and border highlights

#### Data Visualization
- Interactive charts using earth-tone color schemes
- NDVI maps with smooth color gradients (red to green spectrum)
- Timeline visualizations for historical data
- Tooltip explanations for technical terms

#### Forms & Inputs
- Friendly placeholder text with agricultural emojis
- Clean, rounded input fields with focus states
- Validation messages in consistent color scheme

#### Alerts & Notifications
- Color-coded alert cards (green/amber/red)
- Toast notifications for real-time updates
- Banner alerts for critical farm conditions

### Animations
**Minimal Usage:**
- Subtle hover effects on interactive elements
- Smooth transitions for chart updates
- Loading states for API data fetching

## Images

### Hero Section
Large hero image featuring diverse smallholder farmers working in fields, positioned as background with gradient overlay from green to earth tones. The image should convey hope, technology integration, and agricultural success.

### Dashboard Icons
Use Heroicons for consistent iconography:
- 🌱 for crop health
- 💧 for irrigation
- 📊 for analytics
- 🌡️ for temperature
- 📍 for field location

### Feature Illustrations
Simple, clean illustrations showing:
- Satellite monitoring of fields
- Soil data visualization
- AI recommendation interface
- Mobile-friendly farming dashboard

The design should feel professional yet approachable, emphasizing the technology's ability to empower farmers while maintaining the natural, earth-connected aesthetic of agriculture.