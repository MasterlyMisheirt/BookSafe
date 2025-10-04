<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'google_book_id',
        'user_id',
        'title',
        'subtitle',
        'authors',
        'publisher',
        'published_date',
        'description',
        'page_count',
        'categories',
        'thumbnail',
    ];

    protected $casts = [
        'authors' => 'array',
        'categories' => 'array',
    ];
}
