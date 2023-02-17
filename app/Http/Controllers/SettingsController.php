<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function index()
    {
        return Inertia::render('Settings/Index', [

        ]);
    }

    public function history()
    {
        return Inertia::render('Settings/History', [

        ]);
    }

    public function language()
    {
        return Inertia::render('Settings/Language', [

        ]);
    }
}
