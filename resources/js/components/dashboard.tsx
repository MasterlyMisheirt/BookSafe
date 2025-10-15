import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { BookSearch } from "@/components/book-search"
import { BookShelves } from "@/components/book-shelves"

export function Dashboard() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BookSearch />
        <BookShelves />
      </main>
    </div>
  )
}
