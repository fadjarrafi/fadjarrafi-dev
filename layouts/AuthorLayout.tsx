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
    <div className="mx-auto max-w-2xl px-6 py-16">
      {/* Page Title */}
      <div className="mb-16">
        <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">About</h1>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          Get to know more about me, my background, and the technologies I work with.
        </p>
      </div>

      {/* Profile Section */}
      <div className="mb-12">
        <div className="mb-8 flex flex-col items-center text-center">
          {avatar && (
            <Image
              src={avatar}
              alt="avatar"
              width={128}
              height={128}
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
      </div>

      {/* About Content */}
      <div className="mb-12">
        <div className="prose prose-sm max-w-none text-gray-600 dark:prose-invert dark:text-gray-400">
          {children}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="mb-12">
        <h2 className="mb-6 text-sm font-medium text-gray-500 dark:text-gray-400">
          Technologies & Tools
        </h2>
        <Capsule />
      </div>

      {/* Contact Section */}
      <div className="border-t border-gray-200 pt-8 dark:border-gray-700">
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
      </div>
    </div>
  )
}
