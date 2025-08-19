// app/theme-providers.tsx
'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'
import siteMetadata from '@/data/siteMetadata'

interface ThemeProvidersProps {
  children: ReactNode
}

export async function ThemeProviders({ children }: ThemeProvidersProps) {
  await new Promise((resolve) => setTimeout(resolve, 1200))
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
      {children}
    </ThemeProvider>
  )
}
