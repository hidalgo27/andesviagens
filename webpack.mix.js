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
    'resources/assets/js/vendors/popper.min.js',
    'resources/assets/js/vendors/bootstrap.min.js',
    'resources/assets/js/vendors/jquery-ui.js',
    // 'node_modules/video.js/dist/video.js',
    'resources/assets/js/vendors/viedolightbox/video.js',
    //Customized
    // 'resources/assets/js/vendors/function-admin.js',
    'node_modules/owl.carousel/dist/owl.carousel.js',
    'resources/assets/js/vendors/function.js',
], 'public/js/page/plugins.js');

