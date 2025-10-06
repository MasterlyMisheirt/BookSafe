<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'google_book_id',
        'title',
        'subtitle',
        'authors',
        'publisher',
        'published_date',
        'description',
        'page_count',
        'categories',
        'thumbnail',
        'book_group_id',
        'user_id'
    ];

    protected $casts = [
        'authors' => 'array',
        'categories' => 'array',
    ];

    public function getRouteKeyName()
    {
        return 'google_book_id';
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function bookGroup()
    {
        return $this->belongsTo(BookGroup::class);
    }
}
