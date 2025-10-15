import { BookMarked, BookOpen, Library, Search } from "lucide-react"
import { Card } from "@/components/ui/card"

export function LandingFeatures() {
  const features = [
    {
      icon: Search,
      title: "Search Millions of Books",
      description: "Access Google Books' vast library with instant search. Find any book by title, author, or ISBN.",
    },
    {
      icon: BookOpen,
      title: "Track Currently Reading",
      description: "Keep track of books you're actively reading and never lose your place in your literary journey.",
    },
    {
      icon: BookMarked,
      title: "Mark as Read",
      description: "Build your reading history and celebrate every book you've completed. Your achievements matter.",
    },
    {
      icon: Library,
      title: "Want to Read List",
      description: "Create your personal reading wishlist. Never forget that book recommendation from a friend.",
    },
  ]

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Everything You Need to Organize Your Reading
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Simple, powerful tools to help you manage your books and track your reading progress.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
