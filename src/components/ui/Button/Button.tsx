import React from "react";
import { cn } from "../../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, ...props }, ref) => {
    const variants = {
      primary: "bg-[var(--color-accent-primary)] text-[var(--color-text-inverse)] hover:opacity-90",
      secondary: "bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)] hover:bg-[var(--color-border-subtle)]",
      ghost: "bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]",
      outline: "bg-transparent border border-[var(--color-border-strong)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    };

    const classes = cn(
      "inline-flex items-center justify-center rounded-[var(--radius-md)] font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/20",
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      return (
        <a
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
