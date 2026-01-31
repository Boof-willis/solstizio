/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#050505',
          panel: '#0A0A0A',
          border: 'rgba(255, 255, 255, 0.1)',
          cream: '#F2F0EB',
          gold: '#8A9A7B',
          muted: '#737373',
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
      }
    }
  },
  plugins: [],
}

