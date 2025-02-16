import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
// import NewsletterForm from 'pliny/ui/NewsletterForm'
const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="mt-7 flex items-center justify-between space-y-4">
        <div className="space-y-5 md:space-y-8">
          <h1 className="animate-slide-up-head text-4xl font-extrabold leading-9 tracking-tight text-gray-900 [animation-delay:200ms] dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            <span className="wave">Hey</span>, <span>I'm </span>
            <span className="text-lime-500 dark:text-lime-400">
              Fadjar<span className="wiggle wave">👋🏻</span>
            </span>
          </h1>
          <p className="animate-slide-up-head max-w-3xl text-xl [animation-delay:400ms]">
            Full-stack web developer crafting digital solutions based in Indonesia. I document my
            coding journey and share web development insights through practical tutorials and
            articles.
          </p>
          <div className="flex flex-row gap-6">
            <Link
              href="/about"
              className="animate-slide-up-head mt-6 inline-block rounded bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 font-bold text-white [animation-delay:600ms] hover:from-pink-500 hover:to-yellow-500"
            >
              About Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1yiHUT3quYR54faxW5ZwQJ9y37j9rnuKp/view?usp=drive_link"
              className="animate-slide-up-head relative mt-6 inline-block rounded bg-transparent px-4 py-2 font-bold text-transparent transition-colors duration-300 hover:text-white"
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
              Download CV
            </Link>
          </div>
        </div>
      </div>
      <div className="animate-slide-up-recent-post mt-20 divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Recent Writing
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h3>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
