// app/blog/page/[page]/page.tsx
import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'

const POSTS_PER_PAGE = 5

export const generateStaticParams = async () => {
  // Filter English posts for pagination
  const englishPosts = allBlogs.filter((post) => post._raw.flattenedPath.startsWith('blog/en/'))
  const totalPages = Math.ceil(englishPosts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))

  return paths
}

export default function Page({ params }: { params: { page: string } }) {
  // Filter English posts
  const englishPosts = allBlogs.filter((post) => post._raw.flattenedPath.startsWith('blog/en/'))
  const sortedPosts = sortPosts(englishPosts)
  const posts = allCoreContent(sortedPosts)

  const pageNumber = parseInt(params.page as string)
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
