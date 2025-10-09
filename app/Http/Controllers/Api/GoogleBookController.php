<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class GoogleBookController extends Controller
{
    public function search(Request $request)
    {

        $request->validate([
            'query' => 'required|string',
            'include-author' => 'nullable|boolean',
            'author' => 'nullable|string'
        ]);

        $query = $request->input('query');
        $includeAuthor = $request->has('include-author');
        $author = $request->input('author');

        if ($includeAuthor && empty($author)) {
            return back()
                ->withErrors(['query' => 'The author field is required.'])
                ->withInput();
        } else if (!$includeAuthor) {
            $author = null;
        }

        $response = Http::get('https://www.googleapis.com/books/v1/volumes', [
            'q' => $author ? "{$query} inauthor:{$author}" : $query,
            'maxResults' => 1,
            'key' => config('services.google.books_key'),
        ]);

        if ($response->failed()) {
            return back()
                ->withInput()
                ->withErrors(['query' => 'Failed to fetch data from Google Books']);
        }

        $data = $response->json();
        $jsonBooks = $data['items'] ?? [];

        if (empty($jsonBooks)) {
            return back()
                ->withInput()
                ->withErrors(['query' => 'No books found for your search.']);
        }

        $book = new Book([
            'title' => $jsonBooks[0]['volumeInfo']['title'] ?? '',
            'description' => $jsonBooks[0]['volumeInfo']['description'] ?? '',
            'google_book_id' => $jsonBooks[0]['id'] ?? Str::ulid()->toString()
        ]);

        $bookGroups = Auth::user()->bookGroups()->get();
        return view('books.create', ['book' => $book, 'bookGroups' => $bookGroups]);
    }
}
