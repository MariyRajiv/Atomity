import { motion } from "motion/react";
import { Card } from "../../ui/Card";
import { AnimatedMetric } from "./AnimatedMetric";

export const SavingsSection = () => {
  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold mb-6 text-[var(--color-text-primary)]">Automated Savings Insights</h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8">
              Atomity automatically identifies idle resources and misconfigured instances, providing actionable recommendations that can save your team thousands per month.
            </p>
            <div className="space-y-4">
              {[
                "Right-size cluster nodes",
                "Remedy abandoned workloads",
                "Reserve instances automatically"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-emerald-500/20">✓</div>
                  <span className="font-medium text-[var(--color-text-primary)]">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative perspective-1000"
          >
            <Card className="p-0 overflow-hidden border-2 border-emerald-500/30 shadow-2xl shadow-emerald-500/10 bg-[var(--color-bg-secondary)]">
              <div className="p-8 bg-emerald-500/5 border-b border-emerald-500/10 flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Estimated Monthly Savings</p>
                  <AnimatedMetric value={6013.76} className="text-4xl font-black text-emerald-600" />
                </div>
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-emerald-500/20"
                >
                  70% Saved
                </motion.div>
              </div>
              <div className="grid grid-cols-2 gap-px bg-[var(--color-border-subtle)]">
                <SavingsItem label="CPU Usage" value="63 M" delay={0.1} />
                <SavingsItem label="CPU Request" value="700 M" delay={0.2} />
                <SavingsItem label="Memory Usage" value="557 MiB" delay={0.3} />
                <SavingsItem label="Memory Request" value="5 GiB" delay={0.4} />
              </div>
            </Card>

            {/* Floating Badge */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 bg-[var(--color-bg-secondary)] p-5 rounded-2xl shadow-2xl border border-emerald-500/20 z-10"
            >
               <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-emerald-500/30">
                 $
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SavingsItem = ({ label, value, delay }: { label: string, value: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.6 + delay }}
    className="bg-[var(--color-bg-secondary)] p-6 hover:bg-emerald-500/5 transition-colors group cursor-default"
  >
    <p className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest mb-2 group-hover:text-emerald-500 transition-colors">{label}</p>
    <p className="text-xl font-bold text-[var(--color-text-primary)]">{value}</p>
  </motion.div>
);
