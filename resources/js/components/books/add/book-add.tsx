import { BookView } from '@/components/book-view';
import { Suspense } from 'react';

export default function BookPage({ params }: { params: { id: string } }) {
    return (
        <Suspense
            fallback={
                <div className="flex min-h-screen items-center justify-center">
                    Loading...
                </div>
            }
        >
            <BookView bookId={params.id} />
        </Suspense>
    );
}
