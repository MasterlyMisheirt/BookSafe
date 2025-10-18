import BookTabs from '@/components/books/create/BookTabs';
import PageHeader from '@/components/books/create/PageHeader';
import AppLayoutTemplate from '@/layouts/app/app-header-layout';
import { type BookGroup } from '@/types';

interface Props {
    bookGroups: BookGroup[];
}

export default function Create({ bookGroups }: { bookGroups: BookGroup[] }) {
    return (
        <div className="min-h-screen bg-background">
            <AppLayoutTemplate>
                <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <PageHeader
                            title="Add a Book"
                            description="Search using Google Books for instant details, or add manually if you prefer."
                        />
                        <BookTabs bookGroups={bookGroups} />
                    </div>
                </main>
            </AppLayoutTemplate>
        </div>
    );
}
