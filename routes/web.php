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
    'uses' => 'HomeController@home2',
    'as' => 'home_path',
]);

//Route::get('/home', [
//    'uses' => 'HomeController@home2',
//    'as' => 'home2_path',
//]);

Route::get('/pacotes-de-viagem', [
    'uses' => 'HomeController@package',
    'as' => 'package_show_path',
]);
Route::get('/pacotes-de-viagem/{title}', [
    'uses' => 'HomeController@show',
    'as' => 'home_show_path',
]);
Route::get('/destino', [
    'uses' => 'HomeController@destinations',
    'as' => 'destinations_show_path',
]);
Route::get('/destino/{destinations}', [
    'uses' => 'HomeController@destinations_show',
    'as' => 'destinations_show',
]);
Route::get('/a-empresa', [
    'uses' => 'HomeController@about',
    'as' => 'about_show_path',
]);
Route::get('/dicas', [
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