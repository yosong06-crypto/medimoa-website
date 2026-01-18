import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'content/pages')

export interface MarkdownContent {
  slug: string
  title: string
  description: string
  content: string
  htmlContent: string
}

/**
 * 마크다운 파일 목록 가져오기
 */
export function getMarkdownFiles(): string[] {
  return fs.readdirSync(contentDirectory)
}

/**
 * 특정 마크다운 파일 읽기
 */
export async function getMarkdownContent(slug: string): Promise<MarkdownContent> {
  const fullPath = path.join(contentDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // frontmatter 파싱
  const { data, content } = matter(fileContents)

  // 마크다운을 HTML로 변환
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content)
  const htmlContent = processedContent.toString()

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    content,
    htmlContent,
  }
}

/**
 * 모든 마크다운 파일 목록 가져오기
 */
export function getAllMarkdownSlugs(): string[] {
  const files = fs.readdirSync(contentDirectory)
  return files.map((file) => file.replace(/\.md$/, ''))
}

/**
 * 특정 슬러그가 존재하는지 확인
 */
export function markdownExists(slug: string): boolean {
  const fullPath = path.join(contentDirectory, `${slug}.md`)
  return fs.existsSync(fullPath)
}
