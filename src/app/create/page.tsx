"use client"
import React from "react"
import { Button, Group, MultiSelect, Stack, Textarea } from "@mantine/core"

import { useEffect } from "react"
import { useForm } from "@mantine/form"
import { TextInput, Checkbox, Box } from "@mantine/core"
import { createStory } from "@/lib/functions"
import { useSession } from "next-auth/react"

interface FormValues {
  title: string
  content: string
  tags: string[]
}

const Page = () => {
  const { data: session } = useSession()
  const form = useForm<FormValues>({
    initialValues: { title: "", content: "", tags: [] },
  })

  const submit = () => {
    let story = form.values
    createStory({
      story: {
        author: session?.user?.id ?? "anonymus",
        ...story,
      },
    })
  }

  return (
    <Stack>
      <Textarea
        label="Title"
        placeholder="The Little Price"
        {...form.getInputProps("title")}
      />
      <Textarea
        label="Content"
        placeholder="Once upon a time..."
        {...form.getInputProps("content")}
      />
      <MultiSelect
        label="Choose Tags"
        placeholder="Pick Some"
        data={[
          "Adventure",
          "Community",
          "Tradition",
          "Romance",
          "Rediscovery",
          "Fantasy",
          "Magic",
        ]}
        {...form.getInputProps("tags")}
      />
      <Group justify="end">
        <Button onClick={submit}>Upload</Button>
      </Group>
    </Stack>
  )
}

export default Page
