/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			montserrat: ["Montserrat", "sans-serif"],
			openSans: ["Open Sans", "sans-serif"],
		},
		extend: {
			colors: {
				"primary-brand": "#F3D6E0",
				"secondary-brand": "#12522D",
				"tertiary-brand": "#001F3F",
				"divider": "#12522D",
				"accent": "#9CA3AF",
				success: "#ED4B9E",
			},
			backgroundImage: {
				"landing-page": "url('./assets/landing-page.png')",
				"mb-landing-page": "url('./assets/mb-landing-page.png')",
				"customers-lg": "url('./src/assets/customers-bg.png')",
				"customers-sm": "url('./src/assets/customers-mobile.png')",
				"green-circles": "url('./src/assets/green-image.svg')",
			},
			boxShadow: {
				special:
					"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
			},
		},
	},
	plugins: [require("daisyui")],
};
