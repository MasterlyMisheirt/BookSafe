"use client"

import { useState } from "react"
import { BookOpen, Check } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

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

type ReadingStatus = "reading" | "read" | "want-to-read" | null

export function BookCard({ book }: { book: Book }) {
  const [status, setStatus] = useState<ReadingStatus>(null)

  const { title, authors, imageLinks, publishedDate } = book.volumeInfo
  const thumbnail = imageLinks?.thumbnail || imageLinks?.smallThumbnail

  const getStatusLabel = (status: ReadingStatus) => {
    switch (status) {
      case "reading":
        return "Reading"
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
        return "bg-accent text-accent-foreground"
      case "read":
        return "bg-primary text-primary-foreground"
      case "want-to-read":
        return "bg-secondary text-secondary-foreground"
      default:
        return ""
    }
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="aspect-[2/3] bg-muted relative overflow-hidden">
          {thumbnail ? (
            <img src={thumbnail || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <BookOpen className="h-12 w-12 text-muted-foreground" />
            </div>
          )}
          {status && (
            <div className="absolute top-2 right-2">
              <div className={`${getStatusColor(status)} rounded-full p-1.5`}>
                <Check className="h-4 w-4" />
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 p-4">
        <div className="w-full">
          <h3 className="font-serif font-semibold text-base line-clamp-2 text-foreground mb-1">{title}</h3>
          {authors && authors.length > 0 && (
            <p className="text-sm text-muted-foreground line-clamp-1">{authors.join(", ")}</p>
          )}
          {publishedDate && (
            <p className="text-xs text-muted-foreground mt-1">{new Date(publishedDate).getFullYear()}</p>
          )}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={status ? "secondary" : "default"} size="sm" className="w-full">
              {getStatusLabel(status)}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={() => setStatus("reading")}>Currently Reading</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatus("read")}>Read</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatus("want-to-read")}>Want to Read</DropdownMenuItem>
            {status && <DropdownMenuItem onClick={() => setStatus(null)}>Remove from Shelf</DropdownMenuItem>}
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  )
}
