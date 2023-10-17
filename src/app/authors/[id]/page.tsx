"use client"
import React from "react"
import { Card, Stack } from "@mantine/core"
import { Avatar, Text, Button, Paper } from "@mantine/core"
import useStories from "@/lib/utils"
import StoryList from "@/components/storyList"

const Page = () => {
  return (
    <Stack>
      <Avatar
        src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
        size={120}
        radius={120}
        mx="auto"
      />
      <Text ta="center" fz="lg" fw={500} mt="md">
        Jane Fingerlicker
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        jfingerlicker@me.io • Art director
      </Text>
      <StoryList params={{ authorName: "Mike" }} />
    </Stack>
  )
}

export default Page
