import React from "react";
import { motion } from "motion/react";
import { cn } from "../../../lib/utils";
import { Card } from "../../ui/Card";
import { AnimatedMetric } from "./AnimatedMetric";
import { CloudMetric } from "../../../types/stats";
import { formatCurrency } from "../../../lib/utils";
import { Cpu, Database, Activity, ShieldCheck, Leaf } from "lucide-react";

interface FeatureCardProps {
  metric: CloudMetric;
  onClick: () => void;
  isSelected?: boolean;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ metric, onClick, isSelected, index }) => {
  // Determine some "Atomity" status based on the metric ID or efficiency
  const isSovereign = parseInt(metric.id.split('-')[1]) % 2 === 0;
  const isGreen = metric.efficiency > 75;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className="flex flex-col h-full"
    >
      <Card
        onClick={onClick}
        hoverable
        className={cn(
          "flex-1 p-6 flex flex-col relative overflow-hidden border-2 transition-all duration-300",
          isSelected ? "border-emerald-500 ring-2 ring-emerald-500/20" : "border-[var(--color-border-subtle)]"
        )}
      >
        {/* Header: Name and Status Badges */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-[var(--color-text-muted)] mb-1">
              {metric.name}
            </h4>
            <div className="flex gap-2">
              {isSovereign && (
                <div className="flex items-center gap-1 text-[10px] font-bold text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3" />
                  SOVEREIGN
                </div>
              )}
              {isGreen && (
                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  <Leaf className="w-3 h-3" />
                  GREEN
                </div>
              )}
            </div>
          </div>
          <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-emerald-500" />
          </div>
        </div>

        {/* Main Metric: Cost */}
        <div className="mb-6">
          <p className="text-xs font-bold text-[var(--color-text-muted)] uppercase mb-1">Monthly Cost</p>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black text-[var(--color-text-primary)] tracking-tighter">
              <AnimatedMetric value={metric.total} />
            </span>
            <span className="text-sm font-bold text-[var(--color-text-muted)]">USD</span>
          </div>
        </div>

        {/* Resource Usage Bars */}
        <div className="space-y-4 mt-auto">
          <ResourceBar 
            label="CPU" 
            value={metric.cpu} 
            max={metric.total * 0.6} 
            icon={<Cpu className="w-3 h-3" />}
            color="bg-emerald-500"
          />
          <ResourceBar 
            label="RAM" 
            value={metric.ram} 
            max={metric.total * 0.4} 
            icon={<Database className="w-3 h-3" />}
            color="bg-blue-500"
          />
        </div>

        {/* Efficiency Indicator */}
        <div className="mt-6 pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
          <span className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase">Efficiency</span>
          <div className="flex items-center gap-2">
            <div className="w-24 h-1.5 bg-[var(--color-bg-tertiary)] rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${metric.efficiency}%` }}
                className="h-full bg-emerald-500"
              />
            </div>
            <span className="text-xs font-black text-emerald-500">{metric.efficiency}%</span>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
      </Card>
    </motion.div>
  );
};

const ResourceBar = ({ label, value, max, icon, color }: { label: string, value: number, max: number, icon: React.ReactNode, color: string }) => (
  <div className="space-y-1.5">
    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
      <div className="flex items-center gap-1.5 text-[var(--color-text-secondary)]">
        {icon}
        <span>{label}</span>
      </div>
      <span className="text-[var(--color-text-primary)]">{formatCurrency(value)}</span>
    </div>
    <div className="h-1 w-full bg-[var(--color-bg-tertiary)] rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${Math.min((value / max) * 100, 100)}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={cn("h-full rounded-full", color)}
      />
    </div>
  </div>
);
