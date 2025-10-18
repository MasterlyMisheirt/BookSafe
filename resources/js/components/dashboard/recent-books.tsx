import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, PlusCircle } from "lucide-react"
import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

export function RecentBooks() {
  return (
      <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
              <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                      Recent Activity
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                      Your latest reading updates
                  </p>
              </div>
              <Link href={route('books.create')} prefetch>
                  <Button
                      variant="outline"
                      size="sm"
                      className="border-border bg-transparent text-foreground hover:bg-muted cursor-pointer"
                  >
                      <PlusCircle className="h-4 w-4" />
                      Add Book
                  </Button>
              </Link>
          </div>

          <Card className="border-border bg-card p-12">
              <div className="flex flex-col items-center justify-center text-center">
                  <div className="mb-4 rounded-full bg-muted p-4">
                      <Clock className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                      No recent activity
                  </h3>
                  <p className="mb-6 max-w-md text-sm text-muted-foreground">
                      Start adding books to your library to see your reading
                      activity here
                  </p>
                  <Link href={route('books.create')} prefetch>
                      <Button className="bg-accent text-accent-foreground hover:bg-accent/90 cursor-pointer">
                          <PlusCircle className="h-4 w-4" />
                          Add Your First Book
                      </Button>
                  </Link>
              </div>
          </Card>
      </div>
  );
}
