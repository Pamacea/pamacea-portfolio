import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        
        // CUSTOMS
        "staticblack": {
          DEFAULT: "hsl(var(--staticblack))", 
          foreground: "hsl(var(--staticblack-foreground))",
        },
        "reversed": {
          DEFAULT: "hsl(var(--reversed))", 
          foreground: "hsl(var(--reversed-foreground))",
        },
        "whitetomidgray": {
          DEFAULT: "hsl(var(--whitetomidgray))", 
          foreground: "hsl(var(--whitetomidgray-foreground))", 
        },
        "bluetowhite": {
          DEFAULT: "hsl(var(--bluetowhite))", 
          foreground: "hsl(var(--bluetowhite-foreground))",
        },
        "bluetomidgray": {
          DEFAULT: "hsl(var(--bluetomidgray))", 
          foreground: "hsl(var(--bluetomidgray-foreground))",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
    fontFamily: {
      Tilt_Warp: "tiltwarp",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
