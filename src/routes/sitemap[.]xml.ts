import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: async () => {
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.seniorcitizensammanmuheem.org/</loc>
  </url>
  <url>
    <loc>https://www.seniorcitizensammanmuheem.org/about</loc>
  </url>
  <url>
    <loc>https://www.seniorcitizensammanmuheem.org/contact</loc>
  </url>
  <url>
    <loc>https://www.seniorcitizensammanmuheem.org/mission</loc>
  </url>
  <url>
    <loc>https://www.seniorcitizensammanmuheem.org/services</loc>
  </url>
</urlset>`

        return new Response(xml, {
          headers: {
            'Content-Type': 'application/xml',
          },
        })
      },
    },
  },
})