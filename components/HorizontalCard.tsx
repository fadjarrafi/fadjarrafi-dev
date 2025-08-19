// components/HorizontalCard.tsx
import Image from './Image'
import Link from './Link'
import { HorizontalCardProps } from '@/types/components'

export default function HorizontalCard({ title, description, imgSrc, href }: HorizontalCardProps) {
  return (
    <div className="md max-w-[544px] p-4 md:w-1/2">
      <Link
        href={href}
        aria-label={`Link to ${title}`}
        className="block transform transition duration-300 hover:scale-105 hover:shadow-lg"
      >
        <div
          className={`${
            imgSrc && 'h-full'
          } flex flex-row overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
        >
          {imgSrc && (
            <div className="flex items-center">
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center px-3"
                width={150}
                height={150}
              />
            </div>
          )}
          <div className="flex-1 p-6">
            <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{title}</h2>
            <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
