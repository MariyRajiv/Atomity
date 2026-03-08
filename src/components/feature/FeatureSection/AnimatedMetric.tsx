import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "motion/react";
import { formatCurrency, formatNumber } from "../../../lib/utils";

interface AnimatedMetricProps {
  value: number;
  type?: 'currency' | 'number';
  className?: string;
}

export const AnimatedMetric = ({ value, type = 'currency', className }: AnimatedMetricProps) => {
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  const display = useTransform(spring, (current) => {
    return type === 'currency' ? formatCurrency(current) : formatNumber(current);
  });

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return (
    <motion.span className={className}>
      {display}
    </motion.span>
  );
};
