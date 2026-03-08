# Atomity: Cloud Orchestration & Cost Visibility Dashboard

Atomity is a professional-grade cloud management platform designed to provide deep visibility into infrastructure costs and performance across multi-cloud and sovereign environments.

## 🚀 Features

### 1. Granular Cost Visibility (Chosen Feature)
I chose to implement the **Hierarchical Cloud Spend Analysis** because it addresses a critical pain point for modern enterprises: understanding exactly where their cloud budget is going.
- **Drill-Down Architecture**: Users can navigate from high-level Clusters down to Namespaces and individual Pods.
- **Real-Time Metrics**: Each resource card displays CPU, RAM, and Efficiency data.
- **Sovereign & Green Badges**: Visual indicators for compliance (Sovereign) and sustainability (Green) status.

### 2. Multi-Cloud Orchestration
A visual representation of resources across AWS, Azure, GCP, and On-Premise environments, showing how Atomity acts as the central brain for distributed fleets.

### 3. Automated Savings Insights
A dedicated section highlighting how the platform identifies idle resources and provides actionable recommendations for cost reduction.

---

## 🎨 Design & Animation

### Animation Approach
- **Library**: `motion/react` (formerly Framer Motion).
- **Techniques**:
  - **Staggered Entrances**: Used to create a "crafted" feel as the dashboard loads.
  - **Layout Transitions**: Smoothly transitioning between drill-down levels (Cluster -> Namespace -> Pod) using the `layout` prop.
  - **Viewport Triggers**: Animations only fire when elements enter the screen to maintain performance.
  - **Micro-interactions**: Subtle hover effects on cards and buttons to provide instant user feedback.

### Tokens & Styles
- **Tailwind CSS**: Used for all styling to ensure a consistent, utility-first approach.
- **CSS Variables**: Defined in `src/index.css` to manage a semantic color palette (e.g., `--color-bg-primary`, `--color-text-muted`).
- **Responsive Design**: Mobile-first approach with specific optimizations for ultra-wide desktop monitors.

---

## 🛠️ Technical Implementation

### Data Fetching & Caching
- **TanStack React Query**: Used for managing server state.
- **Caching Strategy**: Implemented a 5-minute stale-time for cloud metrics to reduce unnecessary API calls while keeping data fresh.
- **Drill-Down State**: Managed via a custom state object that tracks the current navigation level and associated IDs.

### Libraries Used
- **Lucide React**: For a consistent and crisp icon set.
- **clsx & tailwind-merge**: For safe and dynamic CSS class manipulation.
- **Motion/React**: For high-performance, declarative animations.

---

## ⚖️ Tradeoffs & Decisions
- **Mock Data**: I used a combination of hardcoded data (based on the provided design images) and a dummy API client. This ensures the dashboard is fully interactive and visually accurate for the demo without requiring a live cloud connection.
- **Custom Charts**: Instead of a heavy charting library, I built the resource usage bars and the multi-cloud distribution chart using pure Tailwind and SVG. This reduced the bundle size and allowed for much tighter integration with the app's aesthetic.

---

## 🔮 Future Improvements
- **Real-Time Sync**: Integration with WebSockets for live resource monitoring.
- **Advanced Visualizations**: Implementing Sankey diagrams to visualize cost flow from cloud providers to specific business units.
- **Predictive Analytics**: Using AI to forecast future spend based on historical growth patterns.

---

## 💻 Getting Started

### Prerequisites
- **Node.js**: v18 or higher
- **npm**: v9 or higher

### Setup Instructions
1. **Clone the repository** (if applicable)
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```

### Commands
| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the Vite development server on port 3000 |
| `npm run build` | Compiles the application for production |
| `npm run lint` | Runs ESLint and TypeScript checks |
| `npm run preview` | Previews the production build locally |
