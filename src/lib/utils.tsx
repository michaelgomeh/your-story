import { getStories } from "@/app/api/get-stories"
import { useState, useEffect } from "react"

const useStories = ({ params }: { params: StoryFilters }) => {
  const [stories, setStories] = useState<Story[] | null>([])

  const init = async () => {
    let res = JSON.parse(await getStories({ params }))
    setStories(res)
  }

  useEffect(() => {
    init()
  }, [])

  return stories
}

export default useStories
