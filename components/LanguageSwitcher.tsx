'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface LanguageSwitcherProps {
  currentPath: string
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentPath }) => {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)
  const currentLang = segments[1] // 'en' or 'id'

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'id' : 'en'
    const postPath = segments.slice(2).join('/')
    return `/blog/${newLang}/${postPath}`
  }

  return (
    <Link
      href={toggleLanguage()}
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {currentLang === 'en' ? 'Baca dalam Bahasa Indonesia' : 'Read in English'}
    </Link>
  )
}

export default LanguageSwitcher
