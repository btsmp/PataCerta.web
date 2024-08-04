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
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#8A2BE2', // Azul Violeta
          secondary: '#FF1493', // Rosa Deep Pink
          accent: '#00CED1', // Turquesa
          neutral: '#F0F8FF', // Alice Blue
          'base-100': '#FFFFFF', // Branco
          info: '#7B68EE', // Azul Médio Slate
          success: '#32CD32', // Verde Lima
          warning: '#FFD700', // Dourado
          error: '#FF6347', // Tomate
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
export default config
