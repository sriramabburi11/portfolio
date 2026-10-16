import plugin from 'tailwindcss/plugin';

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
          700: '#1D4ED8',
        },
        signal: {
          amber: '#E0A63B',
          green: '#3BC08A',
        },
        light: {
          bg: '#FAFAFC',
          surface: '#FFFFFF',
          'surface-subtle': '#F4F5F7',
          border: '#E2E8F0',
          'border-subtle': '#F1F5F9',
          'border-hover': '#CBD5E1',
          text: {
            primary: '#0F172A',
            secondary: '#1E293B',
            body: '#475569',
            muted: '#64748B',
            subtle: '#94A3B8',
          },
          accent: {
            DEFAULT: '#4F46E5',
            hover: '#4338CA',
            subtle: '#EEF2FF',
            border: '#E0E7FF',
          },
          success: {
            text: '#15803D',
            bg: '#ECFDF5',
            border: '#A7F3D0',
          },
          amber: {
            text: '#B45309',
            bg: '#FFFBEB',
            border: '#FDE68A',
          },
          error: {
            text: '#B91C1C',
            bg: '#FEF2F2',
            border: '#FECACA',
          },
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
        'grid-fade-light':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(79,70,229,0.06), transparent 70%)',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        card: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 8px 24px -12px rgba(0,0,0,0.5)',
        'card-light': '0 1px 3px 0 rgba(15,23,42,0.04), 0 1px 2px -1px rgba(15,23,42,0.02)',
        'card-light-hover': '0 12px 28px -4px rgba(15,23,42,0.07), 0 4px 10px -2px rgba(15,23,42,0.03)',
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
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('light', 'html.light &');
    }),
  ],
};
