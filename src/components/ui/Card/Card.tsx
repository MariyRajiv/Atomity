import React from "react";
import { cn } from "../../../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, padding = 'md', hoverable = false, ...props }, ref) => {
    const paddings = {
      none: "p-0",
      sm: "p-3",
      md: "p-6",
      lg: "p-8",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] transition-all duration-300",
          paddings[padding],
          hoverable && "hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 hover:border-emerald-500/30",
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";
