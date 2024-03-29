import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'bgWhite' : '#ffffff',
        'bgWhiteGris' : '#fdfffc',
        'grisOsc' : '#212529',
        'grisAbout' : '#343a40',
        'azulOsc' : '#1b263b',
      }
    },
  },
  plugins: [],
}
export default config
