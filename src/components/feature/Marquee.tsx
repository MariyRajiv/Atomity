import { motion } from "motion/react";

export const Marquee = () => {
  const items = [
    "Multi-Cloud Orchestration & Governance",
    "Effortless Remediation",
    "Serverless Architecture Deployment",
    "Customized Analytics",
    "Workflow Enablement",
    "Finops At Scale",
    "Anomaly Detection",
    "Cloud-Native Kubernetes Optimization",
  ];

  return (
    <div className="w-full overflow-hidden bg-[var(--color-bg-secondary)] py-2 border-b border-[var(--color-border-subtle)]">
      <motion.div
        className="flex whitespace-nowrap gap-8"
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-secondary)]">
            <span className="text-emerald-500">✦</span>
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
