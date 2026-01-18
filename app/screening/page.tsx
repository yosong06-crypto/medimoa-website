export default function ScreeningPage() {
  return (
    <div className="py-16 bg-gradient-to-br from-yellow-50 to-pink-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 border-b-4 border-yellow-400 pb-4">
            영유아 발달검사
          </h1>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">발달검사란?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              영유아 발달검사는 아이의 현재 발달 상태를 정확하게 평가하고, 
              또래와 비교하여 발달 지연이나 문제가 있는지 조기에 발견하기 위한 검사입니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              조기 발견을 통해 적절한 시기에 개입하면 더 좋은 치료 효과를 기대할 수 있습니다.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">검사 영역</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">🧠 인지 발달</h3>
                <p className="text-gray-700 text-sm">사고력, 문제해결능력, 기억력 등</p>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">🗣️ 언어 발달</h3>
                <p className="text-gray-700 text-sm">표현언어, 수용언어, 의사소통 능력</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">🤸 운동 발달</h3>
                <p className="text-gray-700 text-sm">대근육, 소근육 운동 능력</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">😊 사회성 발달</h3>
                <p className="text-gray-700 text-sm">또래관계, 정서조절, 사회적 상호작용</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">검사 대상</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-pink-500 font-bold mr-2">✓</span>
                <span className="text-gray-700">언어 발달이 또래보다 늦은 경우</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 font-bold mr-2">✓</span>
                <span className="text-gray-700">눈 맞춤이나 상호작용이 부족한 경우</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 font-bold mr-2">✓</span>
                <span className="text-gray-700">과잉행동이나 주의집중이 어려운 경우</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 font-bold mr-2">✓</span>
                <span className="text-gray-700">운동 발달이 지연되는 경우</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 font-bold mr-2">✓</span>
                <span className="text-gray-700">학습이나 또래 관계에 어려움이 있는 경우</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">검사 절차</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-yellow-400 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">예약 및 상담</h3>
                  <p className="text-gray-700 text-sm">전화 또는 방문을 통한 초기 상담</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-400 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">검사 실시</h3>
                  <p className="text-gray-700 text-sm">전문가에 의한 체계적인 발달 평가</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-400 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">결과 분석</h3>
                  <p className="text-gray-700 text-sm">검사 결과를 종합적으로 분석</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-400 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">결과 상담 및 치료 계획</h3>
                  <p className="text-gray-700 text-sm">결과 설명 및 맞춤형 치료 계획 수립</p>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-10 bg-gradient-to-r from-yellow-100 to-pink-100 p-6 rounded-lg text-center">
            <p className="text-gray-800 font-semibold mb-3">
              정확한 평가를 위해 사전 예약이 필요합니다
            </p>
            <a
              href="tel:02-1234-5678"
              className="inline-block bg-pink-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-pink-600 transition-colors shadow-md"
            >
              📞 예약 문의: 02-1234-5678
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
