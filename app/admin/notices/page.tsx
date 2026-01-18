'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function AdminNoticesPage() {
  // 임시 데이터
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: '메디모아의원 개원 안내',
      createdAt: '2024-01-15',
      views: 125,
      published: true,
    },
    {
      id: 2,
      title: '연말연시 휴진 안내',
      createdAt: '2024-01-10',
      views: 89,
      published: true,
    },
    {
      id: 3,
      title: '독감 예방접종 실시',
      createdAt: '2024-01-05',
      views: 156,
      published: true,
    },
  ])

  const handleDelete = (id: number) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      setNotices(notices.filter(notice => notice.id !== id))
      alert('삭제되었습니다.')
    }
  }

  const togglePublish = (id: number) => {
    setNotices(notices.map(notice => 
      notice.id === id ? { ...notice, published: !notice.published } : notice
    ))
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">공지사항 관리</h1>
            <p className="text-gray-600">공지사항을 등록, 수정, 삭제할 수 있습니다.</p>
          </div>
          <Link
            href="/admin/notices/new"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            + 새 공지사항 작성
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* 테이블 헤더 */}
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
            <div className="grid grid-cols-12 gap-4 font-semibold text-gray-700">
              <div className="col-span-1 text-center">번호</div>
              <div className="col-span-5">제목</div>
              <div className="col-span-2 text-center">작성일</div>
              <div className="col-span-1 text-center">조회수</div>
              <div className="col-span-1 text-center">상태</div>
              <div className="col-span-2 text-center">관리</div>
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
                <div
                  key={notice.id}
                  className="px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-1 text-center text-gray-600">
                      {notices.length - index}
                    </div>
                    <div className="col-span-5">
                      <h3 className="text-gray-900 font-semibold">
                        {notice.title}
                      </h3>
                    </div>
                    <div className="col-span-2 text-center text-gray-600 text-sm">
                      {notice.createdAt}
                    </div>
                    <div className="col-span-1 text-center text-gray-600 text-sm">
                      {notice.views}
                    </div>
                    <div className="col-span-1 text-center">
                      <button
                        onClick={() => togglePublish(notice.id)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          notice.published
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {notice.published ? '공개' : '비공개'}
                      </button>
                    </div>
                    <div className="col-span-2 text-center">
                      <div className="flex justify-center space-x-2">
                        <Link
                          href={`/admin/notices/${notice.id}/edit`}
                          className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
                        >
                          수정
                        </Link>
                        <span className="text-gray-300">|</span>
                        <button
                          onClick={() => handleDelete(notice.id)}
                          className="text-red-600 hover:text-red-800 text-sm font-semibold"
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/admin"
            className="text-green-600 hover:text-green-700 font-semibold"
          >
            ← 관리자 페이지로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  )
}
