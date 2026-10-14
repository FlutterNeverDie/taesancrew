import { ViewTransition, type ReactNode } from "react";
import { getDict, localeInfo, type Locale } from "@/i18n";
import { Header } from "@/areas/layout/header";
import { Footer } from "@/areas/layout/footer";
import { ContactDock } from "@/areas/layout/contact-dock";
import { StructuredData } from "@/areas/layout/structured-data";

// 모든 페이지 공통 틀: 본문 건너뛰기 → 머리글 → 본문 → 바닥글 → 연락 버튼.
// 언어별 lang·dir(아랍어는 오른쪽→왼쪽)을 이 틀 전체에 건다
export function SiteChrome({ lang, children }: { lang: Locale; children: ReactNode }) {
  const t = getDict(lang);
  const info = localeInfo[lang];
  return (
    <div lang={info.html} dir={info.dir} className="flex min-h-full flex-1 flex-col">
      <a href="#main" className="sr-only z-50 bg-point px-4 py-3 font-bold text-navy-950 focus:not-sr-only focus:fixed focus:top-2 focus:start-2">
        {t.common.skip}
      </a>
      <Header lang={lang} />
      <main id="main" className="flex-1">
        {/* 페이지 이동 때 본문만 짧게 크로스페이드 (globals.css의 page-content) */}
        <ViewTransition name="page-content">{children}</ViewTransition>
      </main>
      <Footer lang={lang} />
      <ContactDock lang={lang} />
      {lang === "ko" && <StructuredData />}
    </div>
  );
}
