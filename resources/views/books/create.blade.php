<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Books
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-a  uto sm:px-6 lg:px-8 space-y-6">
            <div class="bg-white p-6 overflow-hidden shadow-sm sm:rounded-lg max-w-2xl">
                <form action="{{ route('books.store') }}" method="post">
                    @csrf
                    <x-text-input name="title" class="w-full" placeholder="Book title"
                                  value="{{ @old('title') }}"></x-text-input>
                    @error('title')
                    <div class="text-sm mt-1 text-red-500">{{ $message }}</div>
                    @enderror
                    <x-textarea name="description" placeholder="Type the book description" rows="6"
                                value="{{ @old('description') }}"
                                class="w-full mt-6"></x-textarea>
                    @error('description')
                    <div class="text-sm mt-1 text-red-500">{{ $message }}</div>
                    @enderror
                    <x-primary-button class="mt-6">Save Book</x-primary-button>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
