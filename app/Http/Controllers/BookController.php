<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::whereBelongsTo(Auth::user())->latest('updated_at')->paginate(4);
        return view('books.index')->with('books', $books);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        $book = Auth::user()->books()->create([
            'google_book_id' => Str::uuid()->toString(),
            'title' => $request->get('title'),
            'description' => $request->get('description'),
            'book_group_id' => $request->get('bookGroup_id')
        ]);

        return to_route('books.show', $book);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $bookGroups = Auth::user()->bookGroups()->get();
        return view('books.create')->with('bookGroups', $bookGroups);
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        if (!$book->user->is(Auth::user())) {
            abort(403);
        }

        return view('books.show', ['book' => $book]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        if (!$book->user->is(Auth::user())) {
            abort(403);
        }

        $bookGroups = Auth::user()->bookGroups()->get();
        return view('books.edit', ['book' => $book, 'bookGroups' => $bookGroups]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $book)
    {
        if (!$book->user->is(Auth::user())) {
            abort(403);
        }

        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        $book->update([
            'title' => $request->get('title'),
            'description' => $request->get('description'),
            'book_group_id' => $request->get('bookGroup_id')
        ]);

        return to_route('books.show', $book)
            ->with('success', 'Changes saved');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        if (!$book->user->is(Auth::user())) {
            abort(403);
        }

        $book->delete();

        return to_route('books.index')
            ->with('success', 'Book deleted');
    }
}
