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
                ".correct": {
                    "@apply bg-green-50 border-green-400 text-green-700": {},
                },
                ".wrong": {
                    "@apply bg-red-50 border-red-400 text-red-700": {},
                },
            });
        },
    ],
};
