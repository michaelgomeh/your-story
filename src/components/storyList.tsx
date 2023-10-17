"use client"
import useStories from "@/lib/utils"
import { Stack } from "@mantine/core"
import React from "react"
import StoryCard from "./story-card"

const StoryList = ({ params }: { params: StoryFilters }) => {
  const stories = useStories({ params: params })
  return (
    <Stack>
      {stories!.map((e) => (
        <StoryCard key={e.id} story={e} fullView={false} />
      ))}
    </Stack>
  )
}

export default StoryList
