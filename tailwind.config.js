/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",],
    theme: {
        extend: {},
        fontFamily: {
            'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        },
        listStyleType: {
            square: 'square',
        }
    },
    plugins: [],
}

