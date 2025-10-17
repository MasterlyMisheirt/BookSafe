import { Card, CardContent } from '@/components/ui/card';
import { home } from '@/routes';
import { Link } from '@inertiajs/react';
import { BookOpen } from 'lucide-react';
import { type PropsWithChildren } from 'react';

export default function AuthCardLayout({
    children,
    title,
    description,
}: PropsWithChildren<{
    name?: string;
    title?: string;
    description?: string;
}>) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <div className="flex w-full max-w-md flex-col gap-6">
                <div className="flex flex-col items-center gap-4">
                    <Link
                        href={home()}
                        className="inline-flex items-center gap-2"
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
                <div className="flex flex-col gap-6">
                    <Card className="rounded-xl">
                        <CardContent className="px-10 py-8">
                            {children}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
