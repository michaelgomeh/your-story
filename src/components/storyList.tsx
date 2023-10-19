"use client"
import { Stack } from "@mantine/core"
import React from "react"
import StoryCard from "./story-card"
import { useStories } from "@/lib/hooks"

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
