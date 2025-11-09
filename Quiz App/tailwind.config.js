/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "400px",
            },
        },
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                ".option": {
                    "@apply py-4 px-6 rounded-2xl border border-slate-300 font-bold cursor-pointer": {},
                },
                ".Correct": {
                    "@apply bg-green-400": {},
                },
                ".Wrong": {
                    "@apply bg-red-400": {},
                },
            });
        },
    ],
};
