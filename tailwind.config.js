/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070B14',
          900: '#0B1120',
          800: '#111A2E',
          700: '#16213A',
          600: '#1E2B47',
          500: '#2A3B5C',
        },
        ink: {
          50: '#F5F7FB',
          100: '#E7ECF5',
          300: '#AAB6CC',
          400: '#7C8AA8',
          500: '#5B6A88',
        },
        accent: {
          400: '#5B8DEF',
          500: '#3B6FE0',
          600: '#2F5AC2',
        },
        signal: {
          amber: '#E0A63B',
          green: '#3BC08A',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(59,111,224,0.06), transparent 60%)',
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 8px 24px -12px rgba(0,0,0,0.5)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        fadeUp: 'fadeUp 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};
