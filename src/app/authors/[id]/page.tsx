"use client"
import React from "react"
import { Card, Stack } from "@mantine/core"
import { Avatar, Text, Button, Paper } from "@mantine/core"
import StoryList from "@/components/storyList"
import { useAuthor } from "@/lib/hooks"
import { useSession } from "next-auth/react"

const Page = ({ params }: { params: { id: string } }) => {
  const { data: session } = useSession()

  const author = useAuthor({ id: params.id })
  if (!author) return "Loading..."
  return (
    <Stack gap={8}>
      <Avatar src={author?.image} size={120} radius={120} mx="auto" />
      <Text ta="center" fz="lg" fw={500}>
        {author?.name}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        {`${author?.email}   •   Writer`}
      </Text>
      <StoryList params={{ authorId: author!.id }} />
    </Stack>
  )
}

export default Page
