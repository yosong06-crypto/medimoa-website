'use client'

import { useState } from 'react'

export default function FloatingButtons() {
  const [showButtons, setShowButtons] = useState(true)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!showButtons) return null

  return (
    <div className="fixed right-4 bottom-20 flex flex-col space-y-3 z-40">
      {/* 빠른상담 버튼 */}
      <button
        onClick={() => alert('빠른 상담 서비스는 준비중입니다.')}
        className="bg-pink-500 text-white w-16 h-16 rounded-full shadow-lg hover:bg-pink-600 hover:scale-110 transition-all flex flex-col items-center justify-center group"
        aria-label="빠른상담"
      >
        <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <span className="text-xs font-bold">빠른상담</span>
      </button>

      {/* 전화하기 버튼 */}
      <a
        href="tel:02-1234-5678"
        className="bg-green-500 text-white w-16 h-16 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all flex flex-col items-center justify-center group"
        aria-label="전화하기"
      >
        <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="text-xs font-bold">전화</span>
      </a>

      {/* TOP 버튼 */}
      <button
        onClick={scrollToTop}
        className="bg-gray-700 text-white w-16 h-16 rounded-full shadow-lg hover:bg-gray-800 hover:scale-110 transition-all flex items-center justify-center group"
        aria-label="맨 위로"
      >
        <div className="flex flex-col items-center">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span className="text-xs font-bold">TOP</span>
        </div>
      </button>
    </div>
  )
}
