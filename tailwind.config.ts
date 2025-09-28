import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Portfolio Theme Colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "secondary-bg": "hsl(var(--secondary-bg))",
        "card-bg": "hsl(var(--card-bg))",
        "text-secondary": "hsl(var(--text-secondary))",
        "border-color": "hsl(var(--border-color))",
        
        // Component Colors
        "nav-active": "hsl(var(--nav-active))",
        "nav-active-text": "hsl(var(--nav-active-text))",
        "button-primary": "hsl(var(--button-primary))",
        "button-primary-text": "hsl(var(--button-primary-text))",
        
        // Original shadcn colors for compatibility
        border: "hsl(var(--border-color))",
        input: "hsl(var(--border-color))",
        ring: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--button-primary))",
          foreground: "hsl(var(--button-primary-text))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary-bg))",
          foreground: "hsl(var(--foreground))",
        },
        destructive: {
          DEFAULT: "0 84.2% 60.2%",
          foreground: "hsl(var(--foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--card-bg))",
          foreground: "hsl(var(--text-secondary))",
        },
        accent: {
          DEFAULT: "hsl(var(--card-bg))",
          foreground: "hsl(var(--foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--card-bg))",
          foreground: "hsl(var(--foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card-bg))",
          foreground: "hsl(var(--foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-card': 'var(--gradient-card)',
        'gradient-hover': 'var(--gradient-hover)',
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'glow': 'var(--shadow-glow)',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
