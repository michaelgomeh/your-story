"use client"

import React from "react"
import {
  ActionIcon,
  Affix,
  AppShell,
  Box,
  Burger,
  Button,
  Group,
  Image,
  Text,
  Card,
  Paper,
} from "@mantine/core"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"
import Links from "../app/links"
import Link from "next/link"
import { Book, Plus, ShoppingCart } from "tabler-icons-react"
import { useAtom, useAtomValue } from "jotai"
import { modals } from "@mantine/modals"
import { drawerOpenedAtom } from "@/atoms/atoms"
import { signIn, useSession } from "next-auth/react"

const Shell = ({ children }) => {
  const router = useRouter()
  const { data: session } = useSession()
  const pathname = usePathname()
  let path = pathname
  const [drawerOpened, setDrawerOpened] = useAtom(drawerOpenedAtom)

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "xl",
        collapsed: { mobile: !drawerOpened },
      }}
      padding="md"
      pt={60}
    >
      <AppShell.Header>
        <Group justify="space-between" h="60px" mr="lg">
          <Group h="60px" px="md" align="center">
            <Burger
              opened={drawerOpened}
              onClick={() => setDrawerOpened(!drawerOpened)}
              hiddenFrom="sm"
              size="sm"
            />
            <Box h={24}>
              <Link href="/">
                <Book />
              </Link>
            </Box>
            <Text fs={"italic"}>Your Story</Text>
          </Group>
          {!session?.user && (
            <Button variant="light" onClick={() => signIn()}>
              Sign In
            </Button>
          )}
        </Group>
      </AppShell.Header>
      <AppShell.Navbar py="md" px={4}>
        <Links close={() => setDrawerOpened(false)} />
      </AppShell.Navbar>
      <AppShell.Main p={16} maw={800} mx="auto">
        <AnimatePresence key={path}>
          <motion.div
            key={path}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "anticipate" }}
          >
            <Card mx="auto" withBorder>
              {children}
            </Card>
          </motion.div>
        </AnimatePresence>
      </AppShell.Main>
      {pathname != "/cart" && (
        <Affix position={{ bottom: 32, right: 32 }}>
          <Link href="/create">
            <ActionIcon
              radius="xl"
              size="xl"
              onClick={() => router.push("/create")}
            >
              <Plus />
            </ActionIcon>
          </Link>
        </Affix>
      )}
    </AppShell>
  )
}

export default Shell
