/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,tsx}"], theme: {
        extend: {
            colors: {
                'textColor': 'rgb(221 221 221)', 'backgroundColor': '#282a36', 'navColor': '#374151'
            }
        },
    }, plugins: [],
}
