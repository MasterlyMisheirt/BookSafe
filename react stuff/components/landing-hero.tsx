import { Button } from "@/components/ui/button"
import { BookOpen, Github } from "lucide-react"

export function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <Github className="h-4 w-4" />
            Free & Open Source
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Your Personal Digital Library
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 text-pretty leading-relaxed max-w-2xl mx-auto">
            Track your reading progress, discover new books, and organize your literary journey. Powered by Google Books
            with millions of titles at your fingertips.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-base px-8">
              <BookOpen className="mr-2 h-5 w-5" />
              Start Organizing
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
              Learn More
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">1M+</div>
              <div className="text-sm text-muted-foreground">Books Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">3</div>
              <div className="text-sm text-muted-foreground">Reading Lists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Free & Open</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
