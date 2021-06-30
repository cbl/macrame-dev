<?php

use App\Http\Controllers\DevController;
use App\Http\Controllers\PostController;
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

Route::get('ui/buttons', [DevController::class, 'buttons']);
Route::get('ui/card', [DevController::class, 'card']);
Route::get('ui/badges', [DevController::class, 'badges']);
Route::get('ui/dropdown', [DevController::class, 'dropdown']);
Route::get('ui/sidebar', [DevController::class, 'sidebar']);
Route::get('ui/toggle', [DevController::class, 'toggle']);
Route::get('ui/radio-group', [DevController::class, 'radioGroup']);
Route::get('ui/checkbox', [DevController::class, 'checkbox']);
Route::get('ui/checkbox-group', [DevController::class, 'checkboxGroup']);

Route::get('/posts', [PostController::class, 'index'])->name('posts.index');
Route::get('/posts/items', [PostController::class, 'items'])->name('posts.items');
Route::get('/posts/{post}', [PostController::class, 'show'])->name('posts.show');
Route::put('/posts/{post}', [PostController::class, 'update'])->name('posts.update');
