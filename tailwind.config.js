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
				success: "#ED4B9E",
			},
			backgroundImage: {
				"landing-page": "url('./assets/landing-page.png')"
			}
		},
	},
	plugins: [],
};
