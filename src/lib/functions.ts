"use server"

import { getXataClient } from "@/xata"
const xata = getXataClient()

export const getAuthor = async ({ id }: { id: string }) => {
  var res = await xata.db.nextauth_users.read(id)
  console.log(res)

  let author: Author = res as unknown as Author

  return JSON.stringify(author)
}

export const getStories = async ({ params }: { params: StoryFilters }) => {
  let { id, title, authorName, tags, authorId } = params

  var res = await xata.db.stories
    .select(["content", "title", "author.id", "author.name", "xata.createdAt"])
    .filter({
      "author.name": authorName,
      "author.id": authorId,
      title: title,
      id: id,
    })
    .sort("xata.createdAt", "desc")
    .getAll()
  console.log(res)

  let stories: Story[] = res.map((e) =>
    Object({ ...e, created: e.xata.createdAt })
  ) as unknown as Story[]

  return JSON.stringify(stories)
}

export const createStory = async ({ story }: { story: Story }) => {
  let { author, content, created, id, title, tags } = story

  var res = await xata.db.stories.create({
    author: author,
    content: content,
    tags: tags,
    title: title,
  })
  console.log(res)

  return JSON.stringify(res)
}
