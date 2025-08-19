// components/LanguageSwitcher.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LanguageSwitcherProps } from '@/types/components'
import { toggleLanguagePath } from '@/lib/utils/paths'

export default function LanguageSwitcher({ currentPath }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)
  const currentLang = segments[1] // 'en' or 'id'

  const newPath = toggleLanguagePath(pathname)

  return (
    <Link
      href={newPath}
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {currentLang === 'en' ? 'Baca dalam Bahasa Indonesia' : 'Read in English'}
    </Link>
  )
}
