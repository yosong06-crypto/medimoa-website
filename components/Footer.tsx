import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 병원 정보 */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo/medimoa-logo.png"
                alt="메디모아의원"
                width={40}
                height={40}
                className="object-contain"
              />
              <h3 className="text-xl font-bold">메디모아의원</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              아이들의 건강한 성장을 돕는<br />
              소아청소년과 전문 의료기관
            </p>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-xl font-bold mb-4">빠른 링크</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  병원 소개
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-gray-300 hover:text-white transition-colors">
                  의료진 소개
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  진료 안내
                </Link>
              </li>
              <li>
                <Link href="/notices" className="text-gray-300 hover:text-white transition-colors">
                  공지사항
                </Link>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-xl font-bold mb-4">진료 시간 및 연락처</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>평일: 09:00 - 18:00</li>
              <li>토요일: 09:00 - 13:00</li>
              <li>점심시간: 13:00 - 14:00</li>
              <li className="pt-2">
                <a href="tel:02-1234-5678" className="hover:text-white transition-colors">
                  📞 02-1234-5678
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} 메디모아의원. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
