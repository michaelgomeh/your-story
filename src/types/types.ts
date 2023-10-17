interface Author {
  email: string
  name: string
  image: string
}

interface Story {
  id: string
  title: string
  author: Author
  content: string
}

interface StoryFilters {
  id?: string
  title?: string
  authorName?: string
  tags?: string[]
}
