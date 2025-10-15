<?php

use App\Http\Controllers\Api\GoogleBookController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\BookGroupController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Landing');
})->name('landing');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

Route::resource('books', BookController::class)->middleware('auth');
Route::resource('book-groups', BookGroupController::class)->middleware('auth');
Route::delete('book-groups', [BookGroupController::class, 'add'])->name('book-groups.add');

//api
Route::get('/google-search', [GoogleBookController::class, 'search'])->name('google.search');
