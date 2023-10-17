import {
  Card,
  Title,
  Text,
  Group,
  Stack,
  Spoiler,
  ActionIcon,
} from "@mantine/core"
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
  return (
    <Card withBorder component="a" href={`/stories/${id}`}>
      <Stack>
        <Group justify="space-between">
          <Text>{title}</Text>
          <Text size="sm" c="gray">
            {author?.name ?? "anonymus"}
          </Text>
        </Group>
        <Text>
          {!fullView && content.length > 100
            ? content.substring(0, 100) + "..."
            : content}
        </Text>
        {/* <Spoiler
          hideLabel={
            <ActionIcon radius="xl">
              <CaretUp />
            </ActionIcon>
          }
          showLabel={
            <ActionIcon radius="xl">
              <CaretDown />
            </ActionIcon>
          }
          maxHeight={50}
        >
          {content}
        </Spoiler> */}
      </Stack>
    </Card>
  )
}

export default StoryCard
