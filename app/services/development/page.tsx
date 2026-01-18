import { getMarkdownContent } from '@/lib/markdown'

export default async function DevelopmentPage() {
  const content = await getMarkdownContent('development')

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <article className="prose prose-lg prose-green max-w-none">
          <div dangerouslySetInnerHTML={{ __html: content.htmlContent }} />
        </article>
      </div>
    </div>
  )
}
