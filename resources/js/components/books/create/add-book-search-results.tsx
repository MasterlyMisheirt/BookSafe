import { Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Book {
  id: string
  volumeInfo: {
    title: string
    authors?: string[]
    publishedDate?: string
    description?: string
    imageLinks?: {
      thumbnail?: string
      smallThumbnail?: string
    }
    categories?: string[]
  }
}

interface AddBookSearchResultsProps {
  books?: Book[]
  isLoading: boolean
  hasSearched: boolean
  onBookSelect: (book: Book) => void
}

export function AddBookSearchResults({ books, isLoading, hasSearched, onBookSelect }: AddBookSearchResultsProps) {
  if (isLoading) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Searching books...</p>
      </div>
    )
  }

  if (books && books.length > 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {books.map((book) => (
          <Card
            key={book.id}
            className="cursor-pointer bg-card border-border hover:border-accent hover:shadow-md transition-all"
            onClick={() => onBookSelect(book)}
          >
            <CardContent className="p-4">
              <div className="flex gap-4">
                {book.volumeInfo.imageLinks?.thumbnail && (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail || "/placeholder.svg"}
                    alt={book.volumeInfo.title}
                    className="w-16 h-24 object-cover rounded"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm line-clamp-2 mb-1 text-foreground">{book.volumeInfo.title}</h3>
                  {book.volumeInfo.authors && (
                    <p className="text-xs text-muted-foreground line-clamp-1">{book.volumeInfo.authors.join(", ")}</p>
                  )}
                  {book.volumeInfo.publishedDate && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(book.volumeInfo.publishedDate).getFullYear()}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (books && books.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No books found. Try a different search term.</p>
      </div>
    )
  }

  if (!hasSearched) {
    return (
      <div className="text-center py-12">
        <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground">Start typing to search for books</p>
      </div>
    )
  }

  return null
}
