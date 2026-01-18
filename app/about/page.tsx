export default function AboutPage() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* 인사말 */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">병원 소개</h1>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">원장 인사말</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                안녕하십니까. 메디모아의원 원장입니다.
              </p>
              <p>
                아이들의 건강한 성장과 발달은 부모님들의 가장 큰 관심사입니다.
                메디모아의원은 소아청소년과 전문의로서 풍부한 임상 경험을 바탕으로
                아이들의 성장과 발달을 세심하게 살피고 관리하겠습니다.
              </p>
              <p>
                성조숙증, 저신장, 발달 지연 등 아이들의 성장과 관련된 모든 문제에 대해
                정확한 진단과 체계적인 치료를 제공하겠습니다.
              </p>
              <p>
                항상 최선을 다하는 메디모아의원이 되겠습니다.<br />
                감사합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 병원 철학 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">병원 철학</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border-2 border-green-200">
              <div className="text-3xl mb-3">👨‍⚕️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">전문성</h3>
              <p className="text-gray-600">
                소아청소년과 전문의의 풍부한 임상 경험을 바탕으로 정확한 진단과 치료를 제공합니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
              <div className="text-3xl mb-3">💚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">세심함</h3>
              <p className="text-gray-600">
                아이 한 명 한 명의 특성을 이해하고 맞춤형 진료를 제공합니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-purple-200">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">신뢰성</h3>
              <p className="text-gray-600">
                정직하고 투명한 진료로 환자와 보호자의 신뢰를 얻겠습니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-yellow-200">
              <div className="text-3xl mb-3">🌟</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">최선</h3>
              <p className="text-gray-600">
                항상 최선을 다하는 자세로 아이들의 건강을 책임지겠습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 시설 안내 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">시설 안내</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">📍 위치</h3>
              <p className="text-gray-700">
                서울시 강남구 테헤란로 123<br />
                메디모아빌딩 3층
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">🚇 교통편</h3>
              <p className="text-gray-700">
                지하철 2호선 강남역 3번 출구 도보 5분<br />
                버스 정류장 도보 2분
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">🅿️ 주차</h3>
              <p className="text-gray-700">
                건물 지하 주차장 이용 가능<br />
                진료 시 2시간 무료
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">🏥 시설</h3>
              <p className="text-gray-700">
                대기실, 진료실, 검사실, 상담실<br />
                최신 의료 장비 완비
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
