// lib/utils/content.ts
import { allBlogs } from 'contentlayer/generated'
import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { SupportedLanguage } from '@/types'

export const getPostsByLanguage = (language: SupportedLanguage) => {
  return allBlogs.filter((post) => post.path.startsWith(`blog/${language}/`))
}

export const getEnglishPosts = () => getPostsByLanguage('en')

export const getIndonesianPosts = () => getPostsByLanguage('id')

export const getSortedPosts = (posts = allBlogs) => {
  return allCoreContent(sortPosts(posts))
}

export const getPostLanguage = (path: string): SupportedLanguage => {
  const segments = path.split('/')
  const lang = segments[1]
  return lang === 'id' || lang === 'en' ? lang : 'en'
}

export const filterPostsByLanguageAndDraft = (
  language: SupportedLanguage,
  includeDrafts = false
) => {
  return allBlogs.filter((post) => {
    const isCorrectLanguage = post.path.startsWith(`blog/${language}/`)
    const shouldInclude = includeDrafts || !post.draft
    return isCorrectLanguage && shouldInclude
  })
}
