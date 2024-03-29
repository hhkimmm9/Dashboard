<?php

use Inertia\Inertia;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\DashboardController;

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

Route::get('/', function () {
    return Inertia::render('Static/AboutMyself'); 
});

Route::get('about-this-website', function () {
    return Inertia::render('Static/AboutThisWebsite'); 
});

Route::get('welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('try-chat-gpt', function () {
    return Inertia::render('Guest/TryChatGPT');
});

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('blocksix', TaskController::class);

    Route::resource('comment', CommentController::class);
    
    Route::resource('notes', NoteController::class);

    Route::get('/settings', [SettingsController::class, 'index'])->name('settings.index');
    Route::get('/settings/history', [SettingsController::class, 'history'])->name('settings.history');
    Route::get('/settings/language', [SettingsController::class, 'language'])->name('settings.language');
});

require __DIR__.'/auth.php';
