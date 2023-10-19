interface Author {
  id: string
  email: string
  name: string
  image: string
}

interface Story {
  id?: string
  title: string
  author: Author | string
  tags: string[]
  content: string
  created?: string
}

interface StoryFilters {
  id?: string
  title?: string
  authorName?: string
  authorId?: string
  tags?: string[]
}
