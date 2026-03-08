import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { FeatureCard } from "./FeatureCard";
import { useStats } from "../../../hooks/useStats";
import { DrillDownState, CloudMetric } from "../../../types/stats";
import { Button } from "../../ui/Button";
import { ChevronLeft, Loader2, AlertCircle, TrendingUp, Globe, Zap, Shield } from "lucide-react";
import { formatCurrency } from "../../../lib/utils";
import { Card } from "../../ui/Card";

export const FeatureSection = () => {
  const [drillDown, setDrillDown] = useState<DrillDownState>({ level: 'cluster' });
  
  const currentId = drillDown.level === 'cluster' ? undefined : 
                   drillDown.level === 'namespace' ? drillDown.clusterId : 
                   drillDown.namespaceId;

  const { data: metrics, isLoading, error } = useStats(drillDown.level, currentId);

  const handleDrillDown = (item: CloudMetric) => {
    if (drillDown.level === 'cluster') {
      setDrillDown({ level: 'namespace', clusterId: item.id });
    } else if (drillDown.level === 'namespace') {
      setDrillDown({ level: 'pod', clusterId: drillDown.clusterId, namespaceId: item.id });
    }
  };

  const handleBack = () => {
    if (drillDown.level === 'pod') {
      setDrillDown({ level: 'namespace', clusterId: drillDown.clusterId });
    } else if (drillDown.level === 'namespace') {
      setDrillDown({ level: 'cluster' });
    }
  };

  const breadcrumbs = useMemo(() => {
    const parts = ['All Clusters'];
    if (drillDown.clusterId) parts.push(`Cluster ${drillDown.clusterId.split('-')[1]}`);
    if (drillDown.namespaceId) parts.push(`Namespace ${drillDown.namespaceId.split('-')[1]}`);
    return parts.join(' / ');
  }, [drillDown]);

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionHeader 
        badge="Cost Visibility"
        title="Granular Cloud Spend Analysis"
        subtitle="Drill down from high-level clusters to individual pods. Gain instant visibility into where your budget is going with real-time resource mapping."
      />

      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {drillDown.level !== 'cluster' && (
              <Button variant="ghost" size="sm" onClick={handleBack} className="gap-2">
                <ChevronLeft className="w-4 h-4" /> Back
              </Button>
            )}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] rounded-md shadow-sm">
              <span className="text-xs font-bold text-[var(--color-text-secondary)]">Last 30 Days</span>
            </div>
            <span className="text-sm font-medium text-[var(--color-text-muted)] hidden sm:inline">
              {breadcrumbs}
            </span>
          </div>
          
          <motion.div 
            layoutId="agg-badge"
            className="flex flex-col items-start md:items-end"
          >
            <div className="bg-emerald-500 text-white px-6 py-2 rounded-lg text-sm font-bold shadow-lg shadow-emerald-500/20 flex flex-col items-start">
              <span className="capitalize">{drillDown.level}</span>
              <span className="text-[10px] opacity-70 font-normal">Aggregated by:</span>
            </div>
          </motion.div>
        </div>

        <div className="min-h-[400px] relative bg-[var(--color-bg-tertiary)]/20 rounded-3xl p-8 border border-dashed border-[var(--color-border-subtle)]">
          {/* Grid Lines Background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Loader2 className="w-8 h-8 animate-spin text-[var(--color-accent-primary)]" />
              </motion.div>
            ) : error ? (
              <motion.div
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
              >
                <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Failed to load data</h3>
                <p className="text-[var(--color-text-secondary)] mb-4">There was an error fetching the cloud metrics. Please try again.</p>
                <Button onClick={() => window.location.reload()}>Retry</Button>
              </motion.div>
            ) : (
              <motion.div
                key={drillDown.level + (currentId || '')}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {metrics?.map((metric, idx) => (
                  <FeatureCard
                    key={`${drillDown.level}-${metric.id}`}
                    metric={metric}
                    index={idx}
                    onClick={() => handleDrillDown(metric)}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {!isLoading && !error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ImpactCard 
                icon={<TrendingUp className="w-5 h-5 text-emerald-500" />}
                label="Spend Optimized"
                value="$500M+"
                description="Total cloud budget managed and optimized by Atomity."
              />
              <ImpactCard 
                icon={<Zap className="w-5 h-5 text-blue-500" />}
                label="Avg. Savings"
                value="42%"
                description="Average cost reduction achieved across enterprise fleets."
              />
              <ImpactCard 
                icon={<Globe className="w-5 h-5 text-purple-500" />}
                label="Global Reach"
                value="12k+"
                description="Clusters orchestrated across 45+ sovereign regions."
              />
              <ImpactCard 
                icon={<Shield className="w-5 h-5 text-orange-500" />}
                label="Compliance"
                value="100%"
                description="Sovereign data residency and local regulation adherence."
              />
            </div>

            <Card className="mt-8 p-8 bg-emerald-500/5 border-emerald-500/20 overflow-hidden relative">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-xl">
                  <h3 className="text-2xl font-black text-[var(--color-text-primary)] mb-4">Scaling Sustainability</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    Atomity isn't just about cost. We've helped our partners offset over <span className="text-emerald-500 font-bold">250,000 tons of CO2</span> by dynamically shifting workloads to low-carbon intensity regions during peak renewable energy production.
                  </p>
                </div>
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-[var(--color-bg-primary)] bg-[var(--color-bg-tertiary)] flex items-center justify-center overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-[var(--color-bg-primary)] bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">
                    +2k
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  );
};

const ImpactCard = ({ icon, label, value, description }: { icon: React.ReactNode, label: string, value: string, description: string }) => (
  <Card className="p-6 hover:border-emerald-500/50 transition-colors group">
    <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-tertiary)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-muted)] mb-1">{label}</p>
    <h4 className="text-3xl font-black text-[var(--color-text-primary)] mb-2 tracking-tighter">{value}</h4>
    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{description}</p>
  </Card>
);
