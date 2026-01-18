'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [growthClinicOpen, setGrowthClinicOpen] = useState(false)
  
  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + '/')
  }

  const growthClinicLinks = [
    { href: '/services/precocious', label: '성조숙증 클리닉' },
    { href: '/services/growth', label: '저신장 클리닉' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            {/* 노란 원형 배경 */}
            <div className="relative">
              <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
                {/* 파란 로고 아이콘 */}
                <Image
                  src="/images/logo/medimoa-logo.png"
                  alt="메디모아의원"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            {/* 텍스트 로고 */}
            <div className="flex flex-col">
              <span className="text-blue-600 text-xl font-bold leading-tight">메디모아</span>
              <span className="text-blue-600 text-sm leading-tight">의원</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/about"
              className={`text-base font-medium transition-colors py-2 ${
                isActive('/about')
                  ? 'text-pink-500 border-b-2 border-pink-500'
                  : 'text-gray-700 hover:text-pink-500'
              }`}
            >
              메디모아의원
            </Link>

            {/* 성조숙증 성장 클리닉 Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setGrowthClinicOpen(true)}
              onMouseLeave={() => setGrowthClinicOpen(false)}
            >
              <button
                className={`text-base font-medium transition-colors py-2 flex items-center ${
                  isActive('/services/precocious') || isActive('/services/growth')
                    ? 'text-pink-500 border-b-2 border-pink-500'
                    : 'text-gray-700 hover:text-pink-500'
                }`}
              >
                성조숙증 성장 클리닉
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {growthClinicOpen && (
                <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  {growthClinicLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-yellow-50 hover:text-pink-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/services/development"
              className={`text-base font-medium transition-colors py-2 ${
                isActive('/services/development')
                  ? 'text-pink-500 border-b-2 border-pink-500'
                  : 'text-gray-700 hover:text-pink-500'
              }`}
            >
              아동발달센터
            </Link>

            <Link
              href="/screening"
              className={`text-base font-medium transition-colors py-2 ${
                isActive('/screening')
                  ? 'text-pink-500 border-b-2 border-pink-500'
                  : 'text-gray-700 hover:text-pink-500'
              }`}
            >
              영유아 발달검사
            </Link>

            <Link
              href="/notices"
              className={`text-base font-medium transition-colors py-2 ${
                isActive('/notices')
                  ? 'text-pink-500 border-b-2 border-pink-500'
                  : 'text-gray-700 hover:text-pink-500'
              }`}
            >
              알림판
            </Link>

            <Link
              href="/community"
              className={`text-base font-medium transition-colors py-2 ${
                isActive('/community')
                  ? 'text-pink-500 border-b-2 border-pink-500'
                  : 'text-gray-700 hover:text-pink-500'
              }`}
            >
              커뮤니티
            </Link>
          </nav>

          {/* Admin Link */}
          <div className="flex items-center">
            <Link
              href="/admin"
              className="text-sm text-gray-500 hover:text-pink-500 transition-colors"
            >
              관리자
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
