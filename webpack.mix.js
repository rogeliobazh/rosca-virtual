let mix = require('laravel-mix');

var tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'assets/js')
    .sass('resources/sass/app.sass', 'assets/css')
    .options({
        processCssUrls: false,
        postCss: [
            tailwindcss('./tailwind.config.js'),
        ]
    })
    .webpackConfig({
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                "@": path.resolve(__dirname, "resources/js")
            }
        }
    });

if (mix.inProduction()) {
    mix.purgeCss({
        globs: [
            path.join(__dirname, '*.html'),
        ],
    });
}