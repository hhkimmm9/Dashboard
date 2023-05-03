<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Inertia\Inertia;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $notes = Note::query()
            ->where('user_id', auth()->user()->id)
            ->where('is_folder', 0)
            // ->whereNot('deleted_at')
            ->get();

        $folders = Note::query()
            ->where('user_id', auth()->user()->id)
            ->where('is_folder', 1)
            ->get();

        $deleted_notes = Note::query()
            ->where('user_id', auth()->user()->id)
            ->onlyTrashed()
            ->get();

        return Inertia::render('Note/Index', [
            'notes' => $notes,
            'folders' => $folders,
            'deleted_notes' => $deleted_notes
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Note/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // a new folder
        if ($request['is_folder']) {
            $validated = $request->validate([
                'is_folder' => 'boolean',
                'label' => 'string'
            ]);

            Note::create([
                'user_id' => auth()->user()->id,
                'is_folder' => $validated['is_folder'],
                'label' => $validated['label']
            ]);
        }

        // a new note
        else {
            $validated = $request->validate([
                'is_folder' => 'boolean',
                'label' => 'string',
                'folder_id' => 'integer'
            ]);

            if (isset($request['content']['ops'][0]['insert'])) {
                $content = $request['content']['ops'][0]['insert'];
            }
            else $content = "";
    
            Note::create([
                'user_id' => auth()->user()->id,
                'folder_id' => $validated['folder_id'],
                'is_folder' => $validated['is_folder'],
                'label' => $validated['label'],
                'content' => $content,
            ]);
        }

        return redirect('notes');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // TODO: 404 not found

        return Inertia::render('Note/Show', [
            'note' => Note::where('id', $id)->first()
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
        return Inertia::render('Note/Edit', [
            'note' => Note::where('id', $id)->first(),
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
        // update a folder
        if ($request['is_folder'] == true) {
            $validated = $request->validate([
                'label' => 'string'
            ]);

            Note::find($id)->update([
                'label' => $validated['label']
            ]);
        }

        // update a note
        else {
            $validated = $request->validate([
                'label' => 'string',
            ]);
    
            Note::find($id)->update([
                'label' => $validated['label'],
                'content' => $request['content'],
            ]);
        }

        return redirect('notes');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Note::where('id', $id)->delete();
        return redirect('notes');
    }
}
