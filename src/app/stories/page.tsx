import StoryList from "@/components/storyList"
import { Stack } from "@mantine/core"
import React from "react"

const Page = () => {
  return (
    <Stack>
      <h1>Recent Stories</h1>
      <StoryList params={{}} />
    </Stack>
  )
}

export default Page
