// types/index.ts
export type SupportedLanguage = 'en' | 'id'

export interface ProjectData {
  title: string
  description: string
  imgSrc: string
  slug: string
  techImg: Record<string, string>
}

export interface SnippetData {
  title: string
  description: string
  imgSrc: string
  href: string
}

export interface HeaderNavLink {
  href: string
  title: string
}

export interface TagData {
  [tagName: string]: number
}

export interface TechStack {
  name: string
  icon: string
}

export interface PostNavigation {
  path: string
  title: string
}

export interface PaginationData {
  currentPage: number
  totalPages: number
}
