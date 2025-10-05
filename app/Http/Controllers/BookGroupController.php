<?php

namespace App\Http\Controllers;

use App\Models\BookGroup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user_id = Auth::id();
        $bookGroups = BookGroup::where('user_id', $user_id)->latest('updated_at')->paginate(7);
        return view('book_groups.index')->with('bookGroups', $bookGroups);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('book_groups.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);

        $bookGroup = new BookGroup([
            'user_id' => Auth::id(),
            'name' => $request->get('name'),
        ]);
        $bookGroup->save();

        return to_route('book-groups.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(BookGroup $bookGroup)
    {
        if ($bookGroup->user_id !== Auth::id()) {
            abort(403);
        }
        return view('book_groups.show', ['bookGroup' => $bookGroup]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BookGroup $bookGroup)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, BookGroup $bookGroup)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BookGroup $bookGroup)
    {
        //
    }
}
