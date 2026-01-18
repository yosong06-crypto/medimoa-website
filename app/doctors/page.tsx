export default function DoctorsPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">의료진 소개</h1>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* 프로필 이미지 영역 */}
            <div className="md:w-1/3 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center p-12">
              <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center text-6xl">
                👨‍⚕️
              </div>
            </div>

            {/* 정보 영역 */}
            <div className="md:w-2/3 p-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">김메디 원장</h2>
                <p className="text-xl text-green-600">소아청소년과 전문의</p>
              </div>

              {/* 학력 */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="mr-2">🎓</span> 학력
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="pl-8">서울대학교 의과대학 졸업</li>
                  <li className="pl-8">서울대학교병원 소아청소년과 레지던트 수료</li>
                  <li className="pl-8">대한소아과학회 정회원</li>
                </ul>
              </div>

              {/* 경력 */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="mr-2">💼</span> 경력
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="pl-8">서울대학교병원 소아청소년과 전임의</li>
                  <li className="pl-8">분당서울대학교병원 소아청소년과 임상강사</li>
                  <li className="pl-8">대한소아내분비학회 정회원</li>
                  <li className="pl-8">대한소아신경학회 정회원</li>
                  <li className="pl-8">성장클리닉 전문의 과정 수료</li>
                </ul>
              </div>

              {/* 전문 분야 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <span className="mr-2">⚕️</span> 전문 진료 분야
                </h3>
                <div className="flex flex-wrap gap-2 pl-8">
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                    성조숙증
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                    저신장
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                    성장클리닉
                  </span>
                  <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold">
                    아동발달
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
                    소아내분비
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 진료 철학 */}
        <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">진료 철학</h3>
          <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
            "아이 한 명 한 명이 모두 소중합니다. 부모님의 마음으로 세심하게 살피고,
            전문의로서 정확하게 진단하며, 최선을 다해 치료하겠습니다."
          </p>
        </div>
      </div>
    </div>
  )
}
