import Image from 'next/image'

export default function Capsule() {
  const technologies = [
    { name: 'PHP', icon: '/static/images/php.svg' },
    { name: 'JavaScript', icon: '/static/images/javascript.svg' },
    { name: 'Bootstrap', icon: '/static/images/bootstrap.svg' },
    { name: 'Tailwind', icon: '/static/images/tailwind.svg' },
    { name: 'jQuery', icon: '/static/images/jquery.svg' },
    { name: 'Laravel', icon: '/static/images/laravel.svg' },
    { name: 'Node.js', icon: '/static/images/nodejs.svg' },
    { name: 'Next.js', icon: '/static/images/next-js.svg' },
    { name: 'MySQL', icon: '/static/images/mysql.svg' },
    { name: 'Git', icon: '/static/images/git.svg' },
    { name: 'Postman', icon: '/static/images/postman.svg' },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-3 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:bg-gray-800"
        >
          <Image src={tech.icon} alt={tech.name} width={20} height={20} className="flex-shrink-0" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
        </div>
      ))}
    </div>
  )
}
