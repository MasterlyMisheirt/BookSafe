import { Button } from '@/old_components/ui/button';
import { login } from '@/routes';
import { Link } from '@inertiajs/react';
import { BookOpen } from 'lucide-react';
import { siGithub } from 'simple-icons';

export function LandingHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div
                        data-aos="fade-down"
                        className="mb-8 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
                    >
                        <svg
                            className="h-4 w-4 fill-current"
                            viewBox="0 0 24 24"
                        >
                            <path d={siGithub.path} />
                        </svg>
                        Free & Open Source
                    </div>
                    <div data-aos="fade-out">
                        <h1 className="mb-6 font-serif text-5xl font-bold text-balance text-foreground sm:text-6xl lg:text-7xl">
                            Your Personal Digital Library
                        </h1>

                        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl">
                            Track your reading progress anywhere, on any device.
                            Whether you're at home or on holiday, catch up on
                            your reading list with this free and open-source
                            book organizer powered by Google Books.
                        </p>

                        <nav className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link href={login()} prefetch>
                                <Button
                                    size="lg"
                                    className="cursor-pointer px-8 text-base"
                                >
                                    <BookOpen className="mr-2 h-5 w-5" />
                                    Start Organising
                                </Button>
                            </Link>
                            <a
                                href="https://github.com/MasterlyMisheirt/BookSafe"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="cursor-pointer bg-transparent px-8 text-base"
                                >
                                    <svg
                                        className="h-4 w-4 fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d={siGithub.path} />
                                    </svg>
                                    Learn More
                                </Button>
                            </a>
                        </nav>
                    </div>
                    <div
                        data-aos="fade-up"
                        className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3"
                    >
                        <div className="p-4 text-center">
                            <div className="mb-2 text-3xl font-bold text-foreground">
                                No Ads
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Just you and your books. No distractions.
                            </div>
                        </div>
                        <div className="p-4 text-center">
                            <div className="mb-2 text-3xl font-bold text-foreground">
                                Sync Everywhere
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Access your lists from any device, anytime,
                                anywhere.
                            </div>
                        </div>
                        <div className="p-4 text-center">
                            <div className="mb-2 text-3xl font-bold text-foreground">
                                Auto Add
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Store books faster and smarter, no manual entry
                                needed.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
