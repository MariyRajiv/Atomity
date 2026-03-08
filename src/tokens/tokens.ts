export const tokens = {
  colors: {
    bg: {
      primary: "var(--color-bg-primary)",
      secondary: "var(--color-bg-secondary)",
      tertiary: "var(--color-bg-tertiary)",
    },
    text: {
      primary: "var(--color-text-primary)",
      secondary: "var(--color-text-secondary)",
      muted: "var(--color-text-muted)",
      inverse: "var(--color-text-inverse)",
    },
    accent: {
      primary: "var(--color-accent-primary)",
      primaryMuted: "var(--color-accent-primary-muted)",
      success: "var(--color-accent-success)",
      error: "var(--color-accent-error)",
    },
    border: {
      subtle: "var(--color-border-subtle)",
      strong: "var(--color-border-strong)",
    }
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
  },
  radius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },
  shadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  }
} as const;
