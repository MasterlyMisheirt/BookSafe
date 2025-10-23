import { BookOpen, Calendar, Tag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface BookViewInfoProps {
  publisher?: string
  publishedDate?: string
  pageCount?: number
  language?: string
}

export function BookViewInfo({ publisher, publishedDate, pageCount, language }: BookViewInfoProps) {
  return (
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
  )
}
