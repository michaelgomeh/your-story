"use server"

import { getXataClient } from "@/xata"

export const getStories = async ({ params }: { params: StoryFilters }) => {
  let { id, title, authorName, tags } = params
  const xata = getXataClient()

  var res = await xata.db.stories
    .select(["content", "title", "author.id", "author.name"])
    .filter({ "author.name": authorName, title: title, id: id })
    .sort("xata.createdAt", "desc")
    .getAll()
  console.log(res)

  let stories: Story[] = res as unknown as Story[]

  return JSON.stringify(stories)
}
