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
				'crimson': ['Crimson Text', 'serif'],
				'merriweather': ['Merriweather', 'serif'],
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
				// Enhanced organic nature-inspired color palette with better contrast
				moss: {
					50: '#f7f9f5',
					100: '#eef3ea',
					200: '#dde8d6',
					300: '#c5d4b8',
					400: '#a8bd95',
					500: '#6A994E', // Primary moss green
					600: '#5a8142',
					700: '#486636',
					800: '#3a522e',
					900: '#2f4427',
				},
				fern: {
					50: '#f3f6f4',
					100: '#e6ece8',
					200: '#cddad2',
					300: '#abb9b2',
					400: '#83958c',
					500: '#386641', // Primary fern
					600: '#2e5235',
					700: '#25412a',
					800: '#1f3423',
					900: '#1a2b1e',
				},
				forest: {
					50: '#f2f4f3',
					100: '#e4e9e6',
					200: '#cad3ce',
					300: '#a8b5ae',
					400: '#7f918a',
					500: '#5e7169',
					600: '#4a5a54',
					700: '#3d4946',
					800: '#333c3a',
					900: '#1B4332', // Deep forest green
				},
				ochre: {
					50: '#fdfcf9',
					100: '#f8f5ef',
					200: '#f0eadd',
					300: '#e5dcc5',
					400: '#d8c9a6',
					500: '#B5A36A', // Earthy ochre
					600: '#a38d5a',
					700: '#87734b',
					800: '#6e5e40',
					900: '#594f36',
				},
				teal: {
					50: '#f2fcfb',
					100: '#d6f6f3',
					200: '#afede8',
					300: '#7dddd9',
					400: '#4cc4c6',
					500: '#2A9D8F', // Ocean teal
					600: '#237f74',
					700: '#1f675f',
					800: '#1c524d',
					900: '#1a4440',
				},
				clay: {
					50: '#fefdfb',
					100: '#fcf9f4',
					200: '#f7f1e7',
					300: '#f0e5d4',
					400: '#e6d6bc',
					500: '#D9CBA3', // Soft clay
					600: '#c4b287',
					700: '#a8956a',
					800: '#8a7c58',
					900: '#70674a',
				},
				mist: {
					50: '#F0F7F4', // Mist white
					100: '#fbfcfb',
					200: '#f6f9f7',
					300: '#eff4f1',
					400: '#e4ebe7',
					500: '#d4ddd7',
					600: '#b8c4bc',
					700: '#93a498',
					800: '#6f817a',
					900: '#586862',
				},
				// Enhanced text colors for better contrast
				text: {
					dark: '#1a2e1a',
					primary: '#2d3e2d',
					secondary: '#4a5d4a',
					muted: '#6b7c6b',
					light: '#8b9c8b',
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
