<div align="center">

<table border="0" cellspacing="0" cellpadding="0">
<tr>
<td>
<img src="./public/logo.png" width="60">
</td>
<td style="vertical-align: middle; padding-left:0px;">

<h2>kubecost</h2>

</td>
</tr>
</table>

</div>

# Atomity: The Sovereign Cloud Orchestration & Cost Visibility Engine

Atomity is a high-performance, professional-grade cloud management platform designed for modern enterprises that demand **sovereignty**, **efficiency**, and **absolute visibility** across their distributed infrastructure.

In an era of fragmented cloud environments, Atomity acts as the "Central Brain," unifying AWS, Azure, Google Cloud, and On-Premise resources into a single, actionable dashboard.

---

## 🚀 Core Features & Capabilities

### 1. Hierarchical Cloud Spend Analysis (Drill-Down Explorer)
The centerpiece of the Atomity experience is our granular cost visibility engine. We've moved beyond flat tables to a hierarchical navigation system:
- **Cluster Level**: High-level overview of infrastructure health and total spend.
- **Namespace Level**: Logical grouping by business unit, project, or environment (Dev/Prod).
- **Pod/Resource Level**: Individual resource metrics including CPU usage, RAM allocation, and real-time efficiency scores.
- **Visual Badges**: 
  - 🛡️ **Sovereign**: Indicates data residency and compliance status.
  - 🌿 **Green**: Highlights resources running on sustainable energy or optimized for low carbon footprint.

### 2. Multi-Cloud Orchestration Visualization
Atomity provides a unified view of your global fleet. Our orchestration map visualizes:
- **Provider Distribution**: Real-time balance between major cloud providers.
- **Connectivity Status**: Health checks across distributed regions.
- **Unified Control**: A single pane of glass that abstracts away provider-specific complexities.

### 3. Automated Savings & Optimization Insights
Our platform doesn't just show you data; it provides intelligence:
- **Idle Resource Detection**: Automatically identifies underutilized instances.
- **Right-Sizing Recommendations**: Suggests optimal instance types based on historical performance.
- **Potential Savings**: Real-time calculation of monthly budget recovery.

---

## 🎨 Design Philosophy & UX

### Crafted Animations
We use `motion/react` to ensure the interface feels alive and responsive:
- **Staggered Entrances**: Dashboard elements "slam in" with a professional rhythm, guiding the user's eye.
- **Layout Transitions**: When drilling down into namespaces, the UI smoothly reconfigures itself using shared element transitions.
- **Micro-interactions**: Every button and card has subtle haptic-like visual feedback.

### Theming & Accessibility
- **Dynamic Theme Engine**: Seamless switching between **Light** and **Dark** modes via CSS variables.
- **High Contrast**: Designed for readability in mission-control environments.
- **Responsive Navigation**: A custom-built mobile menu ensures full functionality on tablets and smartphones.

---

## 🛠️ Technical Architecture

### Modern Tech Stack
- **Framework**: [React 19](https://react.dev/) for the latest in concurrent rendering.
- **Build Tool**: [Vite 6](https://vite.dev/) for lightning-fast development and optimized production bundles.
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with a custom design system defined in `src/index.css`.
- **State Management**: [TanStack React Query](https://tanstack.com/query/latest) for robust server-state synchronization and caching.
- **Icons**: [Lucide React](https://lucide.dev/) for a consistent, lightweight SVG icon set.

### Directory Structure
```text
/src
├── app/            # Global providers (Theme, QueryClient, Router)
├── components/     # Reusable UI components
│   ├── feature/    # Feature-specific components (CostVisibility, Savings)
│   └── ui/         # Atomic UI elements (Buttons, Cards, Badges)
├── hooks/          # Custom React hooks for logic reuse
├── lib/            # Utility libraries and configurations
├── pages/          # Main page views (Home, Solutions, Pricing)
├── services/       # Mock API services and data providers
├── tokens/         # Design tokens and theme definitions
└── types/          # TypeScript interfaces and enums
```

---

## 🧩 Component Breakdown

### Core UI Components (`/src/components/ui`)
- **Button**: A multi-variant button component supporting ghost, outline, and primary styles with built-in loading states.
- **Card**: The foundational container for all dashboard elements, featuring subtle borders and hover elevations.
- **Badge**: Used for status indicators (Sovereign, Green, Active, Warning).
- **ScrollToTop**: A utility component that ensures page transitions always start from the top.

### Feature Components (`/src/components/feature`)
- **CostExplorer**: The main drill-down interface that manages the transition between Cluster, Namespace, and Pod views.
- **MetricsGrid**: A responsive grid that displays key performance indicators (KPIs) with animated value counters.
- **SavingsPanel**: A specialized view that aggregates optimization recommendations and calculates total potential ROI.

---

## 💾 State Management & Data Flow

### Server State (React Query)
We use TanStack React Query to handle all asynchronous data fetching. This provides:
- **Automatic Retries**: Robust handling of intermittent network issues.
- **Polling**: Metrics are automatically refreshed in the background to ensure data accuracy.
- **Prefetching**: When a user hovers over a cluster, we prefetch the namespace data to ensure an instant transition.

### Local UI State
- **Navigation State**: Tracks the user's current position in the hierarchical explorer.
- **Theme State**: Persisted in `localStorage` to ensure the user's preference is remembered across sessions.
- **Mobile Menu State**: Manages the visibility of the responsive navigation overlay.

---

## 🎨 Design System & Tokens

Atomity uses a semantic design system powered by CSS variables. This allows for rapid white-labeling and consistent theming.

### Key Tokens
- `--color-bg-primary`: The main background color for the application.
- `--color-bg-secondary`: Used for cards, sidebars, and elevated elements.
- `--color-accent-primary`: The primary brand color used for actions and highlights.
- `--color-text-primary`: High-contrast text for maximum readability.
- `--color-text-muted`: Low-contrast text for secondary information.

### Responsive Breakpoints
- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`
- **Desktop**: `1024px - 1536px`
- **Ultra-Wide**: `> 1536px` (Optimized for large monitoring displays)

---

## ⚖️ Engineering Decisions & Tradeoffs

- **Mock Data Layer**: To provide a fully interactive experience without requiring live cloud credentials, we implemented a sophisticated mock service layer. This allows for realistic drill-down behavior and data persistence within the session.
- **Zero-Dependency Charts**: Instead of importing heavy charting libraries like D3 or Recharts for simple metrics, we built custom, lightweight progress bars and radial charts using Tailwind utility classes. This keeps the application fast and the bundle size minimal.
- **CSS-First Theming**: By using standard CSS variables (`--color-bg-primary`, etc.), we avoid the runtime overhead of CSS-in-JS while maintaining full dynamic control over the aesthetic.

---

## 🛡️ Security & Compliance

- **Sovereign Cloud Ready**: Built with data residency in mind. The UI explicitly flags resources that meet sovereign compliance standards.
- **Sanitized Inputs**: All user-provided data is sanitized to prevent XSS attacks.
- **Secure Headers**: The production build is optimized to work with strict Content Security Policies (CSP).

---

## 🚀 Performance Optimization

We strive for a 100/100 Lighthouse score. Key optimizations include:
- **Code Splitting**: Routes are lazily loaded to minimize the initial bundle size.
- **Asset Optimization**: SVG icons are used instead of heavy icon fonts.
- **Memoization**: Heavy computations and expensive renders are wrapped in `useMemo` and `memo`.
- **Tree Shaking**: The build process automatically removes unused code from dependencies.

---

## 🌐 Browser Support

Atomity is designed to work on all modern browsers:
- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions
- *Note: Internet Explorer is not supported.*

---

## 🛠️ Troubleshooting

### Common Issues
- **Theme not persisting**: Ensure that `localStorage` is enabled in your browser settings.
- **Metrics not loading**: Check your internet connection. If the issue persists, the mock API might be experiencing high latency (simulated).
- **Layout issues on Mobile**: Ensure you are using a modern mobile browser. Some older versions of Android Chrome may have issues with CSS Grid.

### Debug Mode
To enable debug logging, set the following in your browser console:
```javascript
localStorage.setItem('debug', 'atomity:*');
location.reload();
```

---

## 📂 Project Structure Deep Dive

### `/src/app`
Contains the core application setup, including the main `App.tsx` component, routing configuration, and global context providers for theming and data fetching.

### `/src/components`
Divided into `ui` (atomic components) and `feature` (complex, domain-specific components). This separation ensures that UI elements remain reusable across different features.

### `/src/hooks`
Houses custom React hooks that encapsulate complex logic, such as window resizing, theme management, and data fetching wrappers.

### `/src/lib`
Contains third-party library configurations, utility functions (like `cn` for class merging), and constant definitions.

### `/src/pages`
The top-level components rendered by the router. Each page represents a major view in the application (e.g., Home, Solutions, Pricing).

### `/src/services`
The data access layer. This is where API calls are defined. In this project, it contains the mock data generators and service classes.

---

## 🔮 Roadmap: The Future of Atomity

1. **AI-Powered Forecasting**: Predictive models to estimate next-quarter spend based on current growth.
2. **Real-Time WebSocket Sync**: Live updates for CPU/RAM spikes across the global fleet.
3. **Sovereignty Guardrails**: Automated blocking of resource creation in non-compliant regions.
4. **Terraform Integration**: Exporting optimization recommendations directly as Infrastructure-as-Code.
5. **Multi-Tenant Support**: Allowing service providers to manage multiple client organizations from a single instance.

---

## 💻 Development & Deployment

### Prerequisites
- **Node.js**: v18+
- **npm**: v9+

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/atomity/dashboard.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file (see `.env.example` for required variables).

### Available Scripts
| Command | Action |
|---------|--------|
| `npm run dev` | Launch the development server on `localhost:3000` |
| `npm run build` | Generate a production-ready build in `/dist` |
| `npm run lint` | Run TypeScript type checking and linting |
| `npm run preview` | Locally preview the production build |
| `npm run clean` | Remove build artifacts and temporary files |

---

## 🤝 Contributing

We welcome contributions to Atomity! To get started:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/amazing-feature`.
3. Commit your changes: `git commit -m 'Add some amazing feature'`.
4. Push to the branch: `git push origin feature/amazing-feature`.
5. Open a Pull Request.

### Coding Standards
- Use functional components and hooks.
- Follow the established Tailwind utility patterns.
- Ensure all new components are fully typed with TypeScript.

---

