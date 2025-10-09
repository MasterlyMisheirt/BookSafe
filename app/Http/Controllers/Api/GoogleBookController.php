<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class GoogleBookController extends Controller
{
    public function search(Request $request)
    {

        $query = $request->input('query');

        if (empty($query)) {
            return back()
                ->withErrors(['query' => 'The search field is required.'])
                ->withInput();
        }

        $response = Http::get('https://www.googleapis.com/books/v1/volumes', [
            'q' => $query,
            'maxResults' => 10,
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
