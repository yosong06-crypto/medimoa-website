import Link from 'next/link'

export default function NoticesPage() {
  // 임시 데이터 (나중에 DB에서 가져옴)
  const notices = [
    {
      id: 1,
      title: '메디모아의원 개원 안내',
      content: '아이들의 건강한 성장을 위해 메디모아의원이 개원하였습니다.',
      createdAt: '2024-01-15',
      views: 125,
    },
    {
      id: 2,
      title: '연말연시 휴진 안내',
      content: '12월 31일부터 1월 2일까지 휴진합니다.',
      createdAt: '2024-01-10',
      views: 89,
    },
    {
      id: 3,
      title: '독감 예방접종 실시',
      content: '독감 예방접종을 실시하고 있습니다. 사전 예약 바랍니다.',
      createdAt: '2024-01-05',
      views: 156,
    },
  ]

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">공지사항</h1>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* 테이블 헤더 */}
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
            <div className="grid grid-cols-12 gap-4 font-semibold text-gray-700">
              <div className="col-span-1 text-center">번호</div>
              <div className="col-span-7">제목</div>
              <div className="col-span-2 text-center">작성일</div>
              <div className="col-span-2 text-center">조회수</div>
            </div>
          </div>

          {/* 게시물 목록 */}
          <div className="divide-y divide-gray-200">
            {notices.length === 0 ? (
              <div className="py-16 text-center text-gray-500">
                등록된 공지사항이 없습니다.
              </div>
            ) : (
              notices.map((notice, index) => (
                <Link
                  key={notice.id}
                  href={`/notices/${notice.id}`}
                  className="block px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-1 text-center text-gray-600">
                      {notices.length - index}
                    </div>
                    <div className="col-span-7">
                      <h3 className="text-gray-900 font-semibold hover:text-green-600 transition-colors">
                        {notice.title}
                      </h3>
                    </div>
                    <div className="col-span-2 text-center text-gray-600 text-sm">
                      {notice.createdAt}
                    </div>
                    <div className="col-span-2 text-center text-gray-600 text-sm">
                      {notice.views}
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>

        {/* 페이지네이션 (나중에 구현) */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              이전
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              3
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
