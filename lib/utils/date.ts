// lib/utils/date.ts
import { formatDate as plinyFormatDate } from 'pliny/utils/formatDate'
import { DATE_FORMAT_OPTIONS } from '@/lib/constants'

export const formatDate = (date: string, locale = 'en-US'): string => {
  return plinyFormatDate(date, locale)
}

export const formatDateLong = (date: string, locale = 'en-US'): string => {
  return new Date(date).toLocaleDateString(locale, DATE_FORMAT_OPTIONS)
}

export const isValidDate = (dateString: string): boolean => {
  const date = new Date(dateString)
  return !isNaN(date.getTime())
}

export const sortByDate = <T extends { date: string }>(items: T[], ascending = false): T[] => {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return ascending ? dateA - dateB : dateB - dateA
  })
}
