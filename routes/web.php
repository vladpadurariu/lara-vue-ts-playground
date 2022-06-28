<?php

use App\Actions\RenderCard;
use App\Actions\RenderCreateCard;
use App\Actions\RenderLanguages;
use App\Actions\SaveCard;
use Illuminate\Support\Facades\Route;

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

Route::get('/', RenderLanguages::class)->name('languages.list');
Route::get('/cards/create/{id}', RenderCreateCard::class)->name('cards.create');
Route::get('/cards/{card}', RenderCard::class)->name('cards.view');
Route::post('/cards', SaveCard::class)->name('cards.create.post');
