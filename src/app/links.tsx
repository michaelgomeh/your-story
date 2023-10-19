"use client"
import { Button, Flex, Stack, Text } from "@mantine/core"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"

type Urls = { [key: string]: string }
const Links = ({ close }: { close: () => void }) => {
  const { data: session } = useSession()

  const router = useRouter()
  const urls: Urls = {
    Home: "/",
    Stories: "/stories",
    About: "/about",
  }

  return (
    <Stack justify="space-between" h="100%" mb="lg" align="center">
      <Stack align="center">
        {Object.keys(urls).map((e) => (
          <Link href={urls[e]} onClick={close} key={e}>
            <Text>{e}</Text>
          </Link>
        ))}
      </Stack>
      {session?.user && (
        <Button
          variant="outline"
          onClick={() => {
            close()
            signOut()
          }}
        >
          SignOut
        </Button>
      )}
    </Stack>
  )
}

export default Links
