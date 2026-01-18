'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + '/')
  }

  const navLinks = [
    { href: '/', label: '홈' },
    { href: '/about', label: '병원 소개' },
    { href: '/doctors', label: '의료진 소개' },
    { href: '/services', label: '진료 안내' },
    { href: '/notices', label: '공지사항' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-300 to-blue-300 rounded-full"></div>
            <span className="text-2xl font-bold text-gray-800">메디모아의원</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/admin"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              관리자
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
