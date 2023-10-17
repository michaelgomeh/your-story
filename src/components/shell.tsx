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
import { useDisclosure } from "@mantine/hooks"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Links from "../app/links"
import Link from "next/link"
import { Book, Plus, ShoppingCart } from "tabler-icons-react"
import { useAtom, useAtomValue } from "jotai"
import { modals } from "@mantine/modals"

const Shell = ({ children }) => {
  const [opened, { toggle }] = useDisclosure()

  const pathname = usePathname()
  let path = pathname

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "xl",
        collapsed: { mobile: !opened },
      }}
      padding="md"
      pt={60}
    >
      <AppShell.Header>
        <Group
          h="60px"
          px="md"
          justify="space-between"
          style={{ width: "100vw" }}
        >
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Link href="/">
              <Book />
            </Link>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar py="md" px={4}>
        <Links />
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
              onClick={() =>
                modals.openContextModal({
                  modal: "cartModal",
                  title: "Your Cart",
                  innerProps: {},
                })
              }
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
