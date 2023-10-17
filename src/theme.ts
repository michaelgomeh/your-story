"use client"

import { MantineColorsTuple, createTheme } from "@mantine/core"

const flower: MantineColorsTuple = [
  "#ffeaf3",
  "#fdd4e1",
  "#f4a7bf",
  "#ec779c",
  "#e64f7e",
  "#e3356b",
  "#e22762",
  "#c91a52",
  "#b41149",
  "#9f003e",
]

export const theme = createTheme({
  primaryColor: "flower",
  colors: {
    flower: flower,
  },
})
