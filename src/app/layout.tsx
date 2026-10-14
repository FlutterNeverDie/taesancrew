import type { Metadata, Viewport } from "next";
import "./globals.css";
import { company } from "@/lib/site";
import { localeInfo } from "@/i18n/config";

export const metadata: Metadata = {
  // 제목·설명은 언어별 레이아웃((ko)/layout.tsx, [lang]/layout.tsx)과 각 페이지에서 정한다
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

// <html lang dir>: 주소 맨 앞 언어 코드(/en, /ar …)를 보고 화면이 그려지기 전에 맞춘다.
// 정적 사이트라 서버가 없어서 첫 화면은 이 짧은 스크립트가, 페이지 이동 때는 [lang]/layout.tsx의 HtmlLang이 맞춘다
const langScript = `(function(){var m=${JSON.stringify(
  Object.fromEntries(Object.entries(localeInfo).map(([k, v]) => [k, [v.html, v.dir]])),
)};var s=location.pathname.split("/")[1];var v=m[s];if(v){document.documentElement.lang=v[0];document.documentElement.dir=v[1];}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: langScript }} />
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
      {/* 머리글·바닥글·연락 버튼은 언어별 레이아웃의 SiteChrome에서 그린다 */}
      <body className="flex min-h-full flex-col pb-16 lg:pb-0">{children}</body>
    </html>
  );
}
