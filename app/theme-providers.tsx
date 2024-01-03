'use client'

import { ThemeProvider } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'

export async function ThemeProviders({ children }: { children: React.ReactNode }) {
  await new Promise((resolve) => setTimeout(resolve, 1200))
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
      {children}
    </ThemeProvider>
  )
}
