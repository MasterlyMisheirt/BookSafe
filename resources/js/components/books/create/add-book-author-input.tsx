import { X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface AddBookAuthorInputProps {
  authors: string[]
  onChange: (authors: string[]) => void
  required?: boolean
}

export function AddBookAuthorInput({ authors, onChange, required = false }: AddBookAuthorInputProps) {
  const handleAddAuthor = () => {
    onChange([...authors, ""])
  }

  const handleRemoveAuthor = (index: number) => {
    const newAuthors = authors.filter((_, i) => i !== index)
    onChange(newAuthors.length > 0 ? newAuthors : [""])
  }

  const handleAuthorChange = (index: number, value: string) => {
    const newAuthors = [...authors]
    newAuthors[index] = value
    onChange(newAuthors)
  }

  return (
    <div className="space-y-2">
      <Label className="text-foreground">
        Author{authors.length > 1 ? "s" : ""} {required && "*"}
      </Label>
      <div className="space-y-2">
        {authors.map((author, index) => (
          <div key={index} className="flex gap-2">
            <Input
              placeholder={`Enter author ${authors.length > 1 ? index + 1 : "name"}`}
              value={author}
              onChange={(e) => handleAuthorChange(index, e.target.value)}
              required={required && index === 0}
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
            />
            {authors.length > 1 && (
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => handleRemoveAuthor(index)}
                className="shrink-0 cursor-pointer"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
      </div>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={handleAddAuthor}
        className="w-full cursor-pointer bg-transparent"
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Another Author
      </Button>
    </div>
  )
}
