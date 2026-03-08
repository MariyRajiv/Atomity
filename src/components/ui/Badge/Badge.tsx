import React from "react";
import { cn } from "../../../lib/utils";

export interface BadgeProps extends React.ComponentPropsWithoutRef<'span'> {
  variant?: 'success' | 'error' | 'warning' | 'info' | 'neutral';
  className?: string;
  children?: React.ReactNode;
}

export const Badge = ({ className, variant = 'neutral', children, ...props }: BadgeProps) => {
  const variants = {
    success: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    error: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    warning: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    info: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    neutral: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-[var(--radius-full)] text-[10px] font-semibold uppercase tracking-wider",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
