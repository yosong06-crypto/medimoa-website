import { getMarkdownContent } from '@/lib/markdown'
import Image from 'next/image'

export default async function GrowthPage() {
  const content = await getMarkdownContent('growth')

  // All growth images
  const growthImages = [
    '/images/pages/growth/05_저신장_001_14cae094.png',
    '/images/pages/growth/05_저신장_002_25588e1e.png',
    '/images/pages/growth/05_저신장_005_d26bdb2c.png',
    '/images/pages/growth/05_저신장_006_4c0ad52d.png',
    '/images/pages/growth/05_저신장_009_2bc9607c.png',
    '/images/pages/growth/05_저신장_016_b16a907e.png',
    '/images/pages/growth/05_저신장_017_22e18928.png',
    '/images/pages/growth/05_저신장_018_83b75640.png',
    '/images/pages/growth/05_저신장_019_92d919a6.png',
    '/images/pages/growth/05_저신장_020_36ea8b05.png',
    '/images/pages/growth/05_저신장_021_d9353f43.png',
    '/images/pages/growth/05_저신장_022_371df8fa.png',
    '/images/pages/growth/05_저신장_023_41c2e9f6.png',
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-sky-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              저신장 클리닉
            </h1>
            <p className="text-xl text-gray-600">
              아이의 성장 호르몬 검사와 성장 클리닉을 운영합니다
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">진료 과정</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📏</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">성장 평가</h3>
              <p className="text-gray-600">
                키, 체중, 성장 속도 등을 정밀하게 측정하고 분석합니다
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">호르몬 검사</h3>
              <p className="text-gray-600">
                성장 호르몬 분비 검사를 통해 정확한 원인을 파악합니다
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">맞춤 치료</h3>
              <p className="text-gray-600">
                성장 호르몬 치료 및 생활 습관 개선을 통한 종합 관리
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">진료 시설</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {growthImages.map((img, idx) => (
              <div key={idx} className="relative h-64 bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <Image
                  src={img}
                  alt={`저신장 클리닉 시설 ${idx + 1}`}
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
          <h2 className="text-3xl font-bold mb-4">성장 상담 예약</h2>
          <p className="text-xl mb-8 text-blue-100">
            우리 아이의 성장이 걱정되시나요? 전문가와 상담하세요
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
