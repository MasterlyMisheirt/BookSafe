import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function BookSearchForm() {
    return (
        <form className="space-y-6">
            <div className="relative">
                <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder="Search for books by title, author, or ISBN..."
                    className="h-12 border-border bg-background pl-10 text-base text-foreground placeholder:text-muted-foreground"
                />
            </div>

            <Button
                className="w-full cursor-pointer bg-accent text-accent-foreground hover:bg-accent/90"
                size="lg"
            >
                <Search className="mr-2 h-4 w-4" />
                Search Books
            </Button>

            {/* Search results will be displayed here */}
            <div className="rounded-lg border border-dashed border-border py-12 text-center">
                <Search className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <p className="text-muted-foreground">
                    Search results will appear here
                </p>
            </div>
        </form>
    );
}
