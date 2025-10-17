import { BookOpen } from 'lucide-react';

export default function AppLogo() {
    return (
        <>
            <div className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-accent" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate font-serif text-xl leading-tight font-semibold text-foreground">
                    BookSafe
                </span>
            </div>
        </>
    );
}
