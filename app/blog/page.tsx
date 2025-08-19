// app/blog/page.tsx
import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import { POSTS_PER_PAGE } from '@/lib/constants'
import { getEnglishPosts, getSortedPosts } from '@/lib/utils/content'

export const metadata = genPageMetadata({ title: 'Blog' })

export default function BlogPage() {
  const englishPosts = getEnglishPosts()
  const posts = getSortedPosts(englishPosts)

  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
