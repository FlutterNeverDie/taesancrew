import type { Metadata } from "next";
import { locales, localeInfo, lp, type Locale } from "./config";

// 페이지 제목·설명 + 언어별 같은 페이지 주소(hreflang). 검색엔진이 "이 페이지의 영어판은 /en/…"을 알게 된다
// absolute: 제목 뒤에 "| 태산 리크루트 & 태산크루"를 붙이지 않을 때
export function pageMeta(lang: Locale, path: string, title: string, description: string, absolute = false): Metadata {
  const languages: Record<string, string> = Object.fromEntries(locales.map((l) => [localeInfo[l].html, lp(l, path)]));
  languages["x-default"] = lp("ko", path);
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: lp(lang, path), languages },
    openGraph: {
      locale: localeInfo[lang].og,
      title,
      description,
      url: lp(lang, path),
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
  };
}
