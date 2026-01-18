import { getMarkdownContent } from '@/lib/markdown'
import Image from 'next/image'

export default async function PrecocciousPage() {
  const content = await getMarkdownContent('precocious')

  // Sample of precocious images (first 12)
  const precociousImages = [
    '/images/pages/precocious/04_성조숙증_001_14cae094.png',
    '/images/pages/precocious/04_성조숙증_002_25588e1e.png',
    '/images/pages/precocious/04_성조숙증_003_4385816c.png',
    '/images/pages/precocious/04_성조숙증_004_4d9987f2.png',
    '/images/pages/precocious/04_성조숙증_005_d26bdb2c.png',
    '/images/pages/precocious/04_성조숙증_006_3b1ba68b.png',
    '/images/pages/precocious/04_성조숙증_009_158454e2.png',
    '/images/pages/precocious/04_성조숙증_010_dda9b578.png',
    '/images/pages/precocious/04_성조숙증_011_8beba0ab.png',
    '/images/pages/precocious/04_성조숙증_015_2bc9607c.png',
    '/images/pages/precocious/04_성조숙증_019_c659d496.png',
    '/images/pages/precocious/04_성조숙증_020_b06913e6.png',
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-sky-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              성조숙증 클리닉
            </h1>
            <p className="text-xl text-gray-600">
              아이의 조기 성장 발달을 전문적으로 진단하고 관리합니다
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
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">정밀 진단</h3>
              <p className="text-gray-600">
                뼈나이 검사, 호르몬 검사 등을 통해 정확한 진단을 실시합니다
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💉</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">맞춤 치료</h3>
              <p className="text-gray-600">
                아이의 상태에 맞는 최적의 치료 계획을 수립합니다
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">지속 관리</h3>
              <p className="text-gray-600">
                정기적인 추적 검사를 통해 치료 효과를 모니터링합니다
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
            {precociousImages.map((img, idx) => (
              <div key={idx} className="relative h-64 bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <Image
                  src={img}
                  alt={`성조숙증 클리닉 시설 ${idx + 1}`}
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
          <h2 className="text-3xl font-bold mb-4">성조숙증 상담 예약</h2>
          <p className="text-xl mb-8 text-blue-100">
            조기 발견과 적절한 치료가 중요합니다
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
