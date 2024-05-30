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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        'height-for-header': 'var(--header-height)',
        'screen-minus-header': 'calc(100vh - var(--header-height))',
      },
      colors: {
        'primary': {
          '50': '#fef1f7',
          '100': '#fee5f0',
          '200': '#fecce3',
          '300': '#ffa2cb',
          '400': '#fe68a7',
          '500': '#f83c86',
          '600': '#e91f64',
          '700': '#ca0c47',
          '800': '#a70d3b',
          '900': '#8b1034',
          '950': '#55021a',
        },
        'secondary': {
          '50': '#eefffa',
          '100': '#c6fff1',
          '200': '#8effe5',
          '300': '#3ffbd3',
          '400': '#18e9c2',
          '500': '#00ccab',
          '600': '#00a58d',
          '700': '#028372',
          '800': '#07685c',
          '900': '#0c554c',
          '950': '#003430',
      },
      },
    },
  },
  plugins: [],
};
export default config;
