import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#0A0A0A',
        foreground: '#FFFFFF',
        nexfab: {
          yellow: '#FFE81A',
          blue: '#0056B3',
          dark: '#0A0A0A',
          gray: '#1A1A1A',
          'gray-light': '#2A2A2A',
          'text-gray': '#888888'
        },
        superlens: {
          blue: '#0056b3',
          lightBlue: '#0ea5e9',
          darkBlue: '#001e3e',
          navy: '#001029',
          highlight: '#00c2ff',
          gray: '#f8f9fa',
          richBlue: '#002850',
          mutedBlue: '#e8f4fa',
          textBlue: '#0a2540'
        },
        primary: {
          DEFAULT: '#FFE81A',
          foreground: '#0A0A0A'
        },
        secondary: {
          DEFAULT: '#1A1A1A',
          foreground: '#FFFFFF'
        },
        muted: {
          DEFAULT: '#1A1A1A',
          foreground: '#888888'
        },
        accent: {
          DEFAULT: '#2A2A2A',
          foreground: '#FFFFFF'
        },
        card: {
          DEFAULT: '#1A1A1A',
          foreground: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 232, 26, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 232, 26, 0.8)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;