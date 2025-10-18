import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { type BookGroup } from '@/types';
import { Plus } from 'lucide-react';
import FormField from './create/FormField';

interface ManualBookFormProps {
    bookGroups: BookGroup[];
}

export default function ManualBookForm({ bookGroups }: ManualBookFormProps) {
    return (
        <form className="space-y-6">
            <FormField
                id="title"
                name="title"
                label="Title"
                placeholder="Enter book title"
                required
            />

            <FormField
                id="author"
                name="author"
                label="Author"
                placeholder="Enter author name"
                required
            />

            <FormField
                id="publishedDate"
                name="publishedDate"
                label="Publication Year"
                type="number"
                placeholder="e.g., 2024"
            />

            <FormField
                id="coverUrl"
                name="coverUrl"
                label="Cover Image URL"
                type="url"
                placeholder="https://example.com/cover.jpg"
            />

            <FormField
                id="description"
                name="description"
                label="Description"
                placeholder="Enter book description (optional)"
                rows={4}
            />

            <div className="space-y-2">
                <label htmlFor="bookgroup-manual" className="text-foreground">
                    Book Group *
                </label>
                <Select name="bookGroup_id" required>
                    <SelectTrigger
                        id="bookgroup-manual"
                        className="border-border bg-background text-foreground"
                    >
                        <SelectValue placeholder="-- Select Book Group --" />
                    </SelectTrigger>
                    <SelectContent>
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

            <Button
                type="submit"
                className="w-full cursor-pointer bg-accent text-accent-foreground hover:bg-accent/90"
                size="lg"
            >
                <Plus className="mr-2 h-4 w-4" />
                Add Book to Library
            </Button>
        </form>
    );
}
