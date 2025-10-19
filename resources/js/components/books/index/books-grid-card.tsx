import { Card } from '@/components/ui/card';
import { type Book } from '@/types';
import { Link } from '@inertiajs/react';

export function BooksGridCard({ book }: { book: Book }) {
    const getStatusBadge = (status: Book['status']) => {
        switch (status) {
            case 'reading':
                return (
                    <span className="rounded-full bg-accent px-2 py-1 text-xs font-medium text-white shadow-lg">
                        Reading
                    </span>
                );
            case 'read':
                return (
                    <span className="rounded-full bg-primary px-2 py-1 text-xs font-medium text-white shadow-lg">
                        Read
                    </span>
                );
            case 'want-to-read':
                return (
                    <span className="rounded-full bg-blue-600 px-2 py-1 text-xs font-medium text-white shadow-lg">
                        Want to Read
                    </span>
                );
        }
    };

    return (
        <Link href={`/book/${book.id}`}>
            <Card className="group relative cursor-pointer overflow-hidden border-r-4 border-b-4 border-border/50 border-r-border/80 border-b-border/60 p-0 shadow-[4px_4px_8px_rgba(0,0,0,0.15),inset_-2px_0_4px_rgba(0,0,0,0.1)] transition-all duration-300 before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-gradient-to-r before:from-black/20 before:to-transparent after:absolute after:inset-x-0 after:top-0 after:h-1 after:bg-gradient-to-b after:from-white/10 after:to-transparent hover:translate-x-0.5 hover:-translate-y-1 hover:shadow-[6px_6px_16px_rgba(0,0,0,0.25),inset_-2px_0_6px_rgba(0,0,0,0.15)] hover:shadow-xl">
                <div className="relative aspect-[2/3] overflow-hidden">
                    <img
                        src={book.cover || '/placeholder.svg'}
                        alt={book.title}
                        className="h-full w-full object-cover"
                    />
                    {/* Ambient gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 transition-opacity group-hover:opacity-95" />
                    {/* Book information on top of gradient */}
                    <div className="absolute right-0 bottom-0 left-0 p-4 text-white">
                        <h3 className="mb-1 line-clamp-2 font-serif text-sm font-bold drop-shadow-lg">
                            {book.title}
                        </h3>
                        <p className="mb-2 line-clamp-1 text-xs opacity-90 drop-shadow-md">
                            {book.authors}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                            <span className="opacity-75 drop-shadow-md">
                                {book.published_date
                                    ? book.published_date.slice(0, 4)
                                    : ''}
                            </span>
                            {getStatusBadge(book.status)}
                        </div>
                    </div>
                </div>
            </Card>
        </Link>
    );
}
