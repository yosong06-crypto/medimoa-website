'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(true)

  const services = [
    {
      title: '성조숙증 클리닉',
      description: '아이의 조기 성장 발달을 전문적으로 진단하고 관리합니다.',
      icon: '🌱',
      href: '/services/precocious',
      color: 'from-pink-100 to-pink-50'
    },
    {
      title: '저신장 클리닉',
      description: '아이의 성장 호르몬 검사와 성장 클리닉을 운영합니다.',
      icon: '📏',
      href: '/services/growth',
      color: 'from-yellow-100 to-yellow-50'
    },
    {
      title: '아동발달센터',
      description: '아이의 발달 상태를 체계적으로 평가하고 지원합니다.',
      icon: '🧸',
      href: '/services/development',
      color: 'from-green-100 to-green-50'
    },
  ]

  return (
    <div>
      {/* Hero Section with Popup */}
      <section className="relative bg-gradient-to-br from-yellow-50 via-peach-50 to-pink-50 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              아이들의 건강한 성장을<br />
              함께 지켜갑니다
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              메디모아의원은 소아청소년과 전문의가 아이들의 성장과 발달을<br />
              세심하게 관리하고 치료하는 전문 의료기관입니다.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/services/development"
                className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors shadow-md"
              >
                진료 안내
              </Link>
              <Link
                href="/about"
                className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold border-2 border-pink-500 hover:bg-pink-50 transition-colors shadow-md"
              >
                병원 소개
              </Link>
            </div>
          </div>
        </div>

        {/* 중앙 팝업 배너 */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4">
            <div className="relative bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100 rounded-3xl p-8 max-w-3xl w-full shadow-2xl border-4 border-white">
              {/* 닫기 버튼 */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>

              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* 왼쪽: 텍스트 */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-lg">
                      🏥
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-green-700">메디모아의원</h2>
                      <h3 className="text-3xl md:text-4xl font-bold text-green-800 mt-1">아동발달센터</h3>
                    </div>
                  </div>
                  <p className="text-lg md:text-xl text-gray-800 font-semibold">개원 이벤트 진행중!</p>
                  <p className="text-gray-700 mt-2">초기 상담 이벤트를 진행하고 있습니다</p>
                </div>

                {/* 오른쪽: 일러스트 영역 */}
                <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white shadow-xl">
                  <div className="w-48 h-36 bg-green-500 rounded-xl flex items-center justify-center text-6xl mb-4">
                    🎉
                  </div>
                  <p className="text-center text-xl font-bold mb-2">GRAND OPEN</p>
                  <p className="text-center text-sm">특별 할인 혜택!</p>
                  <div className="mt-4 bg-white text-green-700 px-6 py-2 rounded-lg text-center font-bold">
                    상담 예약하기
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">주요 진료 과목</h2>
            <p className="text-gray-600">전문적이고 세심한 진료를 제공합니다</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className={`bg-gradient-to-br ${service.color} p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-gray-200`}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">공지사항</h2>
            <Link
              href="/notices"
              className="text-pink-600 hover:text-pink-700 font-semibold flex items-center"
            >
              더보기 
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="divide-y">
              <div className="p-6 hover:bg-yellow-50 transition-colors cursor-pointer">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    메디모아의원 개원 안내
                  </h3>
                  <span className="text-sm text-gray-500">2024.01.15</span>
                </div>
                <p className="text-gray-600">
                  아이들의 건강한 성장을 위해 메디모아의원이 개원하였습니다.
                </p>
              </div>

              <div className="p-6 hover:bg-yellow-50 transition-colors cursor-pointer">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    연말연시 휴진 안내
                  </h3>
                  <span className="text-sm text-gray-500">2024.01.10</span>
                </div>
                <p className="text-gray-600">
                  12월 31일부터 1월 2일까지 휴진합니다.
                </p>
              </div>

              <div className="p-6 hover:bg-yellow-50 transition-colors cursor-pointer">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    독감 예방접종 실시
                  </h3>
                  <span className="text-sm text-gray-500">2024.01.05</span>
                </div>
                <p className="text-gray-600">
                  독감 예방접종을 실시하고 있습니다. 사전 예약 바랍니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
