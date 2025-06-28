import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, slug, techImg }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      } overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc && (
        <Link href={`/projects/${slug}`} aria-label={`Link to ${title}`} className="block">
          <Image
            alt={title}
            src={imgSrc}
            className="w-full aspect-[1536/895] object-cover object-center"
            width={1536}
            height={895}
          />
        </Link>
      )}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          <Link href={`/projects/${slug}`} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {techImg && (
          <div className="flex gap-3 py-6">
            {Object.keys(techImg).map((tech, index) => (
              <Image
                key={index}
                alt={tech}
                src={techImg[tech]}
                className="stack-label bg-lime-300 object-cover object-center dark:bg-lime-100"
                width={50}
                height={50}
              />
            ))}
          </div>
        )}
        <Link
          href={`/projects/${slug}`}
          className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label={`Link to ${title}`}
        >
          Learn more &rarr;
        </Link>
      </div>
    </div>
  </div>
)

export default Card