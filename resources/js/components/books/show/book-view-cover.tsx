import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type ReadingStatus = 'reading' | 'read' | 'want-to-read';

interface BookViewCoverProps {
    thumbnail?: string;
    title: string;
    status: ReadingStatus;
    onStatusChange: (status: ReadingStatus) => void;
}

export function BookViewCover({
    thumbnail,
    title,
    status,
    onStatusChange,
}: BookViewCoverProps) {
    const getStatusLabel = (status: ReadingStatus) => {
        switch (status) {
            case 'reading':
                return 'Currently Reading';
            case 'read':
                return 'Read';
            case 'want-to-read':
                return 'Want to Read';
            default:
                return 'Add to Shelf';
        }
    };

    const getStatusColor = (status: ReadingStatus) => {
        switch (status) {
            case 'reading':
                return 'bg-accent text-accent-foreground hover:bg-accent/90';
            case 'read':
                return 'bg-primary text-primary-foreground hover:bg-primary/90';
            case 'want-to-read':
                return 'bg-secondary text-secondary-foreground hover:bg-secondary/90';
            default:
                return '';
        }
    };

    return (
        <div className="lg:col-span-1">
            <Card className="sticky top-8 overflow-hidden p-0">
                <CardContent className="p-0">
                    <div className="relative aspect-[2/3] overflow-hidden bg-muted">
                        <img
                            src={thumbnail || '/placeholder.png'}
                            alt={title}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </CardContent>
                <CardContent className="p-6">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant={status ? 'secondary' : 'default'}
                                size="lg"
                                className={`w-full ${status ? getStatusColor(status) : ''}`}
                            >
                                {getStatusLabel(status)}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" className="w-56">
                            <DropdownMenuItem
                                onClick={() => onStatusChange('reading')}
                            >
                                Currently Reading
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => onStatusChange('read')}
                            >
                                Read
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => onStatusChange('want-to-read')}
                            >
                                Want to Read
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </CardContent>
            </Card>
        </div>
    );
}
