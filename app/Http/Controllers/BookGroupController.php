<?php

namespace App\Http\Controllers;

use App\Models\Book;
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
        $bookGroups = Auth::user()->bookGroups()->latest('updated_at')->paginate(7);
        return view('book_groups.index')->with('bookGroups', $bookGroups);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);

        $bookGroup = Auth::user()->bookGroups()->create([
            'name' => $request->get('name')
        ]);

        return to_route('book-groups.show', $bookGroup);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('book_groups.create');
    }

    /**
     * Display the specified resource.
     */
    public function show(BookGroup $bookGroup)
    {
        if (!$bookGroup->user->is(Auth::user())) {
            abort(403);
        }
        $books = $bookGroup->books()->latest('updated_at')->paginate(5);
        return view('book_groups.show', ['bookGroup' => $bookGroup, 'books' => $books]);
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

    public function add(Book $book)
    {
        //
    }
}
