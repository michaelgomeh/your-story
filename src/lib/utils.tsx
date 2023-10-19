import { useState, useEffect } from "react"
import { getAuthor, getStories } from "./functions"
import dayjs from "dayjs"

export const formatStoryCreationDate = (creationDate) => {
  const now = dayjs()
  const storyDate = dayjs(creationDate)
  const daysAgo = now.diff(storyDate, "day")

  if (daysAgo === 0) {
    return "Today"
  } else if (daysAgo <= 7) {
    return `${daysAgo} days ago`
  } else if (daysAgo <= 30) {
    return storyDate.format("D.M")
  } else return storyDate.format("D.M.YY")
}
