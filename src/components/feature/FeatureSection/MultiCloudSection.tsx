import { motion } from "motion/react";

export const MultiCloudSection = () => {
  const providers = [
    { 
      name: "AWS", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", 
      color: "text-slate-900",
      pos: { top: '10%', left: '10%' },
      resources: [
        { top: '40%', left: '60%', size: 'w-4 h-4' },
        { top: '60%', left: '70%', size: 'w-3 h-3' },
        { top: '75%', left: '55%', size: 'w-2 h-2' }
      ]
    },
    { 
      name: "Azure", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg", 
      color: "text-blue-600",
      pos: { top: '10%', right: '10%' },
      resources: [
        { top: '20%', left: '40%', size: 'w-5 h-5' },
        { top: '40%', left: '30%', size: 'w-4 h-4' },
        { top: '60%', left: '50%', size: 'w-4 h-4' },
        { top: '35%', left: '65%', size: 'w-3 h-3' }
      ]
    },
    { 
      name: "Google Cloud", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg", 
      color: "text-slate-600",
      pos: { bottom: '10%', left: '10%' },
      resources: [
        { top: '30%', left: '50%', size: 'w-6 h-6' },
        { top: '50%', left: '30%', size: 'w-4 h-4' },
        { top: '65%', left: '60%', size: 'w-4 h-4' },
        { top: '80%', left: '45%', size: 'w-3 h-3' },
        { top: '45%', left: '75%', size: 'w-4 h-4' }
      ]
    },
    { 
      name: "On-Premise", 
      logo: "", 
      color: "text-slate-900",
      pos: { bottom: '10%', right: '10%' },
      hasBox: true,
      resources: [
        { top: '45%', left: '35%', size: 'w-4 h-4' },
        { top: '50%', left: '65%', size: 'w-4 h-4' }
      ]
    }
  ];

  const metrics = [
    { label: "CPU", value: 85 },
    { label: "GPU", value: 30 },
    { label: "RAM", value: 65 },
    { label: "PV", value: 45 },
    { label: "Network", value: 55 },
    { label: "Cloud", value: 20 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 px-4 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto relative h-[700px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Central Chart */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-slate-900 border-2 border-emerald-300 rounded-[40px] p-10 w-[350px] md:w-[600px] shadow-xl"
          >
            <div className="flex items-end justify-between h-56 gap-4">
              {metrics.map((m, i) => (
                <div key={i} className="flex-1 h-full flex flex-col items-center gap-4">
                  <div className="flex-1 w-full relative">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${m.value}%` }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 1.2, 
                        delay: 0.3 + (i * 0.1), 
                        ease: "easeOut"
                      }}
                      className="absolute bottom-0 left-0 right-0 bg-[#6EE7B7] rounded-xl"
                    />
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight shrink-0">{m.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Provider Nodes */}
        {providers.map((p, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            className="absolute flex flex-col items-center gap-4"
            style={{ ...p.pos }}
          >
            <div className="relative group">
              {p.hasBox && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute inset-[-20px] bg-emerald-500/5 rounded-[40px] -z-10 border border-emerald-500/10" 
                />
              )}
              {/* Octagon Shape */}
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-40 h-40 bg-[var(--color-bg-secondary)] border-2 border-emerald-400/40 flex items-center justify-center relative shadow-xl group-hover:border-emerald-500 transition-colors" 
                style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
              >
                {/* Resource Hexagons */}
                {p.resources.map((res, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + (i * 0.1) + (idx * 0.05) }}
                    className={`absolute ${res.size} bg-[var(--color-bg-secondary)] border border-emerald-500/20 shadow-sm flex items-center justify-center`}
                    style={{ top: res.top, left: res.left, clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
                  >
                    <div className="w-[60%] h-[60%] bg-emerald-500 rounded-sm" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            <div className="flex flex-col items-center">
              {p.logo && (
                <motion.img 
                  whileHover={{ y: -5 }}
                  src={p.logo} 
                  alt={p.name} 
                  className="h-10 object-contain mb-2 transition-all" 
                  referrerPolicy="no-referrer" 
                />
              )}
              <span className="text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-widest">
                {p.name}
              </span>
            </div>
          </motion.div>
        ))}

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* AWS Line */}
          <motion.path
            d="M 250 150 L 400 300"
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
          />
          {/* Azure Line */}
          <motion.path
            d="M 1000 150 L 850 300"
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.3 }}
          />
          {/* GCP Line */}
          <motion.path
            d="M 250 550 L 400 400"
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.4 }}
          />
          {/* On-Prem Line */}
          <motion.path
            d="M 1000 550 L 850 400"
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
          />
        </svg>
      </motion.div>
    </section>
  );
};
