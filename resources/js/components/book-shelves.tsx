"use client"

import { BookOpen, BookMarked, Library } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BookShelves() {
  const shelves = [
    {
      title: "Currently Reading",
      icon: BookOpen,
      count: 0,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: "Read",
      icon: BookMarked,
      count: 0,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Want to Read",
      icon: Library,
      count: 0,
      color: "text-muted-foreground",
      bgColor: "bg-muted",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">Your Shelves</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {shelves.map((shelf) => {
            const Icon = shelf.icon
            return (
              <Card key={shelf.title} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className={`${shelf.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-3`}>
                    <Icon className={`h-6 w-6 ${shelf.color}`} />
                  </div>
                  <CardTitle className="text-lg font-serif">{shelf.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-foreground">{shelf.count}</p>
                  <p className="text-sm text-muted-foreground mt-1">{shelf.count === 1 ? "book" : "books"}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
