<?php

use Inertia\Inertia;
use Illuminate\Console\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\TaskController;
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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/modules/blocksix', [TaskController::class, 'index'])->name('blocksix.index');
    Route::get('/modules/blocksix/create', [TaskController::class, 'create'])->name('blocksix.create');
    Route::post('/modules/blocksix', [TaskController::class, 'store'])->name('blocksix.store');
    Route::post('/modules/blocksix/{id}', [TaskController::class, 'show'])->name('blocksix.show');
    Route::patch('/modules/blocksix/{id}', [TaskController::class, 'update'])->name('blocksix.update');

    Route::get('/settings', [SettingsController::class, 'index'])->name('settings.index');
    Route::get('/settings/history', [SettingsController::class, 'history'])->name('settings.history');
    Route::get('/settings/language', [SettingsController::class, 'language'])->name('settings.language');
});

require __DIR__.'/auth.php';
