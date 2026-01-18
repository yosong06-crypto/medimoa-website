import { getMarkdownContent } from '@/lib/markdown'
import Image from 'next/image'

export default async function DevelopmentPage() {
  const content = await getMarkdownContent('development')

  // Sample of development images (first 12)
  const developmentImages = [
    '/images/pages/development/03_아동발달_002_25588e1e.png',
    '/images/pages/development/03_아동발달_003_b94a3200.png',
    '/images/pages/development/03_아동발달_004_371205bc.png',
    '/images/pages/development/03_아동발달_005_956b8bb2.png',
    '/images/pages/development/03_아동발달_006_0adf9fa9.png',
    '/images/pages/development/03_아동발달_007_956b8bb2.png',
    '/images/pages/development/03_아동발달_008_dfba7043.png',
    '/images/pages/development/03_아동발달_009_956b8bb2.png',
    '/images/pages/development/03_아동발달_010_af9be161.png',
    '/images/pages/development/03_아동발달_011_956b8bb2.png',
    '/images/pages/development/03_아동발달_012_de075ea9.png',
    '/images/pages/development/03_아동발달_013_956b8bb2.png',
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-sky-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              아동발달센터
            </h1>
            <p className="text-xl text-gray-600">
              아이의 발달 상태를 체계적으로 평가하고 지원합니다
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

      {/* Features Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">주요 프로그램</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🧩</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">발달 평가</h3>
              <p className="text-gray-600">
                전문적인 발달 검사를 통해 아이의 현재 발달 상태를 정확히 파악합니다
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">치료 프로그램</h3>
              <p className="text-gray-600">
                언어치료, 작업치료, 놀이치료 등 맞춤형 치료를 제공합니다
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">👨‍👩‍👧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">부모 상담</h3>
              <p className="text-gray-600">
                가정에서의 발달 촉진 방법과 양육 코칭을 제공합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">센터 시설</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentImages.map((img, idx) => (
              <div key={idx} className="relative h-64 bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <Image
                  src={img}
                  alt={`아동발달센터 시설 ${idx + 1}`}
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
          <h2 className="text-3xl font-bold mb-4">발달 상담 예약</h2>
          <p className="text-xl mb-8 text-blue-100">
            우리 아이의 발달이 궁금하시다면 언제든지 상담 받으세요
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
