import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${company.name} | 물류·제조 인력 아웃소싱 전문`,
    template: `%s | ${company.name}`,
  },
  description:
    "20년 물류 현장 노하우, 수진역·천호·경기광주 3개 직영 지점. 하루 100명 이상 투입하는 인력 파견·도급 전문기업 태산크루.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="flex min-h-full flex-col pb-16 md:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
