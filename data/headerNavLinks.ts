// data/headerNavLinks.ts
import { HeaderNavLink } from '@/types'
import { ROUTES } from '@/lib/constants'

const headerNavLinks: HeaderNavLink[] = [
  { href: ROUTES.HOME, title: 'Home' },
  { href: ROUTES.BLOG, title: 'Blog' },
  { href: ROUTES.WORK, title: 'Works' },
  { href: ROUTES.ABOUT, title: 'About' },
]

export default headerNavLinks
