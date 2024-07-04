import type { Config } from 'tailwindcss'

const PALETTE_BLUE = {
  100: '#72DCFF',
  200: '#49C2FF',
  300: '#20A0FF',
  400: '#007aff',
  500: '#005BE9',
}

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      animation: {
        appear: 'appear-fadeIn .3s ease, appear-moveUp .3s ease',
      },

      keyframes: {
        'appear-fadeIn': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },

        'appear-moveUp': {
          from: { transform: 'translateY(15px)' },
          to: { transform: 'translateY(0px)' },
        },
      },

      colors: {
        blue: PALETTE_BLUE,
      },
    },
  },
}

export default config
