import { useEffect, useState } from "react"
import { getAuthor, getStories } from "./functions"

export const useStories = ({ params }: { params: StoryFilters }) => {
  const [stories, setStories] = useState<Story[] | null>([])

  const fetch = async () => {
    let res = JSON.parse(await getStories({ params }))
    setStories(res)
  }

  useEffect(() => {
    fetch()
  }, [])

  return stories
}

export const useAuthor = ({ id }: { id: string }) => {
  const [author, setAuthor] = useState<Author | undefined>(undefined)

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        let res = JSON.parse(await getAuthor({ id }))

        const authorData = res as Author
        setAuthor(authorData)
      } catch (error) {
        console.error("Error fetching author:", error)
      }
    }

    if (id) {
      fetchAuthor()
    }
  }, [id])

  return author
}
