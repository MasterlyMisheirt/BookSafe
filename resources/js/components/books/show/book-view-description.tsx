import { Card, CardContent } from "@/components/ui/card"

interface BookViewDescriptionProps {
  description: string
}

export function BookViewDescription({ description }: BookViewDescriptionProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="font-serif text-xl font-semibold text-foreground mb-4">Description</h2>
        <div
          className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </CardContent>
    </Card>
  )
}
