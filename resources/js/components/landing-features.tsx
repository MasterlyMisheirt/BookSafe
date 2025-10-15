import { Card } from '@/components/ui/card';
import {
    BookMarked,
    BookOpen,
    Globe,
    Library,
    Search,
    Zap,
} from 'lucide-react';

export function LandingFeatures() {
    const features = [
        {
            icon: Search,
            title: 'Search Google Books',
            description:
                "Find any book instantly using Google Books' comprehensive database. Search by title, author, or ISBN.",
        },
        {
            icon: BookOpen,
            title: 'Track Currently Reading',
            description:
                "Keep your active reads organized in one place. Never forget which book you're in the middle of.",
        },
        {
            icon: BookMarked,
            title: 'Mark as Read',
            description:
                "Build your personal reading history. Look back on everything you've accomplished.",
        },
        {
            icon: Library,
            title: 'Want to Read List',
            description:
                "Save books for later and access your wishlist anywhere, perfect when you're on the go or travelling.",
        },
        {
            icon: Globe,
            title: 'Access Anywhere',
            description:
                'Works on desktop, tablet, and mobile. Your reading lists follow you wherever you go.',
        },
        {
            icon: Zap,
            title: 'Fast & Convenient',
            description:
                'Add books manually or let Google Books do it for you with instant titles, covers and details.',
        },
    ];

    return (
        <section className="bg-muted/30 py-20 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 font-serif text-4xl font-bold text-foreground sm:text-5xl">
                        Why Choose BookSafe?
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-pretty text-muted-foreground">
                        A book organiser that respects your privacy, works
                        everywhere, and costs nothing.
                    </p>
                </div>

                <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="bg-background p-6 transition-shadow hover:shadow-lg"
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                                <feature.icon className="h-6 w-6 text-accent" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-foreground">
                                {feature.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {feature.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
