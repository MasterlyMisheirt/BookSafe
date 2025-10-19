import { BooksGridCard } from '@/components/books/index/books-grid-card';
import { Button } from '@/components/ui/button';
import { type Book } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen } from 'lucide-react';
import { route } from 'ziggy-js';

export function BooksGrid({ books }: { books: Book[] }) {
    if (books.length === 0) {
        return (
            <div className="py-16 text-center">
                <BookOpen className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">
                    No books yet
                </h3>
                <p className="mb-6 text-muted-foreground">
                    Start building your library by adding your first book
                </p>
                <Link href={route('books.create')} prefetch>
                    <Button className="cursor-pointer">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Add Your First Book
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {books.map((book) => (
                <BooksGridCard key={book.id} book={book} />
            ))}
        </div>
    );
}
