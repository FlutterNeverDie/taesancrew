import type { Locale } from "./config";

// 페이지별 카톡·문자 미리보기 이미지 주소. 이미지는 빌드 전에 scripts/og-images.mts가 public/og/에 만든다
// 한국어 페이지만 따로 만들고(제목 글꼴에 다른 나라 글자가 없어서), 나머지와 메인은 public/og.png
const pages = ["about", "business", "jobs", "branches", "blog", "faq", "contact", "awards", "visa"];

// 이 목록의 페이지 + 지점별(/branches/<지점>) + 소식 글(/blog/<글>)에 카드가 있다
export const ogStaticPages = () => pages;

export function ogImage(lang: Locale, path: string) {
  const key = path.replace(/^\//, "").replaceAll("/", "-");
  const has = pages.includes(key) || /^branches-[a-z]+$/.test(key) || /^blog-[a-z0-9-]+$/.test(key);
  return lang === "ko" && has ? `/og/${key}.png` : "/og.png";
}
