import Link from 'next/link'

export default function HomePage() {
  const services = [
    {
      title: '성조숙증 클리닉',
      description: '아이의 조기 성장 발달을 전문적으로 진단하고 관리합니다.',
      icon: '🌱',
      href: '/services/precocious',
    },
    {
      title: '저신장 클리닉',
      description: '아이의 성장 호르몬 검사와 성장 클리닉을 운영합니다.',
      icon: '📏',
      href: '/services/growth',
    },
    {
      title: '아동발달센터',
      description: '아이의 발달 상태를 체계적으로 평가하고 지원합니다.',
      icon: '🧸',
      href: '/services/development',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-sky-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              아이들의 건강한 성장을<br />
              함께 지켜갑니다
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              메디모아의원은 소아청소년과 전문의가 아이들의 성장과 발달을<br />
              세심하게 관리하고 치료하는 전문 의료기관입니다.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/services"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                진료 안내
              </Link>
              <Link
                href="/about"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-500 hover:bg-blue-50 transition-colors"
              >
                병원 소개
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">주요 진료 과목</h2>
            <p className="text-gray-600">전문적이고 세심한 진료를 제공합니다</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">공지사항</h2>
            <Link
              href="/notices"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              더보기 →
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="divide-y">
              <div className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    메디모아의원 개원 안내
                  </h3>
                  <span className="text-sm text-gray-500">2024.01.15</span>
                </div>
                <p className="text-gray-600">
                  아이들의 건강한 성장을 위해 메디모아의원이 개원하였습니다.
                </p>
              </div>

              <div className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    연말연시 휴진 안내
                  </h3>
                  <span className="text-sm text-gray-500">2024.01.10</span>
                </div>
                <p className="text-gray-600">
                  12월 31일부터 1월 2일까지 휴진합니다.
                </p>
              </div>

              <div className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    독감 예방접종 실시
                  </h3>
                  <span className="text-sm text-gray-500">2024.01.05</span>
                </div>
                <p className="text-gray-600">
                  독감 예방접종을 실시하고 있습니다. 사전 예약 바랍니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
