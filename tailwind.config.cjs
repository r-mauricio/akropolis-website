/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./public/index.html",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	darkMode: "class",
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				redLogo: "#7c0002ff",
				lightLogo: "#9b7474ff",
				ice: "#f2f2f2ff",
				darkBlack: "#18191A",
				darkGray: "#242526",
				darkMediumGray: "#3A3B3C",
				darkLightGray: "#B0B3B8",
				darkIce: "#E4E6EB",
			},
			fontFamily: { roboto: ["Roboto", "sans-serif"] },
		},
	},
	plugins: [require("flowbite/plugin")],
};
