let mix = require('laravel-mix');

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

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');


mix.scripts([
    'node_modules/video.js/dist/video.js',

    //Customized
    // 'resources/assets/js/vendors/function-admin.js',
    'resources/assets/js/vendors/function.js',
], 'public/js/page/plugins.js');