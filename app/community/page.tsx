export default function CommunityPage() {
  return (
    <div className="py-16 bg-gradient-to-br from-yellow-50 to-pink-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 border-b-4 border-yellow-400 pb-4">
            커뮤니티
          </h1>

          <p className="text-gray-600 mb-10 text-center">
            메디모아의원 커뮤니티 페이지입니다. 환자분들과 소통하는 공간입니다.
          </p>

          {/* 게시판 카테고리 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-6 rounded-xl border border-yellow-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-3 text-center">💬</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">자유게시판</h2>
              <p className="text-gray-600 text-sm text-center">
                자유롭게 소통하는 공간입니다
              </p>
              <div className="mt-4 text-center">
                <span className="text-xs text-gray-500">게시글 0개</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-6 rounded-xl border border-pink-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-3 text-center">❓</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">질문과 답변</h2>
              <p className="text-gray-600 text-sm text-center">
                궁금한 점을 질문해주세요
              </p>
              <div className="mt-4 text-center">
                <span className="text-xs text-gray-500">게시글 0개</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-3 text-center">⭐</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">진료 후기</h2>
              <p className="text-gray-600 text-sm text-center">
                진료 경험을 공유해주세요
              </p>
              <div className="mt-4 text-center">
                <span className="text-xs text-gray-500">게시글 0개</span>
              </div>
            </div>
          </div>

          {/* 준비중 안내 */}
          <div className="bg-gradient-to-r from-yellow-100 to-pink-100 p-8 rounded-xl text-center">
            <div className="text-5xl mb-4">🚧</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              커뮤니티 서비스 준비중입니다
            </h3>
            <p className="text-gray-700 mb-6">
              더 나은 서비스를 제공하기 위해 준비하고 있습니다.<br />
              빠른 시일 내에 찾아뵙겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/notices"
                className="bg-pink-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-pink-600 transition-colors shadow-md"
              >
                공지사항 보기
              </a>
              <a
                href="tel:02-1234-5678"
                className="bg-white text-pink-600 px-6 py-3 rounded-lg font-bold border-2 border-pink-500 hover:bg-pink-50 transition-colors shadow-md"
              >
                전화 문의하기
              </a>
            </div>
          </div>

          {/* 하단 안내 */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">📞</span>
                전화 상담
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                평일 09:00 - 18:00<br />
                토요일 09:00 - 13:00
              </p>
              <p className="text-pink-600 font-bold">02-1234-5678</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">📧</span>
                온라인 문의
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                이메일을 통해 문의하시면<br />
                빠른 시일 내에 답변드립니다
              </p>
              <p className="text-pink-600 font-bold">info@medimoa.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
