<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DevController;
use App\Http\Controllers\PostController;

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
Route::get('ui/badges', [DevController::class, 'badges']);
Route::get('ui/dropdown', [DevController::class, 'dropdown']);

Route::get('/posts', [PostController::class, 'index'])->name('posts.index');
Route::get('/posts/items', [PostController::class, 'items'])->name('posts.items');
Route::get('/posts/{post}', [PostController::class, 'show'])->name('posts.show');
Route::put('/posts/{post}', [PostController::class, 'update'])->name('posts.update');
