<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Inertia\Inertia;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Tasks
        $todays_tasks = Task::where('created_at', 'like', date('Y-m-d'). '%')->get();

        return Inertia::render('Dashboard', [
            'todays_tasks' => $todays_tasks,
        ]);
    }
}
