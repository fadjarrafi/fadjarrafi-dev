// lib/constants.ts
import { SupportedLanguage } from '@/types'

export const POSTS_PER_PAGE = 5
export const MAX_DISPLAY_POSTS = 5

export const ROUTES = {
  HOME: '/',
  BLOG: '/blog',
  ABOUT: '/about',
  PROJECTS: '/projects',
  WORK: '/work',
  TAGS: '/tags',
} as const

export const SUPPORTED_LANGUAGES: readonly SupportedLanguage[] = ['en', 'id'] as const

export const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
} as const

export const LANGUAGE_CONFIG = {
  en: { name: 'English', flag: '🇺🇸' },
  id: { name: 'Bahasa Indonesia', flag: '🇮🇩' }
} as const
