<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'task_id' => 'numeric',
            'content' => 'required|alpha_num|min:1',
        ]);

        $user_id = auth()->user()->id;

        Comment::create([
            'user_id' => $user_id,
            'task_id' => $validated['task_id'],
            'content' => $validated['content'],
        ]);

        return redirect("blocksix/{$validated['task_id']}");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Comment $comment)
    {
        $validated = $request->validate([
            'updatedContent' => 'required|alpha_num|min:1',
        ]);

        $comment->update([
            'content' => $validated['updatedContent'],
        ]);

        return redirect("blocksix/{$comment['task_id']}");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $comment)
    {
        $task_id = $comment['task_id'];
        $comment->delete();

        return redirect("blocksix/{$task_id}");
    }
}
