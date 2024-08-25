/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                moviesection: ".7fr 1.5fr 1fr",
                moviesectionB: ".7fr 1.5fr",
                "casts-grid": "repeat(auto-fit, minmax(10rem, 1fr))",
                "similar-grid": "repeat(auto-fit, minmax(12rem, 1fr))",
                "trailers-grid": "repeat(auto-fit, minmax(17rem, 1fr))",
            },
            gridTemplateRows: {
                moviecast: "75% 25%",
            },
            colors: {
                primary: "#2ad883",
            },
        },
    },
    plugins: [],
};

