/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {
            fontFamily: {
                primary: "Lato",
              },
        }
    },

    plugins: [require("@tailwindcss/typography")]
};