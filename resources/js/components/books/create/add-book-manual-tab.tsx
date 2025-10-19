import { AddBookAuthorInput } from '@/components/books/create/add-book-author-input';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import type { BookGroup } from '@/types';
import { Plus } from 'lucide-react';
import type React from 'react';

interface ManualBookData {
    title: string;
    authors: string[];
    published_date: string;
    description: string;
    cover: string;
    book_group_id: string | number | '';
    status: 'reading' | 'read' | 'want-to-read';
}

interface AddBookManualTabProps {
    bookData: ManualBookData;
    onChange: (field: keyof ManualBookData, value: any) => void;
    onSubmit: (e: React.FormEvent) => void;
    bookGroups: BookGroup[];
    errors?: Record<string, string>;
    processing?: boolean;
}

export function AddBookManualTab({
    bookData,
    onChange,
    onSubmit,
    bookGroups,
    errors,
    processing,
}: AddBookManualTabProps) {
    return (
        <Card className="border-border bg-card">
            <CardHeader>
                <CardTitle className="text-foreground">
                    Add Book Manually
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                    Manually enter book details for full control.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <form onSubmit={onSubmit} className="space-y-6">
                    {/* Title */}
                    <div className="space-y-2">
                        <Label htmlFor="title" className="text-foreground">
                            Title *
                        </Label>
                        <Input
                            id="title"
                            placeholder="Enter book title"
                            value={bookData.title}
                            onChange={(e) => onChange('title', e.target.value)}
                            required
                            className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                        />
                        {errors?.title && (
                            <p className="text-sm text-red-500">
                                {errors.title}
                            </p>
                        )}
                    </div>

                    {/* Authors */}
                    <AddBookAuthorInput
                        authors={bookData.authors}
                        onChange={(authors) => onChange('authors', authors)}
                        required
                    />

                    {/* Book Group */}
                    <div className="space-y-2">
                        <Label
                            htmlFor="book_group_id"
                            className="text-foreground"
                        >
                            Book Group
                        </Label>
                        <Select
                            value={bookData.book_group_id?.toString() ?? ''}
                            onValueChange={(val) =>
                                onChange('book_group_id', val)
                            }
                        >
                            <SelectTrigger
                                id="book_group_id"
                                className="border-border bg-background text-foreground"
                            >
                                <SelectValue placeholder="Select Book Group" />
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

                    {/* Status */}
                    <div className="space-y-2">
                        <Label
                            htmlFor="status"
                            className="text-foreground"
                        >
                            Reading Status
                        </Label>
                        <Select
                            value={bookData.status || 'reading'}
                            onValueChange={(val) =>
                                onChange('status', val)
                            }
                        >
                            <SelectTrigger
                                id="status"
                                className="border-border bg-background text-foreground"
                            >
                                <SelectValue placeholder="-- Select Status --" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="reading">Reading</SelectItem>
                                <SelectItem value="read">Read</SelectItem>
                                <SelectItem value="want-to-read">Want to Read</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Published Date */}
                    <div className="space-y-2">
                        <Label
                            htmlFor="published_date"
                            className="text-foreground"
                        >
                            Publication Year
                        </Label>
                        <Input
                            id="published_date"
                            type="text"
                            placeholder="e.g., 2024"
                            value={bookData.published_date}
                            onChange={(e) =>
                                onChange('published_date', e.target.value)
                            }
                            className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                        />
                    </div>

                    {/* Cover */}
                    <div className="space-y-2">
                        <Label htmlFor="cover" className="text-foreground">
                            Cover Image URL
                        </Label>
                        <Input
                            id="cover"
                            type="url"
                            placeholder="https://example.com/cover.jpg"
                            value={bookData.cover}
                            onChange={(e) => onChange('cover', e.target.value)}
                            className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                        />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <Label
                            htmlFor="description"
                            className="text-foreground"
                        >
                            Description
                        </Label>
                        <Textarea
                            id="description"
                            placeholder="Enter book description (optional)"
                            value={bookData.description}
                            onChange={(e) =>
                                onChange('description', e.target.value)
                            }
                            rows={4}
                            className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                        />
                    </div>

                    {/* Submit */}
                    <Button
                        type="submit"
                        className="w-full cursor-pointer bg-accent text-accent-foreground hover:bg-accent/90"
                        size="lg"
                        disabled={processing}
                    >
                        <Plus className="mr-2 h-4 w-4" />
                        {processing ? 'Adding...' : 'Add Book to Library'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
