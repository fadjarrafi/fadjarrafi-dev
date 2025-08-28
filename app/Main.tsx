import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import projectsData from '@/data/projectsData'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  // Filter to only show English posts in the recent posts section
  const englishPosts = posts.filter((post) => post.path.startsWith('blog/en/'))

  return (
    <div className="mx-auto max-w-4xl px-6">
      {/* Hero Section */}
      <div className="mb-16">
        <p className="mb-8 text-lg leading-relaxed">
          I'm <span className="text-lime-500 dark:text-lime-400">Fadjar</span>, a full-stack
          developer based in Indonesia, experienced in hospitality solutions that bridge technology
          with human experience.
        </p>

        <p className="mb-8 text-lg leading-relaxed">
          I've been building at PT. SaranaInsan MudaSelaras IPTV platforms, Android TV applications,
          and content management systems that serve 6+ hotel clients. I care about scalability,
          meaningful user interactions, and systems that work reliably under pressure.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-row gap-6">
          <Link
            href="/about"
            className="group text-sm text-lime-500 transition-colors duration-300 hover:text-lime-600 dark:text-lime-400 dark:hover:text-lime-300"
          >
            Who Am I{' '}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1ksKTxX59HNYRzj1t3D7xV1QH9XpRC7_I/view?usp=sharing"
            className="group text-sm text-gray-800 transition-colors duration-300 hover:text-lime-500 dark:text-gray-200 dark:hover:text-lime-400"
          >
            Check Out My CV{' '}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mb-16">
        <h2 className="mb-8 text-sm font-medium text-gray-500 dark:text-gray-400">Selected Work</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projectsData.map((project) => (
            <div key={project.slug} className="group">
              <Link href={`/projects/${project.slug}`} className="block">
                {/* Project Image */}
                <div className="mb-3 aspect-video overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={project.imgSrc}
                    alt={project.title}
                    width={640} // 16:9 aspect ratio width
                    height={360} // 16:9 aspect ratio height
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Project Info */}
                <div>
                  <h3 className="mb-1 font-medium text-gray-900 transition-colors group-hover:text-lime-500 dark:text-gray-100 dark:group-hover:text-lime-400">
                    {project.title}
                  </h3>
                  <p className="mb-3 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  {project.techImg && (
                    <div className="flex gap-2">
                      {Object.entries(project.techImg).map(([tech, imgSrc]) => (
                        <Image
                          key={tech}
                          src={imgSrc}
                          alt={tech}
                          width={16}
                          height={16}
                          className="h-4 w-4 opacity-60 transition-opacity group-hover:opacity-100"
                          title={tech}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="mt-8 pt-4">
          <Link
            href="/projects"
            className="text-sm text-gray-500 underline transition-colors hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400"
          >
            View all projects →
          </Link>
        </div>
      </div>

      {/* Recent Writing Section */}
      <div className="mb-8">
        <h2 className="mb-8 text-sm font-medium text-gray-500 dark:text-gray-400">
          Recent Writing
        </h2>

        <div className="space-y-8">
          {!englishPosts.length && (
            <p className="text-sm text-gray-600 dark:text-gray-400">No posts found.</p>
          )}
          {englishPosts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, path } = post
            return (
              <div key={slug}>
                <Link href={`/${path}`} className="group block">
                  <h3 className="mb-1 font-medium text-gray-900 transition-colors group-hover:text-lime-500 dark:text-gray-100 dark:group-hover:text-lime-400">
                    {title}
                  </h3>
                </Link>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                </p>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">{summary}</p>
                {/* Tags */}
                {tags && tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* View All Posts Link */}
        {englishPosts.length > MAX_DISPLAY && (
          <div className="mt-8 pt-4">
            <Link
              href="/blog"
              className="text-sm text-gray-500 underline transition-colors hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400"
            >
              View all posts →
            </Link>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="border-t border-gray-200 pt-8 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Reach out on{' '}
          <a
            href="https://www.linkedin.com/in/fadjar-irfan-rafi/"
            className="underline transition-colors hover:text-lime-500 dark:hover:text-lime-400"
          >
            LinkedIn
          </a>{' '}
          or{' '}
          <a
            href="mailto:irfanrafi021@gmail.com"
            className="underline transition-colors hover:text-lime-500 dark:hover:text-lime-400"
          >
            Email
          </a>
          .
        </p>
      </div>
    </div>
  )
}
