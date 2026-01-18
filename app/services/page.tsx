export default function ServicesPage() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">진료 안내</h1>

        {/* 성조숙증 클리닉 */}
        <section id="precocious-puberty" className="mb-16 scroll-mt-20">
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <span className="text-5xl mr-4">🌱</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">성조숙증 클리닉</h2>
                <p className="text-gray-600 mt-1">Precocious Puberty Clinic</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">성조숙증이란?</h3>
              <p className="text-gray-700 leading-relaxed">
                여아의 경우 만 8세 이전, 남아의 경우 만 9세 이전에 2차 성징이 나타나는 것을 말합니다.
                조기에 발견하여 적절히 치료하면 정상적인 성장 발달을 도울 수 있습니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">진료 대상</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  여아: 만 8세 이전 가슴 발달, 초경 시작
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  남아: 만 9세 이전 고환 발달, 음모 발생
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  키가 또래보다 빠르게 크는 경우
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  뼈나이가 실제 나이보다 빠른 경우
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">진료 과정</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-xl">1</div>
                  <p className="font-semibold">문진 및 진찰</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-xl">2</div>
                  <p className="font-semibold">뼈나이 검사</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-xl">3</div>
                  <p className="font-semibold">호르몬 검사</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-xl">4</div>
                  <p className="font-semibold">치료 계획</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 저신장 클리닉 */}
        <section id="short-stature" className="mb-16 scroll-mt-20">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <span className="text-5xl mr-4">📏</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">저신장 클리닉</h2>
                <p className="text-gray-600 mt-1">Short Stature Clinic</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">저신장이란?</h3>
              <p className="text-gray-700 leading-relaxed">
                같은 나이, 같은 성별의 아이들과 비교했을 때 키가 3% 미만에 속하거나,
                1년에 4cm 미만으로 자라는 경우를 말합니다. 정확한 원인 진단과 적절한 치료가 중요합니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">진료 대상</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  또래보다 키가 현저히 작은 경우
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  1년에 4cm 미만으로 자라는 경우
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  성장곡선이 정상 범위를 벗어나는 경우
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  성장호르몬 결핍이 의심되는 경우
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">검사 항목</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="font-semibold">성장호르몬 검사</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="font-semibold">갑상선 기능 검사</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="font-semibold">뼈나이 검사</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="font-semibold">IGF-1 검사</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="font-semibold">염색체 검사</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="font-semibold">성장판 검사</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 아동발달센터 */}
        <section id="development" className="scroll-mt-20">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <span className="text-5xl mr-4">🧸</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">아동발달센터</h2>
                <p className="text-gray-600 mt-1">Child Development Center</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">발달 평가란?</h3>
              <p className="text-gray-700 leading-relaxed">
                아이의 인지, 언어, 운동, 사회성 등 전반적인 발달 상태를 체계적으로 평가하여
                발달 지연이나 장애를 조기에 발견하고 적절한 중재를 제공합니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">진료 대상</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  언어 발달이 또래보다 늦은 경우
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  눈 맞춤이나 사회적 상호작용이 부족한 경우
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  운동 발달이 지연되는 경우
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  학습이나 행동에 문제가 있는 경우
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">평가 영역</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🧠</div>
                  <p className="font-semibold">인지 발달</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">💬</div>
                  <p className="font-semibold">언어 발달</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🏃</div>
                  <p className="font-semibold">운동 발달</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">👥</div>
                  <p className="font-semibold">사회성 발달</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
