import { AddBookSearchResults } from '@/components/books/create/add-book-search-results';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/use-debounce';
import { Search } from 'lucide-react';
import { useState } from 'react';
import useSWR from 'swr';

interface Book {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        publishedDate?: string;
        description?: string;
        imageLinks?: {
            thumbnail?: string;
            smallThumbnail?: string;
        };
        categories?: string[];
    };
}

interface GoogleBooksResponse {
    items?: Book[];
    totalItems: number;
}

const fetcher = async (url: string): Promise<GoogleBooksResponse> => {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch books');
    return res.json();
};

interface AddBookSearchTabProps {
    onBookSelect: (book: Book) => void;
}

export function AddBookSearchTab({ onBookSelect }: AddBookSearchTabProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSearch = useDebounce(searchQuery, 500);

    const { data, isLoading } = useSWR<GoogleBooksResponse>(
        debouncedSearch
            ? `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(debouncedSearch)}&maxResults=12`
            : null,
        fetcher,
    );

    return (
        <Card className="border-border bg-card">
            <CardHeader>
                <CardTitle className="text-foreground">
                    Search Google Books
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                    Fast and convenient - search by title, author, or ISBN and
                    we'll autofill everything for you.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative mb-6">
                    <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder="Search for books by title, author, or ISBN..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="h-12 border-border bg-background pl-10 text-base text-foreground placeholder:text-muted-foreground"
                    />
                </div>

                <AddBookSearchResults
                    books={data?.items}
                    isLoading={isLoading}
                    hasSearched={!!searchQuery}
                    onBookSelect={onBookSelect}
                />

                <div className="mt-6 border-t border-border pt-4">
                    <p className="text-center text-xs text-muted-foreground">
                        Powered by{' '}
                        <a
                            href="https://books.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                        >
                            Google Books
                        </a>
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
