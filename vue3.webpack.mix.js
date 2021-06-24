const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/js/vue3/app.ts', 'public/js/vue3').vue();

mix.postCss('resources/css/app.css', 'public/css/vue3', [
    tailwindcss('./tailwind.config.js'),
]);
