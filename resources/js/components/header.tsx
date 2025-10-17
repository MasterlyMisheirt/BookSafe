import { Button } from '@/components/ui/button';
import AppLogo from '@/old_components/app-logo';
import { logout } from '@/routes';
import { Link } from '@inertiajs/react';

export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <AppLogo />

                    <nav className="hidden items-center gap-6 md:flex">
                        <a
                            href="#"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            My Library
                        </a>
                    </nav>
                    <>
                        <Link href={logout()} prefetch>
                            <Button
                                variant="destructive"
                                size="sm"
                                className="cursor-pointer"
                            >
                                Log out
                            </Button>
                        </Link>
                    </>
                </div>
            </div>
        </header>
    );
}
