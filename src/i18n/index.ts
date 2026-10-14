import type { Locale } from "./config";
import { ko, type Dict } from "./dict/ko";
import { en } from "./dict/en";
import { zh } from "./dict/zh";
import { ja } from "./dict/ja";
import { vi } from "./dict/vi";
import { uz } from "./dict/uz";
import { mn } from "./dict/mn";
import { ru } from "./dict/ru";
import { ar } from "./dict/ar";
import { ne } from "./dict/ne";
import { th } from "./dict/th";
import { id } from "./dict/id";
import { km } from "./dict/km";

// 언어별 사전. 서버에서만 읽는다 (브라우저로 가는 쪽에는 필요한 조각만 넘긴다)
const dicts: Record<Locale, Dict> = { ko, en, zh, ja, vi, uz, mn, ru, ar, ne, th, id, km };

export function getDict(lang: Locale): Dict {
  return dicts[lang] ?? ko;
}

export type { Dict };
export * from "./config";

// 지점·공고 문구 찾기 (slug는 site.ts와 같은 값)
export function branchText(t: Dict, slug: string) {
  return t.branches[slug as keyof Dict["branches"]];
}
export function postText(t: Dict, slug: string) {
  return t.posts[slug as keyof Dict["posts"]];
}

// 지점 상호 표시: 한국어 화면은 공식 상호(태산 리크루트 / 태산크루), 다른 언어 화면은 로마자.
// 바닥글 사업자 정보는 공식이라 이 함수를 쓰지 않고 한국어 그대로 둔다
const brandLatin: Record<string, string> = { "태산 리크루트": "Taesan Recruit", 태산크루: "Taesan Crew" };
export function brandName(brand: string, lang: Locale) {
  return lang === "ko" ? brand : (brandLatin[brand] ?? brand);
}
