import { Card } from '@/components/ui/card';
import {
    BookMarked,
    Globe,
    LayoutPanelLeft,
    Route,
    SearchCheck,
    Zap,
} from 'lucide-react';

export function LandingFeatures() {
    const features = [
        {
            icon: SearchCheck,
            title: 'Search Google Books',
            description:
                'Find your book using the extensive library of Google Books. Search by title, author, or ISBN.',
        },
        {
            icon: BookMarked,
            title: 'Track Currently Reading',
            description:
                "Keep your active reads organised in one place. Never forget which book you're in the middle of.",
        },
        {
            icon: Route,
            title: 'Reading Journey',
            description:
                "Track what you've read and plan what to read next. Reflect on your progress and future goals.",
        },
        {
            icon: Globe,
            title: 'Access Your Lists Anywhere',
            description:
                "Save books to your wishlist and access it on any device. Perfect when you're travelling or on the go.",
        },
        {
            icon: Zap,
            title: 'Fast & Convenient',
            description:
                'Add books manually or let Google Books do it for you with instant titles, covers and details.',
        },
        {
            icon: LayoutPanelLeft,
            title: 'Simple & Minimalist',
            description:
                'No clutter, no overwhelming features. Just the essentials you need to organise your reading life.',
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
                            data-aos="fade-in"
                            key={index}
                            className="bg-background p-6 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-lg"
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
