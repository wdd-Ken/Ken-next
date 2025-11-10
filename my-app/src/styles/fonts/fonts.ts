import { Jost } from "next/font/google"

export const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
})

export const fonts = [jost.variable]
