<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Inertia\Inertia;
use App\Models\Comment;
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
        $user_id = auth()->user()->id;

        // TODO: with comments
        // https://laravel.com/docs/10.x/pagination#paginating-query-builder-results
        $tasks = Task::where('user_id', $user_id)->latest()->paginate(6);

        return Inertia::render('BlockSix/Index', [
            'tasks' => $tasks
        ]);
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
        return Inertia::render('BlockSix/Show', [
            'target_task' => Task::where('id', $id)->first(),
            'subtasks' => Task::where('parent_id', $id)->get(),
            'comments' => Comment::where('task_id', $id)->get()
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
        return Inertia::render('BlockSix/Edit', [
            'target_task' => Task::where('id', $id)->first()
        ]);
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
        // update is_completed only
        if ($request['is_completed']) {
            $new_value = $request['is_completed'];
    
            $target_task = Task::find($id)->update(['is_completed' => $new_value]);
        }
        // update the whole task
        else {
            $validated = $request->validate([
                'keyword' => 'alpha_num|min:1',
                'description' => 'alpha_num|min:1'
            ]);

            Task::where('id', $id)->update([
                'keyword' => $validated['keyword'],
                'description' => $validated['description']
            ]);
        }
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
