import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily:{
                sans: ['Poppins', 'sans-serif']
            },
            colors: {
                grasshopperGreen: {
                    500: '#4ab93d',
                    700: '#37942b',
                    900: '#1f5d1a'
                },
                backgroundDark: {
                    500: '#00040e',
                }
            },
        },
    },
    plugins: [
        require('@windicss/plugin-scrollbar'),
    ],
})