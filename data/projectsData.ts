// data/projectsData.ts
import { ProjectData } from '@/types'

const projectsData: ProjectData[] = [
  {
    title: 'Hospitality CMS',
    description: 'Content Management for Hospitality TV Apps',
    imgSrc: '/static/images/hospitality-mockup.png',
    slug: 'hospitality-cms',
    techImg: {
      Laravel: '/static/images/laravel.svg',
    },
  },
  {
    title: 'Square Indonesia',
    description:
      'Square Indonesia is a digital marketing agency on a mission to empower businesses with impactful solutions that drive tangible results',
    imgSrc: '/static/images/square.png',
    slug: 'square-indonesia',
    techImg: {
      NextJS: '/static/images/next-js.svg',
      TailwindCSS: '/static/images/tailwind.svg', // Fixed naming
      Laravel: '/static/images/laravel.svg', // Fixed naming
    },
  },
  {
    title: 'Billing E-Cafe',
    description: 'Monitoring billing e-cafe',
    imgSrc: '/static/images/billing-dashboard.png',
    slug: 'billing-ecafe',
    techImg: {
      NextJS: '/static/images/next-js.svg',
      ExpressJS: '/static/images/express-js.svg',
    },
  },
  {
    title: 'Movie Apps',
    description:
      'A React-based movie discovery built with React 19, Vite, and TailwindCSS, the app integrates TMDB API for movie data and uses Appwrite as the backend database.',
    imgSrc: '/static/images/movie-app-preview.png',
    slug: 'movie-app',
    techImg: {
      React: '/static/images/react.svg',
      Appwrite: '/static/images/appwrite.svg',
    },
  },
]

export default projectsData
