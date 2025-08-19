// lib/utils/paths.ts
export const createEditUrl = (path: string, siteRepo: string): string =>
  `${siteRepo}/blob/main/data/${path}`

export const createDiscussUrl = (path: string, siteUrl: string): string =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteUrl}/${path}`)}`

export const getBasePath = (path: string): string => path.split('/')[0]

export const toggleLanguagePath = (currentPath: string): string => {
  const segments = currentPath.split('/').filter(Boolean)
  if (segments.length < 2) return currentPath

  const currentLang = segments[1]
  const newLang = currentLang === 'en' ? 'id' : 'en'
  const postPath = segments.slice(2).join('/')

  return `/blog/${newLang}/${postPath}`
}

export const extractSlugFromPath = (path: string): string => {
  const segments = path.split('/').filter(Boolean)
  return segments.slice(1).join('/')
}
