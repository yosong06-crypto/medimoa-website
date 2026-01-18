import { getMarkdownContent } from '@/lib/markdown'
import Image from 'next/image'

export default async function DoctorsPage() {
  const content = await getMarkdownContent('doctors')

  // Get all doctors images
  const doctorsImages = [
    '/images/pages/doctors/02_의료진_001_14cae094.png',
    '/images/pages/doctors/02_의료진_002_25588e1e.png',
    '/images/pages/doctors/02_의료진_003_26bfbfea.png',
    '/images/pages/doctors/02_의료진_004_02a35f13.png',
    '/images/pages/doctors/02_의료진_005_1d33b77d.png',
    '/images/pages/doctors/02_의료진_006_bbbaee25.png',
    '/images/pages/doctors/02_의료진_007_0501c81b.png',
    '/images/pages/doctors/02_의료진_008_0b33d437.png',
    '/images/pages/doctors/02_의료진_009_3380f48c.png',
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-sky-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {content.title || '의료진 소개'}
            </h1>
            <p className="text-xl text-gray-600">
              {content.description || '전문적이고 따뜻한 의료진을 소개합니다'}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">진료 모습</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctorsImages.map((img, idx) => (
              <div key={idx} className="relative h-64 bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={img}
                  alt={`진료 모습 ${idx + 1}`}
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
            전문 의료진이 정성껏 진료해드립니다
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
