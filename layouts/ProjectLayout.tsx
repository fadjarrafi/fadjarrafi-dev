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
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="animate-slide-up-head xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                {/* <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div> */}
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <p>{summary}</p>
                  </dd>
                </div>
              </div>
            </div>
          </header>
          <div className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
            <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              {projectLink && (
                <>
                  <dt className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Project Link
                  </dt>
                  <dd className="pb-8 pt-4">
                    <Link
                      href={projectLink}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {projectLink}
                    </Link>
                  </dd>
                </>
              )}
              <dt className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Tech Stack
              </dt>
              <dd>
                <ul className="flex flex-wrap justify-center gap-4 pt-4 xl:block xl:space-y-4">
                  {parsedTechStack?.map((tech) => (
                    <li
                      className="flex items-center space-x-2 rounded-md border border-gray-200 p-2 dark:border-gray-700"
                      key={tech.name}
                    >
                      <div className="relative h-6 w-6">
                        <Image
                          src={tech.icon.trim()} // Add trim() to remove any whitespace
                          alt={tech.name}
                          fill
                          className="object-contain"
                          unoptimized // Add this to prevent Next.js image optimization for SVGs
                        />
                      </div>
                      <span className="text-sm text-gray-900 dark:text-gray-100">{tech.name}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">{children}</div>
            </div>
            <footer>
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/${basePath}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label="Back to projects"
                >
                  &larr; Back to projects
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
