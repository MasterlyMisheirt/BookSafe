import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { type BookGroup } from '@/types';
import { Plus, Search } from 'lucide-react';
import ManualBookForm from '../ManualBookForm';
import BookSearchForm from './BookSearchForm';

interface BookTabsProps {
    bookGroups: BookGroup[];
}

export default function BookTabs({ bookGroups }: BookTabsProps) {
    return (
        <Tabs defaultValue="search" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2 border border-border bg-muted">
                <TabsTrigger
                    value="search"
                    className="cursor-pointer text-muted-foreground hover:bg-accent/50 data-[state=active]:bg-card data-[state=active]:text-foreground"
                >
                    <Search className="mr-2 h-4 w-4" />
                    Search Google Books
                </TabsTrigger>
                <TabsTrigger
                    value="manual"
                    className="cursor-pointer text-muted-foreground hover:bg-accent/50 data-[state=active]:bg-card data-[state=active]:text-foreground"
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Manually
                </TabsTrigger>
            </TabsList>

            {/* Google Books Search Tab */}
            <TabsContent value="search">
                <Card className="border-border bg-card">
                    <CardHeader>
                        <CardTitle className="text-foreground">
                            Search Google Books
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                            Fast and convenient - search by title, author, or
                            ISBN and we'll autofill everything for you.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <BookSearchForm />
                    </CardContent>
                </Card>
            </TabsContent>

            {/* Manual Entry Tab */}
            <TabsContent value="manual">
                <Card className="border-border bg-card">
                    <CardHeader>
                        <CardTitle className="text-foreground">
                            Add Book Manually
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                            Manually enter book details - a bit sluggish, but
                            gives you full control.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ManualBookForm bookGroups={bookGroups} />
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
}
