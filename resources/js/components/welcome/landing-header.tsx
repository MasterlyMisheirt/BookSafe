import AppLogo from '@/old_components/app-logo';
import { Button } from '@/old_components/ui/button';
import { dashboard, login, register } from '@/routes';
import { Link } from '@inertiajs/react';

export function LandingHeader() {
    return (
        <>
            <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <Link
                            href={dashboard()}
                            prefetch
                            className="flex items-center space-x-2"
                        >
                            <AppLogo />
                        </Link>

                        <nav className="flex items-center gap-3">
                            <Link href={login()} prefetch>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="cursor-pointer"
                                >
                                    Sign In
                                </Button>
                            </Link>
                            <Link href={register()} prefetch>
                                <Button
                                    variant="default"
                                    size="sm"
                                    className="cursor-pointer"
                                >
                                    Get Started
                                </Button>
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
