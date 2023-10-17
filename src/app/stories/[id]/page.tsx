"use client"
import StoryCard from "@/components/story-card"
import useStories from "@/lib/utils"
import { Card, Paper } from "@mantine/core"
import React, { useEffect } from "react"

const Page = ({ params }: { params: { id: string } }) => {
  const stories = useStories({ params: { id: params.id } })

  if (stories!.length == 0) return "loading"

  return (
    <Paper>
      <StoryCard story={stories![0]} fullView={true}></StoryCard>
    </Paper>
  )
}

export default Page
