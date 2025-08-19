// types/components.ts
import { ReactNode, HTMLAttributes } from 'react'
import { ImageProps } from 'next/image'
import type { Authors, Blog, Project } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'
import { PostNavigation, PaginationData } from './index'

// Layout Props
export interface PostLayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: PostNavigation
  prev?: PostNavigation
  children: ReactNode
}

export interface ProjectLayoutProps {
  content: CoreContent<Project>
  children: ReactNode
}

export interface AuthorLayoutProps {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationData
}

// Component Props
export interface CardProps {
  title: string
  description: string
  imgSrc: string
  slug: string
  techImg?: Record<string, string>
}

export interface HorizontalCardProps {
  title: string
  description: string
  imgSrc: string
  href: string
}

export interface TagProps {
  text: string
}

export interface CommentsProps {
  slug: string
}

export interface LanguageSwitcherProps {
  currentPath: string
}

// SEO Props
export interface PageSEOProps {
  title: string
  description?: string
  image?: string
  path?: string
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  type?: 'article' | 'website'
  locale?: string
}

// Social Icon Props
export type SocialIconKind =
  | 'mail'
  | 'github'
  | 'facebook'
  | 'youtube'
  | 'linkedin'
  | 'twitter'
  | 'mastodon'
  | 'instagram'

export interface SocialIconProps {
  kind: SocialIconKind
  href: string | undefined
  size?: number
}

// Loading Component Props
export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

// Optimized Image Props
export interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallbackSrc?: string
  showLoader?: boolean
}
