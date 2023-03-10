<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('BlockSix/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $tasks = $request->all();

        $validated_slots = $request->validate([
            'slot1' => 'required|string|min:1',
            'slot2' => 'required|string|min:1',
            'slot3' => 'required|string|min:1',
            'slot4' => 'required|string|min:1',
            'slot5' => 'required|string|min:1',
            'slot6' => 'required|string|min:1',
        ]);

        // after validation passes put a task into the database.
        foreach($validated_slots as $validated_slot) {
            Task::create([
                'user_id' => auth()->user()->id,
                'keyword' => explode('::', $validated_slot)[0],
                'description' => explode('::', $validated_slot)[1]
            ]);
        }

        // redirect to the index page.
        return Redirect::route('dashboard');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $target_task = Task::where('id', $id)->first();

        return Inertia::render('BlockSix/Show', [
            'target_task' => $target_task
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
