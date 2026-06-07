import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://altaqwafactory.com'
  
  const routes = [
    '',
    '/about',
    '/factory',
    '/services',
    '/projects',
    '/gallery',
    '/reviews',
    '/quote',
    '/contact',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
