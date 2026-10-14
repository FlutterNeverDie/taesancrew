import type { Metadata, Viewport } from "next";
import { ViewTransition } from "react";
import "./globals.css";
import { Header } from "@/areas/layout/header";
import { Footer } from "@/areas/layout/footer";
import { ContactDock } from "@/areas/layout/contact-dock";
import { StructuredData } from "@/areas/layout/structured-data";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${company.title} | 물류·제조 인력 아웃소싱 전문`,
    template: `%s | ${company.title}`,
  },
  description:
    "20년 물류 현장 노하우, 경기광주 본점·성남·천호 3개 직영 지점. 하루 100명 이상 투입하는 인력 소개·도급 전문기업 태산 리크루트 & 태산크루.",
  // 카톡·문자로 링크를 보낼 때 보이는 미리보기 카드 (이미지: public/og.png 1200×630)
  metadataBase: new URL(company.siteUrl),
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: company.title,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: company.title }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  // 네이버 서치어드바이저·구글 서치콘솔 소유 확인 (값은 site.ts의 company.verification)
  verification: {
    google: company.verification.google || undefined,
    other: company.verification.naver ? { "naver-site-verification": company.verification.naver } : undefined,
  },
};

export const viewport: Viewport = {
  themeColor: "#011a4a",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        {/* 본문 글꼴 Pretendard는 CDN에서 (쓰는 글자 묶음만 받는 방식). 사이트에 직접 넣으면 CSS가 100KB 넘게 커져서 오히려 느려진다 */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        {/* 제목 글꼴 Paperlogy는 쓰는 두 굵기(700·800)만 사이트에 직접 넣었다 (public/fonts, globals.css의 @font-face).
            외부 CSS를 한 번 더 받는 단계가 없어져 첫 화면이 빨리 뜬다 */}
        <link rel="preload" href="/fonts/Paperlogy-8ExtraBold.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body className="flex min-h-full flex-col pb-16 lg:pb-0">
        <a href="#main" className="sr-only z-50 bg-point px-4 py-3 font-bold text-navy-950 focus:not-sr-only focus:fixed focus:top-2 focus:left-2">
          본문으로 건너뛰기
        </a>
        <Header />
        <main id="main" className="flex-1">
          {/* 페이지 이동 때 본문만 짧게 크로스페이드 (globals.css의 page-content) */}
          <ViewTransition name="page-content">{children}</ViewTransition>
        </main>
        <Footer />
        <ContactDock />
        <StructuredData />
      </body>
    </html>
  );
}
