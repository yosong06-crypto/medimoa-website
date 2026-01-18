import Link from 'next/link'
import { redirect } from 'next/navigation'

export default function AdminPage() {
  // 나중에 세션 체크 추가
  // const session = await getServerSession()
  // if (!session) {
  //   redirect('/admin/login')
  // }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">관리자 페이지</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 공지사항 관리 */}
          <Link
            href="/admin/notices"
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="text-4xl mb-4">📢</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">공지사항 관리</h2>
            <p className="text-gray-600">공지사항을 등록, 수정, 삭제할 수 있습니다.</p>
          </Link>

          {/* 통계 (추후 구현) */}
          <div className="bg-white p-8 rounded-xl shadow-lg opacity-50">
            <div className="text-4xl mb-4">📊</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">통계</h2>
            <p className="text-gray-600">방문자 및 조회 통계를 확인할 수 있습니다.</p>
            <span className="inline-block mt-2 text-sm text-gray-500">(준비중)</span>
          </div>

          {/* 설정 (추후 구현) */}
          <div className="bg-white p-8 rounded-xl shadow-lg opacity-50">
            <div className="text-4xl mb-4">⚙️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">설정</h2>
            <p className="text-gray-600">사이트 설정을 변경할 수 있습니다.</p>
            <span className="inline-block mt-2 text-sm text-gray-500">(준비중)</span>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="text-green-600 hover:text-green-700 font-semibold"
          >
            ← 메인 페이지로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  )
}
