import { BookViewCover } from '@/components/books/show/book-view-cover';
import { BookViewDescription } from '@/components/books/show/book-view-description';
import { BookViewDetails } from '@/components/books/show/book-view-details';
import { BookViewInfo } from '@/components/books/show/book-view-info';
import AppLayoutTemplate from '@/layouts/app/app-header-layout';
import { Book } from '@/types';
import { router } from '@inertiajs/react';
import { useState } from 'react';
import { route } from 'ziggy-js';

type ReadingStatus = 'reading' | 'read' | 'want-to-read';

export default function Show({ book }: { book: Book }) {
    const [status, setStatus] = useState<ReadingStatus>(
        book.status as ReadingStatus,
    );

    const handleDelete = (e: React.FormEvent) => {
        e.preventDefault();

        if (confirm('Are you sure you want to delete this book?')) {
            router.delete(route('books.destroy', book));
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <AppLayoutTemplate>
                <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <BookViewCover
                            thumbnail={book.cover}
                            title={book.title}
                            status={status}
                            onStatusChange={setStatus}
                        />
                        <div className="space-y-6 lg:col-span-2">
                            <BookViewDetails
                                title={book.title}
                                authors={book.authors}
                                categories={book.categories}
                            />
                            <BookViewInfo
                                publisher={book.publisher}
                                publishedDate={book.published_date}
                                pageCount={book.page_count}
                            />
                            {book.description && (
                                <BookViewDescription
                                    description={book.description}
                                />
                            )}

                            <form onSubmit={handleDelete}>
                                <button
                                    type="submit"
                                    className="cursor-pointer rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:bg-red-600"
                                >
                                    Delete Book
                                </button>
                            </form>
                        </div>
                    </div>
                </main>
            </AppLayoutTemplate>
        </div>
    );
}
