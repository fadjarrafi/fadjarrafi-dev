import 'css/prism.css'
import 'katex/dist/katex.css'

import PageTitle from '@/components/PageTitle'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { allProjects } from 'contentlayer/generated'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'
import ProjectLayout from '@/layouts/ProjectLayout'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug)
  const project = allProjects.find((p) => p.slug === slug)

  if (!project) return

  const publishedAt = new Date(project.date).toISOString()
  const modifiedAt = new Date(project.date).toISOString()

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: [
        {
          url: project.thumbnail,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary,
      images: [project.thumbnail],
    },
  }
}

export const generateStaticParams = async () => {
  return allProjects.map((p) => ({
    slug: p.slug,
  }))
}

export default async function Project({ params }: { params: { slug: string } }) {
  const slug = decodeURI(params.slug)
  const project = allProjects.find((p) => p.slug === slug)

  if (!project) {
    return notFound()
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: project.title,
            datePublished: project.date,
            dateModified: project.date,
            description: project.summary,
            image: project.thumbnail,
            url: `${siteMetadata.siteUrl}/projects/${slug}`,
          }),
        }}
      />
      <ProjectLayout content={project}>
        <MDXLayoutRenderer code={project.body.code} components={components} />
      </ProjectLayout>
    </>
  )
}
