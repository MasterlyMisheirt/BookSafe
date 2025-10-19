'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link } from '@inertiajs/react';
import { ArrowLeft, BookOpen, Calendar, Tag } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Spinner } from './ui/spinner';

interface Book {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        publisher?: string;
        publishedDate?: string;
        description?: string;
        pageCount?: number;
        categories?: string[];
        imageLinks?: {
            cover?: string;
            smallCover?: string;
            small?: string;
            medium?: string;
            large?: string;
        };
        language?: string;
        previewLink?: string;
        infoLink?: string;
    };
}

type ReadingStatus = 'reading' | 'read' | 'want-to-read';

export function BookView({ bookId }: { bookId: string }) {
    const [book, setBook] = useState<Book | null>(null);
    const [status, setStatus] = useState<ReadingStatus>('reading');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/books/v1/volumes/${bookId}`,
                );
                const data = await response.json();
                setBook(data);
            } catch (error) {
                console.error('Error fetching book:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [bookId]);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-background">
                <Spinner />
            </div>
        );
    }

    if (!book) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-background">
                <div className="text-center">
                    <h1 className="mb-4 font-serif text-2xl font-bold text-foreground">
                        Book not found
                    </h1>
                    <Link href="/">
                        <Button>Return Home</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const {
        title,
        authors,
        publisher,
        publishedDate,
        description,
        pageCount,
        categories,
        imageLinks,
        language,
    } = book.volumeInfo;
    const cover =
        imageLinks?.large ||
        imageLinks?.medium ||
        imageLinks?.small ||
        imageLinks?.cover;

    const getStatusLabel = (status: ReadingStatus) => {
        switch (status) {
            case 'reading':
                return 'Currently Reading';
            case 'read':
                return 'Read';
            case 'want-to-read':
                return 'Want to Read';
        }
    };

    const getStatusColor = (status: ReadingStatus) => {
        switch (status) {
            case 'reading':
                return 'bg-accent text-accent-foreground hover:bg-accent/90';
            case 'read':
                return 'bg-primary text-primary-foreground hover:bg-primary/90';
            case 'want-to-read':
                return 'bg-secondary text-secondary-foreground hover:bg-secondary/90';
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <Link
                    href="/"
                    className="mb-8 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Library
                </Link>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Book Cover */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-8 overflow-hidden">
                            <CardContent className="p-0">
                                <div className="relative aspect-[2/3] overflow-hidden bg-muted">
                                    {cover ? (
                                        <img
                                            src={cover || '/placeholder.svg'}
                                            alt={title}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center">
                                            <BookOpen className="h-24 w-24 text-muted-foreground" />
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                            <CardContent className="p-6">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="secondary"
                                            size="lg"
                                            className={`w-full ${getStatusColor(status)}`}
                                        >
                                            {getStatusLabel(status)}
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        align="center"
                                        className="w-56"
                                    >
                                        <DropdownMenuItem
                                            onClick={() => setStatus('reading')}
                                        >
                                            Currently Reading
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            onClick={() => setStatus('read')}
                                        >
                                            Read
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            onClick={() =>
                                                setStatus('want-to-read')
                                            }
                                        >
                                            Want to Read
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Book Details */}
                    <div className="space-y-6 lg:col-span-2">
                        <div>
                            <h1 className="mb-3 font-serif text-4xl font-bold text-foreground">
                                {title}
                            </h1>
                            {authors && authors.length > 0 && (
                                <p className="mb-4 text-xl text-muted-foreground">
                                    by {authors.join(', ')}
                                </p>
                            )}

                            {categories && categories.length > 0 && (
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {categories.map((category, index) => (
                                        <Badge key={index} variant="secondary">
                                            {category}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Card>
                            <CardContent className="space-y-4 p-6">
                                <h2 className="font-serif text-xl font-semibold text-foreground">
                                    Book Information
                                </h2>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {publisher && (
                                        <div className="flex items-start gap-3">
                                            <BookOpen className="mt-0.5 h-5 w-5 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm text-muted-foreground">
                                                    Publisher
                                                </p>
                                                <p className="text-base text-foreground">
                                                    {publisher}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    {publishedDate && (
                                        <div className="flex items-start gap-3">
                                            <Calendar className="mt-0.5 h-5 w-5 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm text-muted-foreground">
                                                    Published
                                                </p>
                                                <p className="text-base text-foreground">
                                                    {new Date(
                                                        publishedDate,
                                                    ).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    {pageCount && (
                                        <div className="flex items-start gap-3">
                                            <Tag className="mt-0.5 h-5 w-5 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm text-muted-foreground">
                                                    Pages
                                                </p>
                                                <p className="text-base text-foreground">
                                                    {pageCount}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    {language && (
                                        <div className="flex items-start gap-3">
                                            <Tag className="mt-0.5 h-5 w-5 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm text-muted-foreground">
                                                    Language
                                                </p>
                                                <p className="text-base text-foreground">
                                                    {language.toUpperCase()}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        {description && (
                            <Card>
                                <CardContent className="p-6">
                                    <h2 className="mb-4 font-serif text-xl font-semibold text-foreground">
                                        Description
                                    </h2>
                                    <div
                                        className="prose prose-sm max-w-none leading-relaxed text-muted-foreground"
                                        dangerouslySetInnerHTML={{
                                            __html: description,
                                        }}
                                    />
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
