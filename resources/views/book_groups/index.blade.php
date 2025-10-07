<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Book Groups
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-a  uto sm:px-6 lg:px-8 space-y-6">
            <x-alert-success>{{ session('success') }}</x-alert-success>
            <x-link-button href="{{ route('book-groups.create') }}">+ New Book Group</x-link-button>
            @forelse ($bookGroups as $bookGroup)
                <div class="bg-white p-6 overflow-hidden shadow-sm sm:rounded-lg">
                    <h2 class="font-bold text-lg text-indigo-600">
                        <a href="{{ route('book-groups.show', $bookGroup) }}"
                           class="hover:underline">{{ $bookGroup->name }}</a>
                    </h2>
                    <span class="block mt-4 text-sm opacity-70">{{ $bookGroup->updated_at->diffForHumans() }}</span>
                </div>
            @empty
                <p>You have no book groups yet</p>
            @endforelse
            {{ $bookGroups->links() }}
        </div>
    </div>
</x-app-layout>
