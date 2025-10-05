<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class GoogleBookController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('q');

        if (!$query) {
            return response()->json(['error' => 'Missing search query'], 400);
        }

        $response = Http::get('https://www.googleapis.com/books/v1/volumes', [
            'q' => $query,
            'maxResults' => 10,
            'key' => config('services.google.books_key'),
        ]);

        if ($response->failed()) {
            return response()->json(['error' => 'Failed to fetch data'], 500);
        } else {
            return response()->json($response->json());
        }
    }
}
