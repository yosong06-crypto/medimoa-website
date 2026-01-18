'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [servicesOpen, setServicesOpen] = useState(false)
  
  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + '/')
  }

  const serviceLinks = [
    { href: '/services/development', label: '아동발달센터' },
    { href: '/services/precocious', label: '성조숙증 클리닉' },
    { href: '/services/growth', label: '저신장 클리닉' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo/medimoa-logo.png"
              alt="메디모아의원"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="text-2xl font-bold text-blue-600">메디모아의원</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-base font-medium transition-colors py-2 ${
                isActive('/') && pathname === '/'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              홈
            </Link>

            <Link
              href="/about"
              className={`text-base font-medium transition-colors py-2 ${
                isActive('/about')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              병원 소개
            </Link>

            <Link
              href="/doctors"
              className={`text-base font-medium transition-colors py-2 ${
                isActive('/doctors')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              의료진 소개
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`text-base font-medium transition-colors py-2 flex items-center ${
                  isActive('/services')
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                진료 안내
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/notices"
              className={`text-base font-medium transition-colors py-2 ${
                isActive('/notices')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              공지사항
            </Link>
          </nav>

          {/* Admin Link */}
          <div className="flex items-center">
            <Link
              href="/admin"
              className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
            >
              관리자
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
