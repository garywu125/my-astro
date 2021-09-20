module.exports = {
    mode: 'jit',
    purge: [
        './public/**/*.html', 
        './src/pages/*.{astro,js,ts}',
        './src/layouts/*.{astro,js,ts}',
        './src/components/*.{astro,js,ts}',
        ],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ]
};
