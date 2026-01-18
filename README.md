# 메디모아의원 웹사이트

소아청소년과 전문 의료기관 메디모아의원의 공식 웹사이트입니다.

## 📌 프로젝트 개요

- **프로젝트명**: medimoa-website
- **목표**: 소아청소년과 전문 의료기관의 정보 제공 및 공지사항 관리
- **기술 스택**: Next.js 14, TypeScript, Tailwind CSS, Prisma ORM, SQLite

## 🌐 URL

- **개발 서버**: https://3000-inacp8ne75sqxl6ovdddb-2e1b9533.sandbox.novita.ai
- **GitHub**: (추후 추가 예정)

## ✨ 주요 기능

### 완료된 기능

1. **메인 페이지**
   - 히어로 섹션
   - 주요 진료 소개 (3개 카드)
   - 공지사항 최신 3개 표시

2. **병원 소개 페이지**
   - 원장 인사말
   - 병원 철학 (4가지 핵심 가치)
   - 시설 안내 (위치, 교통, 주차, 시설)

3. **의료진 소개 페이지**
   - 대표원장 프로필
   - 학력 및 경력
   - 전문 진료 분야

4. **진료 안내 페이지**
   - 성조숙증 클리닉
   - 저신장 클리닉
   - 아동발달센터

5. **공지사항 페이지**
   - 게시판 형태 목록
   - 페이지네이션 UI

6. **관리자 페이지**
   - 로그인 페이지
   - 관리자 대시보드
   - 공지사항 관리 (목록, 작성, 수정, 삭제)

7. **콘텐츠 마크다운 파일** ✨ NEW
   - `intro.md`: 병원 소개/인사말 (12개 이미지 참조)
   - `doctors.md`: 의료진 소개 (9개 이미지 참조)
   - `development.md`: 아동발달센터 상세 정보 (28개 이미지 참조)
   - `precocious.md`: 성조숙증 클리닉 상세 정보 (21개 이미지 참조)
   - `growth.md`: 저신장/성장 클리닉 상세 정보 (13개 이미지 참조)

### 구현 예정 기능

1. **마크다운 콘텐츠 렌더링**
   - 마크다운 파일을 페이지에 렌더링
   - 이미지 최적화 및 로딩
   - 목차(TOC) 자동 생성

2. **NextAuth.js 인증**
   - 관리자 로그인 기능
   - 세션 관리
   - 보호된 라우트

3. **공지사항 CRUD**
   - 데이터베이스 연동
   - 이미지 업로드
   - 실제 CRUD 기능 구현

4. **페이지네이션**
   - 실제 동작하는 페이지네이션
   - 검색 기능

## 🗄️ 데이터베이스 구조

### Admin (관리자)
```prisma
model Admin {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  name      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### Notice (공지사항)
```prisma
model Notice {
  id        String   @id @default(cuid())
  title     String
  content   String
  images    String?  // JSON array of image URLs
  views     Int      @default(0)
  published Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🎨 디자인 시스템

- **색상 팔레트**
  - Primary: 연한 민트 (#86efac)
  - Secondary: 연한 블루 (#93c5fd)
  - Accent: 골드 (#fbbf24)
  - Background: 화이트 (#ffffff)
  - Foreground: 다크 그레이 (#1f2937)

- **폰트**: Geist Sans, Geist Mono (Google Fonts)
- **반응형**: 모바일, 태블릿, 데스크톱 지원

## 📁 프로젝트 구조

```
medimoa-website/
├── app/                    # Next.js App Router
│   ├── about/             # 병원 소개
│   ├── doctors/           # 의료진 소개
│   ├── services/          # 진료 안내
│   ├── notices/           # 공지사항
│   ├── admin/             # 관리자 페이지
│   │   ├── login/         # 로그인
│   │   └── notices/       # 공지사항 관리
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 메인 페이지
├── components/            # 공통 컴포넌트
│   ├── Header.tsx         # 헤더
│   └── Footer.tsx         # 푸터
├── content/               # 마크다운 콘텐츠
│   └── pages/             # 페이지별 콘텐츠
│       ├── intro.md       # 병원 소개/인사말
│       ├── doctors.md     # 의료진 소개
│       ├── development.md # 아동발달센터
│       ├── precocious.md  # 성조숙증 클리닉
│       └── growth.md      # 저신장/성장 클리닉
├── lib/                   # 유틸리티 함수
│   └── prisma.ts          # Prisma 클라이언트
├── prisma/                # 데이터베이스 스키마
│   └── schema.prisma      # Prisma 스키마
└── public/                # 정적 파일
    ├── images/            # 이미지 파일
    │   └── pages/         # 페이지별 이미지
    │       ├── intro/     # 병원 소개 이미지 (12개)
    │       ├── doctors/   # 의료진 이미지 (9개)
    │       ├── development/ # 발달센터 이미지 (55개)
    │       ├── precocious/  # 성조숙증 이미지 (21개)
    │       └── growth/    # 성장클리닉 이미지 (13개)
    └── uploads/           # 업로드 이미지
```

## 🚀 시작하기

### 설치

```bash
npm install
```

### 데이터베이스 마이그레이션

```bash
npx prisma migrate dev
```

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

## 🔒 환경 변수

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

## 👤 테스트 계정

- **이메일**: admin@medimoa.com
- **비밀번호**: admin1234

## 📝 추천 다음 단계

1. **마크다운 렌더링 시스템 구축**
   - `gray-matter`로 frontmatter 파싱
   - `remark`, `rehype`로 마크다운 → HTML 변환
   - 이미지 최적화 (Next.js Image 컴포넌트)
   - 목차(TOC) 자동 생성

2. **실제 이미지 파일 추가**
   - `public/images/pages/` 하위에 실제 이미지 업로드
   - 이미지 최적화 (WebP 변환 등)

3. **NextAuth.js 통합**
   - 실제 인증 로직 구현
   - 세션 기반 접근 제어

4. **공지사항 API 구현**
   - API 라우트 생성
   - CRUD 기능 구현
   - 이미지 업로드 처리

5. **관리자 계정 시드 데이터**
   - 초기 관리자 계정 생성
   - 샘플 공지사항 데이터

6. **SEO 최적화**
   - 메타 태그 추가
   - sitemap.xml 생성
   - robots.txt 추가

7. **배포**
   - Vercel 또는 다른 플랫폼에 배포
   - 프로덕션 데이터베이스 설정

## 📄 라이선스

© 2024 메디모아의원. All rights reserved.

## 🤝 기여

프로젝트 개선을 위한 제안이나 버그 리포트는 언제든 환영합니다.

---

**개발 상태**: 기본 구조, 라우팅, 콘텐츠 마크다운 완료 ✅  
**마지막 업데이트**: 2026-01-18
