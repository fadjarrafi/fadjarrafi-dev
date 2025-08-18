'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="flex items-center justify-between border-t border-gray-200 pt-8 dark:border-gray-700">
      <div>
        {prevPage ? (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
            className="text-sm text-gray-500 underline transition-colors hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400"
          >
            ← Previous
          </Link>
        ) : (
          <span className="text-sm text-gray-300 dark:text-gray-600">← Previous</span>
        )}
      </div>

      <span className="text-sm text-gray-500 dark:text-gray-400">
        {currentPage} of {totalPages}
      </span>

      <div>
        {nextPage ? (
          <Link
            href={`/${basePath}/page/${currentPage + 1}`}
            rel="next"
            className="text-sm text-gray-500 underline transition-colors hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400"
          >
            Next →
          </Link>
        ) : (
          <span className="text-sm text-gray-300 dark:text-gray-600">Next →</span>
        )}
      </div>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname() || ''
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Page Title */}
      <div className="mb-16">
        <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h1>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          I learn best by pouring my thoughts into writing. Here's where I share discoveries,
          document my growth, and explore new technologies—usually with a fresh cup of coffee
          nearby.
        </p>
      </div>

      <div className="lg:flex lg:gap-16">
        {/* Sidebar */}
        <div className="mb-12 lg:mb-0 lg:w-64">
          <div className="lg:sticky lg:top-8">
            <h2 className="mb-6 text-sm font-medium text-gray-500 dark:text-gray-400">
              Browse by Topic
            </h2>

            <div className="space-y-3">
              {/* All Posts Link */}
              <div>
                {pathname.startsWith('/blog') && !pathname.includes('/tags/') ? (
                  <span className="text-sm font-medium text-lime-500 dark:text-lime-400">
                    All Posts
                  </span>
                ) : (
                  <Link
                    href="/blog"
                    className="text-sm text-gray-600 transition-colors hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400"
                  >
                    All Posts
                  </Link>
                )}
              </div>

              {/* Tag Links */}
              {sortedTags.map((t) => {
                const tagPath = pathname.split('/tags/')[1]
                const isActive = tagPath === slug(t)

                return (
                  <div key={t}>
                    {isActive ? (
                      <span className="text-sm font-medium text-lime-500 dark:text-lime-400">
                        {t} ({tagCounts[t]})
                      </span>
                    ) : (
                      <Link
                        href={`/tags/${slug(t)}`}
                        className="text-sm text-gray-600 transition-colors hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400"
                        aria-label={`View posts tagged ${t}`}
                      >
                        {t} ({tagCounts[t]})
                      </Link>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:flex-1">
          {/* Posts List */}
          <div className="mb-8 space-y-8">
            {displayPosts.map((post) => {
              const { path, date, title, summary, tags } = post
              return (
                <div key={path}>
                  <Link href={`/${path}`} className="group block">
                    <h3 className="mb-1 font-medium text-gray-900 transition-colors group-hover:text-lime-500 dark:text-gray-100 dark:group-hover:text-lime-400">
                      {title}
                    </h3>
                  </Link>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                  </p>
                  <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">{summary}</p>
                  {/* Tags */}
                  {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Pagination */}
          {pagination && pagination.totalPages > 1 && (
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
          )}
        </div>
      </div>
    </div>
  )
}
