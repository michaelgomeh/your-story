"use client"
import {
  BackgroundImage,
  Box,
  Button,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core"
import { useViewportSize } from "@mantine/hooks"
import Link from "next/link"
import { Book } from "tabler-icons-react"
import useSWR from "swr"
import { useEffect, useState } from "react"
import StoryCard from "@/components/story-card"
import StoryList from "@/components/storyList"
import { signIn, useSession } from "next-auth/react"
import { createStory } from "@/lib/functions"

export default function HomePage() {
  const { data: session } = useSession()
  return (
    <Stack>
      <h1>Your Story</h1>
      <h2>Recent Stories</h2>
      <StoryList params={{}} />
    </Stack>
  )
}
