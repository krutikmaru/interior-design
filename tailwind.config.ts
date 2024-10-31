import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      maskImage: {
        "gradient-mask": "linear-gradient(black, transparent)",
      },
      boxShadow: {
        "2xl": "0 0px 25px 0px rgb(0 0 0 / 0.25)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "label-primary": "#CCCCCC",
        "border-primary": "#222222",
      },
    },
  },
  plugins: [],
};
export default config;
