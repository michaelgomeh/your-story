import {
  Title,
  Text,
  Group,
  Stack,
  Spoiler,
  ActionIcon,
  Card,
} from "@mantine/core"
import Link from "next/link"
import React, { useState } from "react"
import { ArrowDown, CaretDown, CaretUp } from "tabler-icons-react"

const StoryCard = ({
  story,
  fullView,
}: {
  story: Story
  fullView: boolean
}) => {
  console.log("xx", story)
  let { author, content, id, title } = story

  const [showLabel, setShowLabel] = useState(false)

  const Body = () => (
    <Stack p="sm">
      <Group justify="space-between">
        <Text size="lg">{title}</Text>
        <Link href={`/authors/${author.id}`}>
          <Text size="sm" c="gray">
            {author?.name ?? "anonymus"}
          </Text>
        </Link>
      </Group>
      <Text ta="justify">
        {!fullView && content.length > 100
          ? content.substring(0, 100) + "..."
          : content}
      </Text>
    </Stack>
  )
  if (fullView) return <Body />
  return (
    <Card component="a" href={`/stories/${id}`}>
      <Body />
    </Card>
  )
}

export default StoryCard
