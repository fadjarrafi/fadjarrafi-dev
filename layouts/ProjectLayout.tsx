import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Project } from 'contentlayer/generated'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import siteMetadata from '@/data/siteMetadata'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface TechStack {
  name: string
  icon: string
}

interface LayoutProps {
  content: CoreContent<Project>
  children: ReactNode
}

export default function ProjectLayout({ content, children }: LayoutProps) {
  const { path, date, title, summary, projectLink, techStack } = content
  const basePath = path.split('/')[0]

  // Parse techStack if it's a string
  const parsedTechStack: TechStack[] =
    typeof techStack === 'string' ? JSON.parse(techStack) : (techStack as TechStack[])

  return (
    <div className="mx-auto max-w-3xl px-6">
      <ScrollTopAndComment />

      <article>
        {/* Header */}
        <header className="mb-12">
          <div className="mb-6">
            <h1 className="mb-3 text-2xl font-bold leading-tight text-gray-900 dark:text-gray-100">
              {title}
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">{summary}</p>
          </div>

          {/* Project Link */}
          {projectLink && (
            <div className="mb-6">
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Project Link</p>
              <Link
                href={projectLink}
                className="text-sm text-lime-500 underline transition-colors hover:text-lime-600 dark:text-lime-400 dark:hover:text-lime-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectLink}
              </Link>
            </div>
          )}

          {/* Tech Stack */}
          {parsedTechStack && parsedTechStack.length > 0 && (
            <div className="mb-8">
              <h2 className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                Tech Stack
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {parsedTechStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-3 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:bg-gray-800"
                  >
                    <div className="relative h-5 w-5 flex-shrink-0">
                      <Image
                        src={tech.icon.trim()}
                        alt={tech.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <span className="truncate text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Content */}
        <div className="prose prose-sm mb-12 max-w-none text-gray-600 dark:prose-invert dark:text-gray-400">
          {children}
        </div>

        {/* Back to Projects */}
        <div className="border-t border-gray-200 pt-8 dark:border-gray-700">
          <Link
            href={`/`}
            className="text-sm text-gray-500 underline transition-colors hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400"
            aria-label="Back to projects"
          >
            ← Back to home
          </Link>
        </div>
      </article>
    </div>
  )
}
