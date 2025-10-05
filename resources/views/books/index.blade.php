<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Books
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-a  uto sm:px-6 lg:px-8 space-y-6">
            @forelse ($books as $book)
                <div class="bg-white p-6 overflow-hidden shadow-sm sm:rounded-lg">
                    <h2 class="font-bold text-2xl text-indigo-600">{{ $book->title }}</h2>
                    <p class="mt-2">{{ Str::limit($book->description, 350, '...') }}</p>
                    <span class="block mt-4 text-sm opacity-70">{{ $book->updated_at->diffForHumans() }}</span>
                </div>
            @empty
                <p>You have no books yet</p>
            @endforelse
            {{ $books->links() }}
        </div>
    </div>
</x-app-layout>
