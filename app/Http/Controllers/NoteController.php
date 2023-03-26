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
        return Inertia::render('Note/Index', [
            'notes' => Note::where('is_folder', 0)->get(),
            'folders' => Note::where('is_folder', 1)->get(),
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
        $validated = $request->validate([
            'is_folder' => 'boolean',
            'label' => 'string'
        ]);

        $content = $request['content']['ops'][0]['insert'];

        Note::create([
            'user_id' => auth()->user()->id,
            'is_folder' => $validated['is_folder'],
            'label' => $validated['label'],
            'content' => $content,
        ]);

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
            'note' => Note::find($id)->first(),
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
        $validated = $request->validate([
            'label' => 'string',
            'content' => 'string'
        ]);

        Note::find($id)->update([
            'label' => $validated['label'],
            'content' => $validated['content']
        ]);

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
        Note::find($id)->delete();
        return redirect('notes/0');
    }
}
