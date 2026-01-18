import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      title: '성조숙증 클리닉',
      description: '여아 8세, 남아 9세 이전의 조기 2차 성징에 대한 전문적인 진단과 치료를 제공합니다.',
      icon: '🌱',
      href: '/services/precocious',
      color: 'from-green-50 to-green-100',
    },
    {
      title: '저신장/성장 클리닉',
      description: '또래보다 키가 작거나 성장 속도가 느린 아이들을 위한 전문 클리닉입니다.',
      icon: '📏',
      href: '/services/growth',
      color: 'from-blue-50 to-blue-100',
    },
    {
      title: '아동발달센터',
      description: '언어, 인지, 사회성, 운동 발달을 종합적으로 평가하고 맞춤형 치료를 제공합니다.',
      icon: '🧸',
      href: '/services/development',
      color: 'from-purple-50 to-purple-100',
    },
  ]

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">진료 안내</h1>
          <p className="text-xl text-gray-600">
            메디모아의원은 아이들의 건강한 성장과 발달을 위한<br />
            전문적이고 세심한 진료를 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className={`bg-gradient-to-br ${service.color} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105`}
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
              <div className="mt-6 text-green-600 font-semibold flex items-center">
                자세히 보기 <span className="ml-2">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">진료 예약 문의</h3>
          <p className="text-gray-700 mb-6">
            진료는 예약제로 운영됩니다. 대기 시간을 줄이고 충분한 진료 시간을 확보하기 위함입니다.
          </p>
          <div className="flex justify-center space-x-8 text-lg">
            <a href="tel:02-1234-5678" className="text-green-600 hover:text-green-700 font-semibold">
              📞 02-1234-5678
            </a>
            <span className="text-gray-400">|</span>
            <span className="text-gray-700">
              평일 09:00-18:00 | 토 09:00-13:00
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
