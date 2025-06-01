import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				'300': '#4A3A99',
  				'400': '#3A2C83',
  				'500': '#2A1D6E',
  				'600': '#211657',
  				'700': '#1B134E',
  				'800': '#161045',
  				'900': '#0F0A2B',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'300': '#7262E9',
  				'400': '#5C4CC6',
  				'500': '#4636A3',
  				'600': '#302080',
  				'700': '#2B1C77',
  				'800': '#24186A',
  				'900': '#1A1155',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			Background: {
  				Default: '#F9F9F9',
  				Light: '#F9F6FB',
  				Lilac: '#f3f0f9'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			display1: [
  				'56px',
  				{
  					lineHeight: '56px',
  					letterSpacing: '-2.24px',
  					fontWeight: 'bold'
  				}
  			],
  			display2: [
  				'46px',
  				{
  					lineHeight: '52px',
  					letterSpacing: '-0.92px',
  					fontWeight: 'bold'
  				}
  			],
  			display3: [
  				'30px',
  				{
  					lineHeight: '36px',
  					letterSpacing: '-0.6px',
  					fontWeight: 'bold'
  				}
  			],
  			title1: [
  				'24px',
  				{
  					lineHeight: '32px',
  					fontWeight: 'bold'
  				}
  			],
  			title2: [
  				'22px',
  				{
  					lineHeight: '30px',
  					fontWeight: 'bold'
  				}
  			],
  			title3: [
  				'20px',
  				{
  					lineHeight: '28px',
  					fontWeight: 'bold'
  				}
  			],
  			subtitle1: [
  				'20px',
  				{
  					lineHeight: '28px',
  					fontWeight: '400'
  				}
  			],
  			subtitle2: [
  				'16px',
  				{
  					lineHeight: '24px',
  					fontWeight: '400'
  				}
  			],
  			bodyBold: [
  				'14px',
  				{
  					lineHeight: '20px',
  					fontWeight: 'bold'
  				}
  			],
  			body: [
  				'14px',
  				{
  					lineHeight: '20px',
  					fontWeight: '400'
  				}
  			],
  			signal1: [
  				'14px',
  				{
  					lineHeight: '20px',
  					letterSpacing: '0.84px',
  					fontWeight: '400'
  				}
  			],
  			caption: [
  				'12px',
  				{
  					lineHeight: '20px',
  					fontWeight: '400'
  				}
  			],
  			signal2: [
  				'10px',
  				{
  					lineHeight: '12px',
  					letterSpacing: '0.5px',
  					fontWeight: '400'
  				}
  			],
  			signal3: [
  				'8px',
  				{
  					lineHeight: '8px',
  					letterSpacing: '0.5px',
  					fontWeight: '400'
  				}
  			]
  		},
  		screens: {
  			sm: '393px',
  			md: '768px',
  			lg: '1024px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
