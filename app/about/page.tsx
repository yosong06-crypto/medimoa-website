import { getMarkdownContent } from '@/lib/markdown'
import Image from 'next/image'

export default async function AboutPage() {
  const content = await getMarkdownContent('intro')

  // Get all intro images
  const introImages = [
    '/images/pages/intro/01_인사말_001_14cae094.png',
    '/images/pages/intro/01_인사말_002_25588e1e.png',
    '/images/pages/intro/01_인사말_003_a57cc383.png',
    '/images/pages/intro/01_인사말_004_a62d4eee.png',
    '/images/pages/intro/01_인사말_005_d091167b.png',
    '/images/pages/intro/01_인사말_006_5f587b04.png',
    '/images/pages/intro/01_인사말_007_15eb1c11.png',
    '/images/pages/intro/01_인사말_008_eb841564.png',
    '/images/pages/intro/01_인사말_011_b2b906b8.png',
    '/images/pages/intro/01_인사말_012_e262ffb5.png',
    '/images/pages/intro/01_인사말_013_f2dc8d08.png',
    '/images/pages/intro/01_인사말_014_efaeb9e9.png',
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-sky-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {content.title || '병원 소개'}
            </h1>
            <p className="text-xl text-gray-600">
              {content.description || '메디모아의원을 소개합니다'}
            </p>
          </div>
        </div>
      </section>

      {/* Markdown Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <article className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: content.htmlContent }} />
          </article>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">병원 시설</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {introImages.map((img, idx) => (
              <div key={idx} className="relative h-64 bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={img}
                  alt={`병원 시설 ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">진료 예약 문의</h2>
          <p className="text-xl mb-8 text-blue-100">
            궁금하신 사항이 있으시면 언제든지 연락주세요
          </p>
          <a
            href="tel:02-1234-5678"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            📞 02-1234-5678
          </a>
        </div>
      </section>
    </div>
  )
}
