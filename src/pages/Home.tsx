import { FeatureSection, OverviewSection, MultiCloudSection, SavingsSection } from "../components/feature/FeatureSection";
import { RotatingCube } from "../components/feature/RotatingCube";
import { Marquee } from "../components/feature/Marquee";
import { motion } from "motion/react";
import { BarChart3 } from "lucide-react";

export const Home = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] transition-colors duration-300">
      {/* Top Marquee */}
      <Marquee />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-[25vw] font-black text-[var(--color-text-primary)] tracking-tighter leading-none select-none"
          >
            ATOMITY
          </motion.h1>
        </div>

        <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <p className="text-[var(--color-text-primary)] font-bold text-lg md:text-xl max-w-xs leading-relaxed">
              ATOMITY is a compliance-first cloud orchestrator that routes enterprise workloads dynamically to the most cost-efficient, sovereign, and low-carbon clouds.
            </p>
          </motion.div>

          {/* Center Cube */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring" }}
            >
              <RotatingCube />
            </motion.div>
          </div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-right flex flex-col items-end"
          >
            <p className="text-[var(--color-text-primary)] font-bold text-lg md:text-xl max-w-xs leading-tight uppercase tracking-tighter">
              Cloud Intelligence For Sovereign and Sustainable AI Workloads
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-20"
      >
        <OverviewSection />
      </motion.div>

      {/* Feature Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-20"
      >
        <FeatureSection />
      </motion.div>

      {/* Multi-Cloud Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-20"
      >
        <MultiCloudSection />
      </motion.div>

      {/* Savings Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-20"
      >
        <SavingsSection />
      </motion.div>

      {/* Alignment Section */}
      <motion.section 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 relative z-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 uppercase tracking-widest text-[var(--color-text-primary)]">Performance</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6 max-w-xs">
                Orchestrate workloads for maximum speed and reliability. Ensure low-latency delivery across sovereign regions.
              </p>
              <div className="w-full h-1 bg-emerald-500/20 rounded-full mb-8" />
              <div className="bg-emerald-500 text-white px-8 py-2 rounded-lg font-bold uppercase tracking-widest">Engineering</div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <div className="text-3xl font-bold text-white">$</div>
              </div>
              <h3 className="text-2xl font-bold mb-2 uppercase tracking-widest text-[var(--color-text-primary)]">Spending</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6 max-w-xs">
                Track every cent with real-time cost mapping. Eliminate cloud waste and maximize your infrastructure ROI.
              </p>
              <div className="w-full h-1 bg-emerald-500/20 rounded-full mb-8" />
              <div className="bg-emerald-500 text-white px-8 py-2 rounded-lg font-bold uppercase tracking-widest">Finance</div>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="h-px w-full max-w-4xl bg-dashed border-t-2 border-dashed border-emerald-500/30" />
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-32 px-4 text-center relative z-20"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
           <img src="/logo.png" alt="Atomity Logo" className="w-28 h-28 object-contain" />
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[var(--color-text-primary)]">kubecost</h2>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold mb-8 text-[var(--color-text-primary)]">
            Install in <span className="text-emerald-500">5 minutes</span> and start saving today!
          </h3>
          <a href="https://github.com/kubecost/kubecost" className="text-4xl md:text-6xl font-black text-emerald-500 hover:opacity-80 transition-opacity">
            atomity.com
          </a>
        </div>
      </motion.section>
    </div>
  );
};
