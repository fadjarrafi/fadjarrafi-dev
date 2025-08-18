import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import LanguageSwitcher from '@/components/LanguageSwitcher'

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}`
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, tags } = content
  const basePath = path.split('/')[0]

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <ScrollTopAndComment />

      <article>
        {/* Header */}
        <header className="mb-12">
          <div className="mb-4">
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <time dateTime={date}>
                {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
              </time>
            </p>
            <h1 className="text-2xl font-bold leading-tight text-gray-900 dark:text-gray-100">
              {title}
            </h1>
          </div>

          {/* Author Info */}
          <div className="mb-6 flex items-center gap-3">
            {authorDetails.map((author) => (
              <div key={author.name} className="flex items-center gap-2">
                {author.avatar && (
                  <Image
                    src={author.avatar}
                    width={32}
                    height={32}
                    alt="avatar"
                    className="h-8 w-8 rounded-full"
                  />
                )}
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {author.name}
                  </p>
                  {author.twitter && (
                    <Link
                      href={author.twitter}
                      className="text-xs text-gray-500 transition-colors hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400"
                    >
                      {author.twitter.replace('https://twitter.com/', '@')}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="mb-6">
            <LanguageSwitcher currentPath={path} />
          </div>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="mb-8">
              <div className="flex flex-wrap gap-1">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Content */}
        <div className="prose prose-sm mb-12 max-w-none text-gray-600 dark:prose-invert dark:text-gray-400">
          {children}
        </div>

        {/* Navigation */}
        {(next || prev) && (
          <div className="mb-12 border-t border-gray-200 pt-8 dark:border-gray-700">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {prev && prev.path && (
                <div>
                  <p className="mb-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Previous Article
                  </p>
                  <Link
                    href={`/${prev.path}`}
                    className="text-sm font-medium text-gray-900 transition-colors hover:text-lime-500 dark:text-gray-100 dark:hover:text-lime-400"
                  >
                    {prev.title}
                  </Link>
                </div>
              )}
              {next && next.path && (
                <div className={prev ? 'text-right' : ''}>
                  <p className="mb-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Next Article
                  </p>
                  <Link
                    href={`/${next.path}`}
                    className="text-sm font-medium text-gray-900 transition-colors hover:text-lime-500 dark:text-gray-100 dark:hover:text-lime-400"
                  >
                    {next.title}
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Back to Blog */}
        <div className="border-t border-gray-200 pt-8 dark:border-gray-700">
          <Link
            href={`/${basePath}`}
            className="text-sm text-gray-500 underline transition-colors hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400"
            aria-label="Back to the blog"
          >
            ← Back to the blog
          </Link>
        </div>
      </article>
    </div>
  )
}
