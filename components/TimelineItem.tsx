// components/TimelineItem.tsx
import { Briefcase, DraftingCompass, School } from 'lucide-react'

// A simple mapping to select an icon based on title
const getIcon = (title) => {
  if (title.toLowerCase().includes('freelance')) return <DraftingCompass size={16} />
  if (title.toLowerCase().includes('student')) return <School size={16} />
  return <Briefcase size={16} />
}

export const TimelineItem = ({ item }) => {
  return (
    <li className="relative mb-12 flex items-start">
      {/* The vertical line */}
      <div className="absolute left-[8px] top-[14px] h-full w-px bg-gray-200 dark:bg-gray-700"></div>

      {/* The icon and its circle */}
      <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-gray-500 ring-4 ring-white dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-900">
        {getIcon(item.title)}
      </div>

      {/* The content */}
      <div className="ml-6 flex-grow">
        <div className="flex items-center justify-between">
          <h3 className="text-md font-semibold text-gray-900 dark:text-gray-100">
            {item.title}
            <span className="text-gray-500 dark:text-gray-400"> • {item.company}</span>
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
        </div>
        <div className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-400">
          {item.description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
        {item.tags && item.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  )
}
