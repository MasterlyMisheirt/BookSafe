"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { BookCard } from "@/components/book-card"
import { useDebounce } from "@/hooks/use-debounce"
import useSWR from "swr"

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

interface GoogleBooksResponse {
  items?: Book[]
  totalItems: number
}

const fetcher = async (url: string): Promise<GoogleBooksResponse> => {
  const res = await fetch(url)
  if (!res.ok) throw new Error("Failed to fetch books")
  return res.json()
}

export function BookSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const debouncedSearch = useDebounce(searchQuery, 500)

  const { data, isLoading } = useSWR<GoogleBooksResponse>(
    debouncedSearch
      ? `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(debouncedSearch)}&maxResults=12`
      : null,
    fetcher,
  )

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for books by title, author, or ISBN..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
        </div>

        {isLoading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Searching books...</p>
          </div>
        )}

        {data && data.items && data.items.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.items.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}

        {data && data.totalItems === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No books found. Try a different search term.</p>
          </div>
        )}
      </div>
    </section>
  )
}
