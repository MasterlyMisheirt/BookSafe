import { Badge } from '@/components/ui/badge';

interface BookViewDetailsProps {
    title: string;
    authors?: string[];
    categories?: string[];
}

export function BookViewDetails({
    title,
    authors,
    categories,
}: BookViewDetailsProps) {
    return (
        <div>
            <h1 className="heading-primary">{title}</h1>
            {authors && authors.length > 0 && (
                <p className="mb-4 text-xl text-muted-foreground">
                    by {authors.join(', ')}
                </p>
            )}

            {categories && categories.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                    {categories.map((category, index) => (
                        <Badge key={index} variant="secondary">
                            {category}
                        </Badge>
                    ))}
                </div>
            )}
        </div>
    );
}
