import { motion } from "motion/react";

export const RotatingCube = () => {
  const faces = [
    {
      text: "SOVEREIGN CLOUD CONTROL",
      image: "https://picsum.photos/seed/tech1/800/800?grayscale&blur=1",
      rotation: "rotateY(0deg)",
    },
    {
      text: "AUTOMATED CLOUD COMPLIANCE",
      image: "https://picsum.photos/seed/tech2/800/800?grayscale&blur=1",
      rotation: "rotateY(90deg)",
    },
    {
      text: "CLOUD COST OPTIMIZATION",
      image: "https://picsum.photos/seed/tech3/800/800?grayscale&blur=1",
      rotation: "rotateY(180deg)",
    },
    {
      text: "CARBON-AWARE ORCHESTRATION",
      image: "https://picsum.photos/seed/tech4/800/800?grayscale&blur=1",
      rotation: "rotateY(270deg)",
    },
  ];

  return (
    <div className="perspective-2000 w-[300px] h-[300px] md:w-[450px] md:h-[450px] relative [--tz:150px] md:[--tz:225px]">
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {faces.map((face, i) => (
          <div
            key={i}
            className="absolute inset-0 border-2 border-emerald-500/80 overflow-hidden bg-[var(--color-bg-secondary)] flex items-center justify-center"
            style={{ 
              transform: `${face.rotation} translateZ(var(--tz))`,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src={face.image} 
                alt="" 
                className="w-full h-full object-cover opacity-10 dark:opacity-30"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-secondary)] via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 md:px-10">
              <h3 className="text-2xl md:text-4xl font-black text-[var(--color-text-primary)] leading-tight tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                {face.text}
              </h3>
            </div>

            {/* Tech Accents */}
            <div className="absolute inset-0 border-[1px] border-emerald-500/20 pointer-events-none" />
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-emerald-500/60" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-emerald-500/60" />
            
            {/* Scanning Line Effect */}
            <motion.div 
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-px bg-emerald-500/40 z-20 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
