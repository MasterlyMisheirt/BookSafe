<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Book Creator
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-a  uto sm:px-6 lg:px-8 space-y-6">

            <!-- New Google Books search section -->
            <div class="bg-white p-6 overflow-hidden shadow-sm sm:rounded-lg max-w-2xl">
                <h3 class="text-lg font-semibold mb-4">Search Google Books</h3>

                <form action="{{ route('google.search') }}" id="google-search-form" class="flex space-x-2 mb-4">
                    <x-text-input name="query" id="google-search" class="flex-1"
                                  placeholder="Search for a book" value="{{ @old('query') }}"></x-text-input>
                    <x-primary-button class="ml-4" id="google-search-btn">Search</x-primary-button>
                </form>
                <p class="text-sm text-gray-500 mb-2">
                    Type the book title and press Enter. The first matching result will auto-fill the details below.
                </p>
                @error('query')
                <div class="text-sm mt-1 text-red-500">{{ $message }}</div>
                @enderror
            </div>

            <div class="bg-white p-6 overflow-hidden shadow-sm sm:rounded-lg max-w-2xl">
                <form action="{{ route('books.store') }}" method="post">
                    @csrf
                    <x-text-input name="title" class="w-full" placeholder="Book title"
                                  value="{!! @old('title', $book->title) !!}"></x-text-input>
                    @error('title')
                    <div class="text-sm mt-1 text-red-500">{{ $message }}</div>
                    @enderror
                    <x-textarea name="description" placeholder="Type the book description" rows="6"
                                value="{!! old('description', $book->description ?? '') !!}"
                                class="w-full mt-6"></x-textarea>
                    @error('description')
                    <div class="text-sm mt-1 text-red-500">{{ $message }}</div>
                    @enderror
                    <input type="hidden" name="google_book_id" value="{{ $book->google_book_id ?? null }}">
                    <x-primary-button class="mt-6">Create Book</x-primary-button>
                </form>
            </div>


        </div>
    </div>
</x-app-layout>
