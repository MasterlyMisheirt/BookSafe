"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function BookSearch() {
  return (
      <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto mb-12 max-w-2xl">
                  <div className="relative">
                      <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                      <Input
                          type="text"
                          placeholder="Search for books by title, author, or ISBN..."
                          className="h-12 pl-10 text-base"
                      />
                  </div>
              </div>
          </div>
      </section>
  );
}
