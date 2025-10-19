import { BooksFilters } from '@/components/books/index/books-filters';
import { BooksGrid } from '@/components/books/index/books-grid';
import AppLayoutTemplate from '@/layouts/app/app-header-layout';
import { type Book, type BookGroup } from '@/types';

export default function Index({
    books,
    bookGroups,
}: {
    books: Book[];
    bookGroups: BookGroup[];
}) {
    return (
        <div className="min-h-screen bg-background">
            <AppLayoutTemplate>
                <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h1 className="mb-2 font-serif text-4xl font-bold text-foreground">
                            My Books
                        </h1>
                        <p className="text-muted-foreground">
                            Manage and organize your reading collection
                        </p>
                    </div>
                    <BooksFilters bookGroups={bookGroups} />
                    <BooksGrid books={books} />
                </main>
            </AppLayoutTemplate>
        </div>
    );
}
