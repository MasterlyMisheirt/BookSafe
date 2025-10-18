"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, BookOpen, Calendar, Tag } from "lucide-react"
import { Link } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Spinner } from "./ui/spinner"

interface Book {
  id: string
  volumeInfo: {
    title: string
    authors?: string[]
    publisher?: string
    publishedDate?: string
    description?: string
    pageCount?: number
    categories?: string[]
    imageLinks?: {
      thumbnail?: string
      smallThumbnail?: string
      small?: string
      medium?: string
      large?: string
    }
    language?: string
    previewLink?: string
    infoLink?: string
  }
}

type ReadingStatus = "reading" | "read" | "want-to-read" | null

export function BookView({ bookId }: { bookId: string }) {
  const [book, setBook] = useState<Book | null>(null)
  const [status, setStatus] = useState<ReadingStatus>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
        const data = await response.json()
        setBook(data)
      } catch (error) {
        console.error("Error fetching book:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchBook()
  }, [bookId])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Spinner />
      </div>
    )
  }

  if (!book) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-bold text-foreground mb-4">Book not found</h1>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  const { title, authors, publisher, publishedDate, description, pageCount, categories, imageLinks, language } =
    book.volumeInfo
  const thumbnail = imageLinks?.large || imageLinks?.medium || imageLinks?.small || imageLinks?.thumbnail

  const getStatusLabel = (status: ReadingStatus) => {
    switch (status) {
      case "reading":
        return "Currently Reading"
      case "read":
        return "Read"
      case "want-to-read":
        return "Want to Read"
      default:
        return "Add to Shelf"
    }
  }

  const getStatusColor = (status: ReadingStatus) => {
    switch (status) {
      case "reading":
        return "bg-accent text-accent-foreground hover:bg-accent/90"
      case "read":
        return "bg-primary text-primary-foreground hover:bg-primary/90"
      case "want-to-read":
        return "bg-secondary text-secondary-foreground hover:bg-secondary/90"
      default:
        return ""
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Library
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Book Cover */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden sticky top-8">
              <CardContent className="p-0">
                <div className="aspect-[2/3] bg-muted relative overflow-hidden">
                  {thumbnail ? (
                    <img src={thumbnail || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <BookOpen className="h-24 w-24 text-muted-foreground" />
                    </div>
                  )}
                </div>
              </CardContent>
              <CardContent className="p-6">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant={status ? "secondary" : "default"}
                      size="lg"
                      className={`w-full ${status ? getStatusColor(status) : ""}`}
                    >
                      {getStatusLabel(status)}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-56">
                    <DropdownMenuItem onClick={() => setStatus("reading")}>Currently Reading</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setStatus("read")}>Read</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setStatus("want-to-read")}>Want to Read</DropdownMenuItem>
                    {status && <DropdownMenuItem onClick={() => setStatus(null)}>Remove from Shelf</DropdownMenuItem>}
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
          </div>

          {/* Book Details */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="font-serif text-4xl font-bold text-foreground mb-3">{title}</h1>
              {authors && authors.length > 0 && (
                <p className="text-xl text-muted-foreground mb-4">by {authors.join(", ")}</p>
              )}

              {categories && categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {categories.map((category, index) => (
                    <Badge key={index} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="font-serif text-xl font-semibold text-foreground">Book Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {publisher && (
                    <div className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Publisher</p>
                        <p className="text-base text-foreground">{publisher}</p>
                      </div>
                    </div>
                  )}
                  {publishedDate && (
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Published</p>
                        <p className="text-base text-foreground">{new Date(publishedDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  )}
                  {pageCount && (
                    <div className="flex items-start gap-3">
                      <Tag className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Pages</p>
                        <p className="text-base text-foreground">{pageCount}</p>
                      </div>
                    </div>
                  )}
                  {language && (
                    <div className="flex items-start gap-3">
                      <Tag className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Language</p>
                        <p className="text-base text-foreground">{language.toUpperCase()}</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {description && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-4">Description</h2>
                  <div
                    className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
