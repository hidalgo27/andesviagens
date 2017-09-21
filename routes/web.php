<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});

Route::get('/', [
    'uses' => 'HomeController@index',
    'as' => 'home_path',
]);
Route::get('/packages', [
    'uses' => 'HomeController@package',
    'as' => 'package_show_path',
]);
Route::get('/packages/{title}', [
    'uses' => 'HomeController@show',
    'as' => 'home_show_path',
]);
Route::get('/destinations', [
    'uses' => 'HomeController@destinations',
    'as' => 'destinations_show_path',
]);
Route::get('/destinations/{destinations}', [
    'uses' => 'HomeController@destinations_show',
    'as' => 'destinations_show',
]);
Route::get('/about', [
    'uses' => 'HomeController@about',
    'as' => 'about_show_path',
]);
Route::get('/faq', [
    'uses' => 'HomeController@faq',
    'as' => 'faq_show_path',
]);

//form
Route::post('/contact', [
    'uses' => 'HomeController@contact',
    'as' => 'contact_path',
]);
Route::post('/inquire', [
    'uses' => 'HomeController@inquire',
    'as' => 'inquire_path',
]);