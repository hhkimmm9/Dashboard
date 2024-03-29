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

        $tasks = Task::query()
            ->where('user_id', $user_id)
            ->whereNull('parent_id')
            ->latest()->paginate(6);
            
        $subtasks = [];
        foreach($subtasks as $key=>$subtask) {
            if (isset($task->subtasks)) {
                $subtasks[$key] = $task->subtasks;
            }
        }

        $comments = [];
        foreach($tasks as $key=>$task) {
            if (isset($task->comments)) {
                $comments[$key] = $task->comments;
            }
        }

        // TODO: OPT
        return Inertia::render('BlockSix/Index', [
            'tasks' => $tasks,
            'subtasks' => $subtasks,
            'comments' => $comments,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $today = now()->format('Y-m-d');
        $existTodaysTasks = Task::query()
            ->where('user_id', auth()->user()->id)
            ->whereDate('created_at', $today)
            ->whereNull('parent_id')
            ->get();

        return Inertia::render('BlockSix/Create', [
            'existTodaysTasks' => isset($existTodaysTasks)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request['type'] == 'task') {
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
        else if ($request['type'] == 'subtask') {
            $validated = $request->validate([
                'description' => 'required|string|min:1',
                'parent_id' => 'required|numeric',
            ]);

            Task::create([
                'user_id' => auth()->user()->id,
                'description' => $validated['description'],
                'parent_id' => $validated['parent_id'],
            ]);

            return redirect("blocksix/{$validated['parent_id']}");
        }
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // update is_completed only
        if (isset($request['is_completed'])) {
            $target = Task::where('id', $id);
            $parent_id = $target->first()['parent_id'];

            $target->update(
                $request->validate(['is_completed' => 'boolean'])
            );

            if (isset($parent_id)) {
                return redirect("blocksix/{$parent_id}");
            }
            else {
                return redirect("blocksix");
            }
        }
        // update the whole task
        else if (isset($request['keyword']) && isset($request['description'])) {
            $validated = $request->validate([
                'keyword' => 'string|min:1',
                'description' => 'string|min:1'
            ]);

            Task::where('id', $id)->update([
                'keyword' => $validated['keyword'],
                'description' => $validated['description']
            ]);

            return redirect("blocksix/{$id}");
        }
        // update a subtask
        else if (isset($request['updatedDescription'])) {
            $validated = $request->validate([
                'updatedDescription' => 'string|min:1'
            ]);

            $updated_task = Task::where('id', $id)->update([
                'description' => $validated['updatedDescription']
            ]);

            return redirect("blocksix/{$updated_task}");
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
        // TODO: validation?
        $target = Task::where('id', $id)->first();

        $parent_id = $target['parent_id'];
        
        $target->delete();

        return redirect("blocksix/{$parent_id}");
    }
}
