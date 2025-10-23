import { AddBookManualTab } from '@/components/books/create/add-book-manual-tab';
import { AddBookSearchTab } from '@/components/books/create/add-book-search-tab';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayoutTemplate from '@/layouts/app/app-header-layout';
import { type BookGroup, type GoogleBook } from '@/types';
import { useForm } from '@inertiajs/react';
import { Plus, Search } from 'lucide-react';
import React, { useState } from 'react';
import { route } from 'ziggy-js';

export default function Create({ bookGroups }: { bookGroups: BookGroup[] }) {
    const [activeTab, setActiveTab] = useState('search');

    const { data, setData, post, processing, errors } = useForm({
        title: '',
        authors: [''],
        published_date: '',
        description: '',
        cover: '',
        book_group_id: '',
        status: 'reading',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Clean authors
        setData(
            'authors',
            data.authors.filter((a) => a.trim() !== ''),
        );

        post(route('books.store'));
    };

    const handleSelect = (book: GoogleBook) => {
        const publishedDate = book.volumeInfo.publishedDate || '';
        const thumbnail = `https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w1200`;

        // Pre-fill the manual form with selected book data
        setData({
            title: book.volumeInfo.title || '',
            authors:
                book.volumeInfo.authors && book.volumeInfo.authors.length > 0
                    ? book.volumeInfo.authors
                    : [''],
            published_date: publishedDate,
            description: book.volumeInfo.description || '',
            cover: thumbnail,
            book_group_id: '',
            status: 'reading',
        });

        setActiveTab('manual');
    };

    return (
        <div className="min-h-screen bg-background">
            <AppLayoutTemplate>
                <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-8">
                            <h1 className="heading-primary">Add a Book</h1>
                            <p className="text-lg text-muted-foreground">
                                Search using Google Books for instant details,
                                or add manually if you prefer.
                            </p>
                        </div>

                        <Tabs
                            value={activeTab}
                            onValueChange={setActiveTab}
                            className="w-full"
                        >
                            <TabsList className="mb-8 grid w-full grid-cols-2 border border-border bg-muted">
                                <TabsTrigger
                                    value="search"
                                    className="cursor-pointer text-muted-foreground transition-colors hover:bg-card/50 hover:text-foreground data-[state=active]:bg-card data-[state=active]:text-foreground"
                                >
                                    <Search className="mr-2 h-4 w-4" />
                                    Search Google Books
                                </TabsTrigger>
                                <TabsTrigger
                                    value="manual"
                                    className="cursor-pointer text-muted-foreground transition-colors hover:bg-card/50 hover:text-foreground data-[state=active]:bg-card data-[state=active]:text-foreground"
                                >
                                    <Plus className="mr-2 h-4 w-4" />
                                    Add Manually
                                </TabsTrigger>
                            </TabsList>

                            {/* Google Books Search */}
                            <TabsContent value="search">
                                <AddBookSearchTab onBookSelect={handleSelect} />
                            </TabsContent>

                            {/* Manual Entry */}
                            <TabsContent value="manual">
                                <AddBookManualTab
                                    bookData={data}
                                    onChange={setData}
                                    onSubmit={handleSubmit}
                                    bookGroups={bookGroups}
                                    errors={errors}
                                    processing={processing}
                                />
                            </TabsContent>
                        </Tabs>
                    </div>
                </main>
            </AppLayoutTemplate>
        </div>
    );
}
