import { formatStoryCreationDate } from "@/lib/utils"
import {
  Title,
  Text,
  Group,
  Stack,
  Spoiler,
  ActionIcon,
  Card,
} from "@mantine/core"
import dayjs from "dayjs"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { ArrowDown, CaretDown, CaretUp } from "tabler-icons-react"

const StoryCard = ({
  story,
  fullView,
}: {
  story: Story
  fullView: boolean
}) => {
  const router = useRouter()

  let { author, content, id, title } = story

  const [showLabel, setShowLabel] = useState(false)

  const Body = () => (
    <Stack p="sm">
      <Group justify="space-between">
        <Text size="lg">{title}</Text>
        <Text size="sm" c={"dimmed"}>
          {formatStoryCreationDate(story.created)}
        </Text>
      </Group>
      <Group>
        <Text
          size="sm"
          c="dimmed"
          onClick={() => router.push(`/authors/${(author as Author).id}`)}
          style={{ cursor: "pointer" }}
        >
          {author?.name ?? "anonymus"}
        </Text>
      </Group>
      <Text ta="justify" lh={2}>
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
