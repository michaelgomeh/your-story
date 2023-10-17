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
import { getStories } from "./api/get-stories"
import StoryCard from "@/components/story-card"
import useStories from "@/lib/utils"
import StoryList from "@/components/storyList"

export default function HomePage() {
  // const [stories, setStories] = useState<Story[] | null>([])

  // const init = async () => {
  //   let res = JSON.parse(await getStories())
  //   setStories(res)
  // }

  // useEffect(() => {
  //   init()
  // }, [])

  return (
    <Stack>
      <h1>Recent Stories</h1>
      <StoryList params={{}} />
      {/* <Button onClick={asd}>get</Button> */}
      {/* <Button onClick={createAccount}>creae acc</Button> */}
    </Stack>
  )
}
