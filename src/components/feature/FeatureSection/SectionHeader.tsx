import { motion } from "motion/react";
import { Badge } from "../../ui/Badge";
import { cn } from "../../../lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

export const SectionHeader = ({ title, subtitle, badge, className }: SectionHeaderProps) => {
  return (
    <div className={cn("mb-12", className)}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <Badge variant="success" className="mb-4 px-4 py-1.5 text-xs font-black uppercase tracking-widest">{badge}</Badge>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="text-4xl md:text-5xl font-black tracking-tighter text-[var(--color-text-primary)] mb-6"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-xl text-[var(--color-text-secondary)] max-w-3xl leading-relaxed text-balance"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
