<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ModulesController extends Controller
{

    public function blocksix()
    {
        return Inertia::render('BlockSix/Index', [

        ]);
    }

    public function calendar()
    {
        return Inertia::render('Calendar/Index', [

        ]);
    }

    public function tetris()
    {
        return Inertia::render('Tetris/Index', [

        ]);
    }

    
}
