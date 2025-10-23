<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\BookGroup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;


class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::whereBelongsTo(Auth::user())->get();
        $bookGroups = BookGroup::whereBelongsTo(Auth::user())->get();
        
        return Inertia::render('books/index', [
            'books' => $books,
            'bookGroups' => $bookGroups
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'authors' => 'required|array|min:1',
            'authors.*' => 'required|string',
            'published_date' => 'nullable|string',
            'description' => 'nullable',
            'cover' => 'nullable|url',
            'book_group_id' => 'nullable|exists:book_groups,id',
            'status' => 'required|in:read,reading,want-to-read'
        ]);

        Auth::user()->books()->create([
            'google_book_id' => Str::uuid()->toString(),
            'title' => $request->get('title'),
            'authors' => $request->get('authors'),
            'published_date' => $request->get('published_date'),
            'description' => $request->get('description'),
            'cover' => $request->get('cover'),
            'book_group_id' => $request->get('book_group_id'),
            'status' => $request->get('status', 'reading'),
        ]);

        return to_route('books.index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $bookGroups = Auth::user()->bookGroups()->get();
        return Inertia::render('books/create', ['bookGroups' => $bookGroups]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        if (!$book->user->is(Auth::user())) {
            
            abort(403);
        }
        
        return Inertia::render('books/show', ['book' => $book]);
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
