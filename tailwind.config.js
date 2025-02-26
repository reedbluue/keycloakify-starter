/** @type {import("tailwindcss").Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}", "node_modules/preline/dist/*.js"],
    theme: {
        extend: {
            fontFamily: {
                geist: ["Geist", "sans-serif"]
            }
        }
    },
    plugins: [require("@tailwindcss/forms"), require("preline/plugin")]
};
