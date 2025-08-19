// lib/server/metadata.ts
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { PageSEOProps } from '@/types/components'

export function generatePageMetadata({
  title,
  description = siteMetadata.description,
  image = siteMetadata.socialBanner,
  path = '',
  publishedTime,
  modifiedTime,
  authors = [siteMetadata.author],
  type = 'website',
}: PageSEOProps): Metadata {
  const url = `${siteMetadata.siteUrl}${path}`
  const images = [{ url: image.includes('http') ? image : `${siteMetadata.siteUrl}${image}` }]

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description,
      url,
      siteName: siteMetadata.title,
      images,
      locale: 'en_US',
      type,
      ...(publishedTime && {
        publishedTime,
        modifiedTime: modifiedTime || publishedTime,
        authors,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteMetadata.title}`,
      description,
      images,
    },
  }
}
