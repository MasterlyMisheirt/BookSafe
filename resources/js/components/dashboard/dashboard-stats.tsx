import { BookOpen, BookMarked, Library, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

export function DashboardStats() {
  const stats = [
    {
      title: "Currently Reading",
      value: "3",
      subtitle: "books in progress",
      icon: BookOpen,
      trend: "+2 this month",
    },
    {
      title: "Books Read",
      value: "24",
      subtitle: "completed this year",
      icon: BookMarked,
      trend: "+5 this month",
    },
    {
      title: "Want to Read",
      value: "47",
      subtitle: "on your wishlist",
      icon: Library,
      trend: "+8 this month",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Welcome back</h1>
        <p className="text-muted-foreground">Here's your reading overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="bg-card border-border p-6 hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-muted p-3 rounded-lg">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-600">
                  <TrendingUp className="h-3 w-3" />
                  <span>{stat.trend}</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
