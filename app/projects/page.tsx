import projectsData from '@/data/projectsData'
import { genPageMetadata } from 'app/seo'
import Image from 'next/image'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      {/* Page Title */}
      <div className="mb-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          My Projects
        </h1>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          Complete collection spanning different domains and technologies
        </p>
      </div>

      {/* Projects List */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {projectsData.map((project, index) => (
          <div key={project.title} className="py-8 first:pt-0 last:pb-0">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-4">
                  <span className="font-mono text-sm text-gray-400 dark:text-gray-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    {project.title}
                  </h2>
                </div>
                <p className="mb-4 ml-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Tech Stack Images */}
                {project.techImg &&
                  typeof project.techImg === 'object' &&
                  Object.keys(project.techImg).length > 0 && (
                    <div className="ml-8">
                      <div className="flex flex-wrap gap-3">
                        {Object.keys(project.techImg).map((tech, techIndex) => (
                          <Image
                            key={techIndex}
                            src={project.techImg[tech]}
                            alt={tech}
                            width={24}
                            height={24}
                            className="rounded object-contain"
                          />
                        ))}
                      </div>
                    </div>
                  )}
              </div>

              {/* Action Links */}
              <div className="flex gap-3 text-sm">
                {project.slug && (
                  <a
                    href={`/projects/${project.slug}`}
                    className="text-gray-500 transition-colors hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400"
                  >
                    See Project
                  </a>
                )}
                {/* Add Source Code link if available */}
                {/* <a
                  href="#"
                  className="text-gray-500 transition-colors hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400"
                >
                  Source Code
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Interested in collaborating on a project?{' '}
          <a
            href="mailto:contact@fadjar.dev"
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
