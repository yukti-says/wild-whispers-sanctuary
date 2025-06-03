
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
				// Nature-inspired color palette
				forest: {
					50: '#f0f9f0',
					100: '#dcf2dc',
					200: '#bce5bc',
					300: '#8dd18d',
					400: '#5cb85c',
					500: '#3d8b3d',
					600: '#2d6e2d',
					700: '#255525',
					800: '#1f431f',
					900: '#1a381a',
				},
				ocean: {
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
				},
				earth: {
					50: '#faf8f3',
					100: '#f4f0e6',
					200: '#e8ddc7',
					300: '#d8c7a1',
					400: '#c8b079',
					500: '#b8995a',
					600: '#a8844e',
					700: '#8b6d42',
					800: '#6f5939',
					900: '#5a4830',
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
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
					'50%': { opacity: '0.8', transform: 'scale(1.05)' }
				},
				'stars-twinkle': {
					'0%, 100%': { opacity: '0.3' },
					'50%': { opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'globe-rotate': 'globe-rotate 30s linear infinite',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'stars-twinkle': 'stars-twinkle 4s ease-in-out infinite'
			},
			backgroundImage: {
				'cosmic-gradient': 'radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 35%, #0f0f23 100%)',
				'aurora-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				'forest-gradient': 'linear-gradient(135deg, #2d5016 0%, #3d8b3d  50%, #5cb85c 100%)',
				'ocean-gradient': 'linear-gradient(135deg, #0c4a6e 0%, #0284c7 50%, #38bdf8 100%)',
				'earth-gradient': 'linear-gradient(135deg, #5a4830 0%, #8b6d42 50%, #c8b079 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
