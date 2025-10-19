export type BookGroup = {
    id: number;
    name: string;
    slug: string;
    user_id: number;
};

export type Book = {
    id: number;
    google_book_id?: string;
    title: string;
    subtitle?: string;
    authors: string[]; // should be an array, not string
    publisher?: string;
    published_date?: string; // matches Laravel column name
    description?: string;
    page_count?: number;
    categories?: string[];
    cover?: string; // only thumbnail URL
    status: 'read' | 'reading' | 'want-to-read';
    book_group_id?: number | null;
    user_id: number;
};

export interface GoogleBook {
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
