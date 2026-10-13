import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { GradPreview } from "@/components/GradPreview";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${company.title} | 물류·제조 인력 아웃소싱 전문`,
    template: `%s | ${company.title}`,
  },
  description:
    "20년 물류 현장 노하우, 경기광주 본점·성남·천호 3개 직영 지점. 하루 100명 이상 투입하는 인력 소개·도급 전문기업 태산 리크루트 & 태산크루.",
};

export const viewport: Viewport = {
  themeColor: "#011a4a",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fonts-archive/Paperlogy/Paperlogy.css" />
      </head>
      <body className="flex min-h-full flex-col pb-16 lg:pb-0">
        <a href="#main" className="sr-only z-50 bg-point px-4 py-3 font-bold text-navy-950 focus:not-sr-only focus:fixed focus:top-2 focus:left-2">
          본문으로 건너뛰기
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <MobileCallBar />
        <GradPreview />
      </body>
    </html>
  );
}
