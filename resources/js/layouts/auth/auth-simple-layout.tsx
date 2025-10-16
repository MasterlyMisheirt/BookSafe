import { home } from '@/routes';
import { Link } from '@inertiajs/react';
import { BookOpen } from 'lucide-react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href={home()}
                            className="mb-6 inline-flex items-center gap-2"
                        >
                            <BookOpen className="h-8 w-8 text-primary" />
                            <span className="font-serif text-2xl font-bold text-foreground">
                                BookSafe
                            </span>
                        </Link>
                        <div className="space-y-2 text-center">
                            <h1 className="font-serif text-3xl font-bold text-foreground">
                                {title}
                            </h1>
                            <p className="mt-2 text-muted-foreground">
                                {description}
                            </p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
