import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { type BookGroup } from '@/types';
import { Grid3x3, List } from 'lucide-react';

interface BooksFiltersProps {
    bookGroups: BookGroup[];
}

export function BooksFilters({ bookGroups }: BooksFiltersProps) {
    return (
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex w-full flex-1 flex-col gap-4 sm:w-auto sm:flex-row">
                <Input
                    type="search"
                    placeholder="Search books..."
                    className="w-full sm:w-64"
                />

                <Select>
                    <SelectTrigger className="w-full sm:w-48">
                        <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Books</SelectItem>
                        <SelectItem value="reading">
                            Currently Reading
                        </SelectItem>
                        <SelectItem value="read">Read</SelectItem>
                        <SelectItem value="want-to-read">
                            Want to Read
                        </SelectItem>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger className="w-full sm:w-48">
                        <SelectValue placeholder="Filter by group" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Groups</SelectItem>
                        {bookGroups.map((group) => (
                            <SelectItem
                                key={group.id}
                                value={group.id.toString()}
                            >
                                {group.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="flex gap-2">
                <Button variant="outline" size="icon">
                    <Grid3x3 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                    <List className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
