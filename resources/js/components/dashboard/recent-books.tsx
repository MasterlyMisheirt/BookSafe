import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Plus } from "lucide-react"
import { Link } from '@inertiajs/react';

export function RecentBooks() {
  return (
    <div className="mt-8 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-serif font-bold text-foreground">Recent Activity</h2>
          <p className="text-sm text-muted-foreground mt-1">Your latest reading updates</p>
        </div>
        <Link href="/add-book">
          <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-muted bg-transparent">
            <Plus className="h-4 w-4 mr-2" />
            Add Book
          </Button>
        </Link>
      </div>

      <Card className="bg-card border-border p-12">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="bg-muted p-4 rounded-full mb-4">
            <Clock className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">No recent activity</h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-md">
            Start adding books to your library to see your reading activity here
          </p>
          <Link href="/add-book">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Book
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  )
}
