/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./components/**/*.tsx', './pages/**/*.tsx', './pages/**/*.js', './components/**/*.mdx', './pages/**/*.mdx'],
    theme: {
        extend: {
            fontFamily: {
                title: ['var(--font-title)'],
            },
            colors: {
                "purple": {
                    50: "#F1EFF6",
                    100: "#E0DBEB",
                    200: "#C3BBD8",
                    300: "#A497C4",
                    400: "#8573B0",
                    500: "#685596",
                    600: "#524275",
                    700: "#392E51",
                    800: "#201A2E",
                    900: "#100D17",
                    950: "#09070D"
                },
                "tomato": "#F3614Aff",
                "school-bus-yellow": "#F9DD27ff",
                "steel-blue": "#4D86BCff",
                "marian-blue": "#403D97ff",
                "red-munsell": {
                    50: "#FDECF0",
                    100: "#FCDAE1",
                    200: "#F8AFBF",
                    300: "#F48AA1",
                    400: "#F16583",
                    500: "#EE3F65",
                    600: "#EA1643",
                    DEFAULT: "#EA1643",
                    700: "#B21033",
                    800: "#750B22",
                    900: "#3D0511",
                    950: "#1C0308"
                }
            },
            spacing: {
                28: '7rem',
            },
            letterSpacing: {
                tighter: '-.04em',
            },
            lineHeight: {
                tight: 1.2,
            },
            fontSize: {
                '5xl': '2.5rem',
                '6xl': '2.75rem',
                '7xl': '4.5rem',
                '8xl': '6.25rem',
            },
            boxShadow: {
                sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
                md: '0 8px 30px rgba(0, 0, 0, 0.12)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
