// types/metadata.ts
export interface AnalyticsConfig {
  googleAnalytics?: {
    googleAnalyticsId: string
  }
  umamiAnalytics?: {
    umamiWebsiteId: string
  }
  plausibleAnalytics?: {
    plausibleDataDomain: string
  }
}

export interface SearchConfig {
  provider: 'kbar' | 'algolia'
  kbarConfig?: {
    searchDocumentsPath: string
  }
  algoliaConfig?: {
    appId: string
    apiKey: string
    indexName: string
  }
}

export interface NewsletterConfig {
  provider: 'mailchimp' | 'buttondown' | 'convertkit' | 'klaviyo' | 'revue' | 'emailoctopus'
}

export interface CommentsConfig {
  provider: 'giscus' | 'utterances' | 'disqus'
  giscusConfig?: {
    repo: string
    repositoryId: string
    category: string
    categoryId: string
    mapping: string
    reactions: string
    metadata: string
    theme: string
    darkTheme: string
    themeURL?: string
    lang: string
  }
}

export interface SiteMetadata {
  title: string
  author: string
  headerTitle?: string
  description: string
  language: string
  theme: 'system' | 'dark' | 'light'
  siteUrl: string
  siteRepo: string
  siteLogo: string
  socialBanner: string
  email: string
  github?: string
  instagram?: string
  linkedin?: string
  locale: string
  analytics: AnalyticsConfig
  newsletter?: NewsletterConfig
  comments?: CommentsConfig
  search: SearchConfig
}
