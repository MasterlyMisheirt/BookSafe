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
        $user_id = Auth::id();
        $books = Book::where('user_id', $user_id)->latest('updated_at')->paginate(4);
        return view('books.index')->with('books', $books);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('books.create');
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

        $book = new Book([
            'user_id' => Auth::id(),
            'google_book_id' => Str::uuid()->toString(),
            'title' => $request->get('title'),
            'description' => $request->get('description')
        ]);
        $book->save();

        return to_route('books.show', $book);
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        if ($book->user_id !== Auth::id()) {
            abort(403);
        }

        return view('books.show', ['book' => $book]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        if ($book->user_id !== Auth::id()) {
            abort(403);
        }

        return view('books.edit', ['book' => $book]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $book)
    {
        if ($book->user_id !== Auth::id()) {
            abort(403);
        }

        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        $book->update([
            'title' => $request->get('title'),
            'description' => $request->get('description')
        ]);

        return to_route('books.show', $book)
            ->with('success', 'Changes saved');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        if ($book->user_id !== Auth::id()) {
            abort(403);
        }

        $book->delete();

        return to_route('books.index')
            ->with('success', 'Book deleted');
    }
}
