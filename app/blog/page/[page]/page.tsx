// app/blog/page/[page]/page.tsx
import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { POSTS_PER_PAGE } from '@/lib/constants'
import { getEnglishPosts, getSortedPosts } from '@/lib/utils/content'

export const generateStaticParams = async () => {
  const englishPosts = getEnglishPosts()
  const totalPages = Math.ceil(englishPosts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))

  return paths
}

interface PageProps {
  params: { page: string }
}

export default function Page({ params }: PageProps) {
  const englishPosts = getEnglishPosts()
  const posts = getSortedPosts(englishPosts)

  const pageNumber = parseInt(params.page)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
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
