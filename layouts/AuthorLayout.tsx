import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Capsule from '@/components/Capsule'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, instagram, linkedin, github } = content

  return (
    <div className="mx-auto max-w-4xl px-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">About</h1>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          who runs this show
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 gap-12 pb-16 lg:grid-cols-3">
        {/* Left Column - About Content */}
        <div className="lg:col-span-2">
          <div className="prose prose-sm max-w-none text-gray-600 dark:prose-invert dark:text-gray-400">
            {children}
          </div>

          {/* Tech Stack Section */}
          <div className="mt-12">
            <h2 className="mb-6 text-sm font-medium text-gray-500 dark:text-gray-400">
              Technologies & Tools
            </h2>
            <Capsule />
          </div>
        </div>

        {/* Right Column - Profile Sidebar */}
        <div className="lg:col-span-1">
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="flex flex-col items-center text-center">
              {avatar && (
                <Image
                  src={avatar}
                  alt="avatar"
                  width={256}
                  height={256}
                  className="mb-4 h-32 w-32 rounded-full"
                />
              )}
              <h2 className="mb-1 text-xl font-medium text-gray-900 dark:text-gray-100">{name}</h2>
              <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">{occupation}</p>
              <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">{company}</p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <SocialIcon kind="mail" href={`mailto:${email}`} />
                <SocialIcon kind="github" href={github} />
                <SocialIcon kind="linkedin" href={linkedin} />
                <SocialIcon kind="instagram" href={instagram} />
              </div>
            </div>

            {/* Terminal-style Navigation */}
            {/* <div className="mt-8 rounded-lg bg-gray-900 p-4 font-mono text-sm text-green-400 dark:bg-gray-800">
              <div className="mb-2">cd ../</div>
              <div className="mb-2">~/</div>
              <div className="mb-2 text-lime-400">./projects</div>
              <div>./blog</div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      {/* <div className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Want to collaborate or just say hi?{' '}
          <a
            href={`mailto:${email}`}
            className="underline transition-colors hover:text-lime-500 dark:hover:text-lime-400"
          >
            Drop me a line
          </a>
          .
        </p>
      </div> */}
    </div>
  )
}
