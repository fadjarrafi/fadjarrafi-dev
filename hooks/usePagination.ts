// hooks/usePagination.ts
import { useMemo } from 'react'
import { POSTS_PER_PAGE } from '@/lib/constants'

interface UsePaginationParams {
  totalItems: number
  currentPage: number
  itemsPerPage?: number
}

interface PaginationResult {
  totalPages: number
  startIndex: number
  endIndex: number
  hasNextPage: boolean
  hasPrevPage: boolean
  pageNumbers: number[]
  visiblePages: number[]
}

export function usePagination({
  totalItems,
  currentPage,
  itemsPerPage = POSTS_PER_PAGE,
}: UsePaginationParams): PaginationResult {
  return useMemo(() => {
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems)

    // Generate all page numbers
    const pageNumbers: number[] = Array.from({ length: totalPages }, (_, i) => i + 1)

    // Generate visible page numbers (for pagination UI)
    const visiblePages: number[] = []
    const delta = 2 // Show 2 pages before and after current page

    for (
      let i = Math.max(1, currentPage - delta);
      i <= Math.min(totalPages, currentPage + delta);
      i++
    ) {
      visiblePages.push(i)
    }

    return {
      totalPages,
      startIndex,
      endIndex,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1,
      pageNumbers,
      visiblePages,
    }
  }, [totalItems, currentPage, itemsPerPage])
}
