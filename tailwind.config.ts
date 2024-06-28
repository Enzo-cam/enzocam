import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{ts,jsx,tsx}',
    './components/**/*.{ts,jsx,tsx}',
    './app/**/*.{ts,jsx,tsx}',
    './src/**/*.{ts,jsx,tsx}',
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
        'grisAbout' : '#0F0702',
        'azulOsc' : '#1b263b',
      }
    },
  },
  plugins: [],
}
export default config
