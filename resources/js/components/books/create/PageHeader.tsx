interface PageHeaderProps {
    title: string;
    description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
    return (
        <div className="mb-8">
            <h1 className="mb-2 font-serif text-4xl font-bold text-foreground">
                {title}
            </h1>
            <p className="text-lg text-muted-foreground">{description}</p>
        </div>
    );
}
