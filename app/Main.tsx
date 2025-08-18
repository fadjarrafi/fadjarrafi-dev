import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import projectsData from '@/data/projectsData'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  // Filter to only show English posts in the recent posts section
  const englishPosts = posts.filter((post) => post.path.startsWith('blog/en/'))

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
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
        <div className="flex flex-row gap-4">
          <Link
            href="/about"
            className="inline-block rounded bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:from-pink-500 hover:to-yellow-500"
          >
            About Me
          </Link>
          <Link
            href="https://drive.google.com/file/d/1ksKTxX59HNYRzj1t3D7xV1QH9XpRC7_I/view?usp=sharing"
            className="relative inline-block rounded bg-transparent px-4 py-2 text-sm font-medium text-transparent transition-colors duration-300 hover:text-white"
            style={{
              backgroundImage: 'linear-gradient(to right, rgb(74, 222, 128), rgb(59, 130, 246))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            <span
              className="absolute inset-0 rounded border-2 border-transparent bg-gradient-to-r from-green-400 to-blue-500 opacity-100 transition-all duration-300 hover:opacity-100"
              style={{
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
              }}
            ></span>
            Check Out My CV
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
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
                        <img
                          key={tech}
                          src={imgSrc}
                          alt={tech}
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
