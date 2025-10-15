import { Button } from '@/old_components/ui/button';
import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BookOpen } from 'lucide-react';

export function LandingHeader() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center gap-2">
                            <BookOpen className="h-6 w-6 text-accent" />
                            <span className="font-serif text-xl font-semibold text-foreground">
                                BookSafe
                            </span>
                        </div>
                        <nav className="flex items-center gap-3">
                            {auth.user ? (
                                <Link href={dashboard()}>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="cursor-pointer"
                                    >
                                        Dashboard
                                    </Button>
                                </Link>
                            ) : (
                                <>
                                    <Link href={login()}>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="cursor-pointer"
                                        >
                                            Sign In
                                        </Button>
                                    </Link>
                                    <Link href={register()}>
                                        <Button
                                            variant="default"
                                            size="sm"
                                            className="cursor-pointer"
                                        >
                                            Get Started
                                        </Button>
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
