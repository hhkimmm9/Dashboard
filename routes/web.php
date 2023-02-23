<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ModulesController;
use App\Http\Controllers\SettingsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/modules/blocksix', [ModulesController::class, 'blocksix'])->name('modules.blocksix');
    Route::get('/modules/calendar', [ModulesController::class, 'calendar'])->name('modules.calendar');
    Route::get('/modules/tetris', [ModulesController::class, 'tetris'])->name('modules.tetris');


    Route::get('/modules/schedule', [ScheduleController::class, 'index'])->name('schedule.index');
    Route::get('/settings', [SettingsController::class, 'index'])->name('settings.index');
    Route::get('/settings/history', [SettingsController::class, 'history'])->name('settings.history');
    Route::get('/settings/language', [SettingsController::class, 'language'])->name('settings.language');
});

require __DIR__.'/auth.php';
