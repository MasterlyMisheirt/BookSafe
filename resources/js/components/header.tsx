import { BookOpen } from "lucide-react"
import { Link } from '@inertiajs/react';
import { Button } from "@/components/ui/button"
import { logout } from "@/routes"

export function Header() {
  return (
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center gap-2">
                      <BookOpen className="h-6 w-6 text-accent" />
                      <span className="font-serif text-xl font-semibold text-foreground">
                          Bookshelf
                      </span>
                  </div>

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
