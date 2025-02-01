import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#111111',
        foreground: '#FFFFFF',

        accent: {
          DEFAULT: '#FFDD00',
          hover: '#FFB800',
        },
        neutral: {
          light: '#B3B3B3',
        },
        link: '#FACC15',
      },
    },
  },
  plugins: [],
} satisfies Config
