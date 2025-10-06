<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Books
        </h2>
    </x-slot>
    <div class="py-12">
        <div class="max-w-7xl mx-a  uto sm:px-6 lg:px-8 space-y-6">
            <x-alert-success>{{ session('success') }}</x-alert-success>
            <div class="flex gap-6">
                <p class="opacity-70"><strong>Created:</strong> {{ $book->created_at->diffForHumans() }}</p>
                <p class="opacity-70"><strong>Last changed:</strong> {{ $book->updated_at->diffForHumans() }}</p>
                <x-link-button href="{{ route('books.edit', $book) }}" class="ml-auto">Edit</x-link-button>
                <form action="{{ route('books.destroy', $book) }}" method="post">
                    @method('delete')
                    @csrf
                    <x-primary-button class="bg-red-500 hover:bg-red-600 focus:bg-red-600"
                                      onclick="return confirm('Are you sure you want to delete this book?')">
                        Delete Book
                    </x-primary-button>
                </form>
            </div>
            <div class="bg-white p-6 overflow-hidden shadow-sm sm:rounded-lg">
                <h2 class="font-bold text-4xl text-indigo-600">
                    {{ $book   ->title }}
                </h2>
                <p class="mt-2 whitespace-pre-wrap">{{ $book->description }}</p>
            </div>
        </div>
    </div>
</x-app-layout>
