<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Book Creator
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-a  uto sm:px-6 lg:px-8 space-y-6">

            <div class="bg-white p-6 overflow-hidden shadow-sm sm:rounded-lg max-w-2xl">
                <h3 class="text-lg font-semibold mb-4">Search Google Books</h3>

                <form action="{{ route('google.search') }}" id="google-search-form" class="space-y-3">
                    <div class="flex space-x-2">
                        <x-text-input name="query" id="google-search" class="flex-1"
                            placeholder="Search book title to populate the fields below" value="{{ @old('query') }}" />
                        <x-primary-button id="google-search-btn">Search</x-primary-button>
                        <input type="hidden" name="google_book_id" value="{{ $book->google_book_id ?? null }}">
                    </div>

                    <div x-data="{ includeAuthor: false }" class="flex flex-col space-y-2">
                        <x-checkbox name="include-author" label="Include author in search" x-model="includeAuthor" />
                        <div x-show="includeAuthor" x-cloak>
                            <x-text-input name="author" id="author" class="flex-1"
                                placeholder="Enter author name" />
                        </div>
                    </div>
                </form>
                @error('author')
                    <div class="text-sm mt-1 text-red-500">{{ $message }}</div>
                @enderror
                @error('query')
                    <div class="text-sm mt-1 text-red-500">{{ $message }}</div>
                @enderror

                <div class="mt-2 text-sm text-gray-500">
                    Powered by <a href="https://books.google.com/" target="_blank" rel="noopener noreferrer"
                        class="underline">
                        Google Books
                    </a>
                </div>
            </div>

            <div class="bg-white p-6 overflow-hidden shadow-sm sm:rounded-lg max-w-2xl">
                <form action="{{ route('books.store') }}" method="post">
                    @csrf
                    <x-text-input name="title" class="w-full" placeholder="Enter book title"
                        value="{!! @old('title', $book->title) !!}"></x-text-input>
                    @error('title')
                        <div class="text-sm mt-1 text-red-500">{{ $message }}</div>
                    @enderror
                    <x-textarea name="description" placeholder="Enter book description" rows="6"
                        value="{!! old('description', $book->description ?? '') !!}" class="w-full mt-6"></x-textarea>
                    @error('description')
                        <div class="text-sm mt-1 text-red-500">{{ $message }}</div>
                    @enderror
                    <select name="bookGroup_id"
                        class="w-full mt-6 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm">
                        <option value="">-- Select Book Group --</option>
                        @foreach ($bookGroups as $bookGroup)
                            <option value="{{ $bookGroup->id }}" @if (old('bookGroup_id') == $bookGroup->id) selected @endif>
                                {{ $bookGroup->name }}</option>
                        @endforeach
                    </select>
                    <x-primary-button class="mt-6">Create Book</x-primary-button>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
