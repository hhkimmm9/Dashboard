<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Task;
use App\Models\Note;

class DashboardController extends Controller
{
    public function index()
    {
        $today = now()->format('Y-m-d');

        $todays_tasks = Task::query()
            ->where('user_id', auth()->user()->id)
            ->whereDate('created_at', $today)
            ->whereNull('parent_id')
            ->latest()->paginate(6);

        $recently_updated_notes = Note::query()
            ->where('user_id', auth()->user()->id)
            ->where('is_folder', false)
            ->latest()->limit(5)->get();

        return Inertia::render('Dashboard', [
            'todays_tasks' => $todays_tasks,
            'recently_updated_notes' => $recently_updated_notes
        ]);
    }
}
