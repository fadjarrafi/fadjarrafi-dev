// app/works/page.tsx
import { genPageMetadata } from 'app/seo'
import { workData, projectsData } from '@/data/workData'
import { TimelineItem } from '@/components/TimelineItem'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'Works' })

export default function Works() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      {/* Page Title */}
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          My Journey
        </h1>
      </div>

      <p className="mb-14 text-base leading-relaxed text-gray-600 dark:text-gray-400">
        A journey through my professional development as a full-stack developer, from internships to
        leading comprehensive projects in hospitality technology and digital marketing.
      </p>

      {/* Timeline */}
      <div className="relative">
        <ul>
          {workData.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
          {projectsData.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </ul>
      </div>

      {/* Contact Section */}
      <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Interested in working together?{' '}
          <a
            href="mailto:irfanrafi021@gmail.com"
            className="underline transition-colors hover:text-lime-500 dark:hover:text-lime-400"
          >
            Get in touch
          </a>
          .
        </p>
      </div>
    </div>
  )
}
