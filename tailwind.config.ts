
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
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'playfair': ['Playfair Display', 'serif'],
				'libre': ['Libre Baskerville', 'serif'],
				'poppins': ['Poppins', 'sans-serif'],
				'cinzel': ['Cinzel', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Unique organic nature-inspired color palette
				moss: {
					50: '#f4f7f1',
					100: '#e9f0e3',
					200: '#d3e2c8',
					300: '#b5cfa2',
					400: '#94b875',
					500: '#6A994E', // Primary moss green
					600: '#5a8142',
					700: '#486636',
					800: '#3a522e',
					900: '#2f4427',
				},
				fern: {
					50: '#f0f4f1',
					100: '#dce8df',
					200: '#b9d1c0',
					300: '#8fb49b',
					400: '#649374',
					500: '#386641', // Primary fern
					600: '#2e5235',
					700: '#25412a',
					800: '#1f3423',
					900: '#1a2b1e',
				},
				forest: {
					50: '#f0f2f1',
					100: '#dce5df',
					200: '#b9cbc0',
					300: '#8fa89b',
					400: '#628172',
					500: '#3e5f52',
					600: '#2f4c42',
					700: '#243c35',
					800: '#1e312b',
					900: '#1B4332', // Deep forest green
				},
				ochre: {
					50: '#faf9f6',
					100: '#f2f0ea',
					200: '#e6e1d4',
					300: '#d6cdb9',
					400: '#c4b695',
					500: '#B5A36A', // Earthy ochre
					600: '#a38d5a',
					700: '#87734b',
					800: '#6e5e40',
					900: '#594f36',
				},
				teal: {
					50: '#f0fdfb',
					100: '#ccfbf1',
					200: '#99f6e4',
					300: '#5eead4',
					400: '#2dd4bf',
					500: '#2A9D8F', // Ocean teal
					600: '#0f766e',
					700: '#0d5d56',
					800: '#134e4a',
					900: '#134e4a',
				},
				clay: {
					50: '#fdfcfa',
					100: '#f9f6f0',
					200: '#f2ede1',
					300: '#e8e0cf',
					400: '#ddd0b8',
					500: '#D9CBA3', // Soft clay
					600: '#c4b287',
					700: '#a8956a',
					800: '#8a7c58',
					900: '#70674a',
				},
				mist: {
					50: '#F0F7F4', // Mist white
					100: '#f8fbf9',
					200: '#f1f6f3',
					300: '#e8f1ec',
					400: '#dce8e1',
					500: '#c9d9d0',
					600: '#a7bfaf',
					700: '#7f9d8a',
					800: '#5f7a6a',
					900: '#4a6054',
				},
				cosmic: {
					50: '#faf7ff',
					100: '#f3efff',
					200: '#e9e2ff',
					300: '#d8c8ff',
					400: '#c0a1ff',
					500: '#a474ff',
					600: '#8b4cf7',
					700: '#7c3aed',
					800: '#6d28d9',
					900: '#581c87',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'globe-rotate': {
					'0%': { transform: 'rotateY(0deg)' },
					'100%': { transform: 'rotateY(360deg)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-15px)' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.1)' }
				},
				'stars-twinkle': {
					'0%, 100%': { opacity: '0.4' },
					'50%': { opacity: '1' }
				},
				'ripple': {
					'0%': { transform: 'scale(1)', opacity: '1' },
					'100%': { transform: 'scale(1.4)', opacity: '0' }
				},
				'breath': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'globe-rotate': 'globe-rotate 40s linear infinite',
				'float': 'float 4s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'stars-twinkle': 'stars-twinkle 5s ease-in-out infinite',
				'ripple': 'ripple 0.6s ease-out',
				'breath': 'breath 6s ease-in-out infinite'
			},
			backgroundImage: {
				'jungle-mist': 'radial-gradient(ellipse at center, #1B4332 0%, #386641 35%, #6A994E 70%, #2A9D8F 100%)',
				'aurora-organic': 'linear-gradient(135deg, #6A994E 0%, #2A9D8F 50%, #B5A36A 100%)',
				'forest-gradient': 'linear-gradient(135deg, #1B4332 0%, #386641 40%, #6A994E 80%, #2A9D8F 100%)',
				'ocean-gradient': 'linear-gradient(135deg, #2A9D8F 0%, #386641 50%, #6A994E 100%)',
				'earth-gradient': 'linear-gradient(135deg, #B5A36A 0%, #D9CBA3 50%, #F0F7F4 100%)',
				'savanna-gradient': 'linear-gradient(135deg, #B5A36A 0%, #D9CBA3 40%, #6A994E 100%)'
			},
			backdropBlur: {
				'xs': '2px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
