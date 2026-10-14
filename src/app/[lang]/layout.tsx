import type { Metadata } from "next";
import { foreignLocales, getDict, localeInfo, type Locale } from "@/i18n";
import { SiteChrome } from "@/areas/layout/chrome";
import { HtmlLang } from "@/areas/layout/chrome/HtmlLang";

// 다른 언어 페이지 틀 (/en, /vi, /ar …). 한국어는 (ko)/layout.tsx
export const dynamicParams = false;
export function generateStaticParams() {
  return foreignLocales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const t = getDict((await params).lang as Locale).meta;
  return { title: { default: t.homeTitle, template: t.titleTemplate }, description: t.homeDesc };
}

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const lang = (await params).lang as Locale;
  const { html, dir } = localeInfo[lang];
  return (
    <>
      {/* 페이지를 옮겨 다닐 때 <html lang dir>을 맞춘다 (첫 화면은 루트 레이아웃의 짧은 스크립트) */}
      <HtmlLang lang={html} dir={dir} />
      <SiteChrome lang={lang}>{children}</SiteChrome>
    </>
  );
}
