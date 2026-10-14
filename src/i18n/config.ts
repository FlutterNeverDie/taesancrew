// 다국어 설정. 한국어가 기본(주소 앞에 언어 코드 없음), 나머지는 /en/jobs 처럼 언어 코드가 붙는다
export const locales = ["ko", "en", "zh", "ja", "vi", "uz", "mn", "ru", "ar", "ne", "th", "id", "km"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ko";
export const foreignLocales = locales.filter((l) => l !== defaultLocale) as Exclude<Locale, "ko">[];

// name: 언어 고르는 메뉴에 그 나라 말로 보이는 이름 / korean: 한국어 이름(문자에 "사용 언어"로 붙음)
// html: <html lang> 값 / dir: 글 쓰는 방향 (아랍어만 오른쪽→왼쪽) / og: 카톡·SNS 미리보기 언어
export const localeInfo: Record<Locale, { name: string; korean: string; html: string; dir: "ltr" | "rtl"; og: string }> = {
  ko: { name: "한국어", korean: "한국어", html: "ko", dir: "ltr", og: "ko_KR" },
  en: { name: "English", korean: "영어", html: "en", dir: "ltr", og: "en_US" },
  zh: { name: "中文", korean: "중국어", html: "zh-CN", dir: "ltr", og: "zh_CN" },
  ja: { name: "日本語", korean: "일본어", html: "ja", dir: "ltr", og: "ja_JP" },
  vi: { name: "Tiếng Việt", korean: "베트남어", html: "vi", dir: "ltr", og: "vi_VN" },
  uz: { name: "Oʻzbekcha", korean: "우즈베크어", html: "uz", dir: "ltr", og: "uz_UZ" },
  mn: { name: "Монгол", korean: "몽골어", html: "mn", dir: "ltr", og: "mn_MN" },
  ru: { name: "Русский", korean: "러시아어", html: "ru", dir: "ltr", og: "ru_RU" },
  ar: { name: "العربية", korean: "아랍어", html: "ar", dir: "rtl", og: "ar_AR" },
  ne: { name: "नेपाली", korean: "네팔어", html: "ne", dir: "ltr", og: "ne_NP" },
  th: { name: "ไทย", korean: "태국어", html: "th", dir: "ltr", og: "th_TH" },
  id: { name: "Bahasa Indonesia", korean: "인도네시아어", html: "id", dir: "ltr", og: "id_ID" },
  km: { name: "ខ្មែរ", korean: "캄보디아어", html: "km", dir: "ltr", og: "km_KH" },
};

export const isLocale = (s: string): s is Locale => (locales as readonly string[]).includes(s);

// 언어에 맞는 주소: lp("en", "/jobs") → "/en/jobs", lp("ko", "/jobs") → "/jobs"
export function lp(lang: Locale, path: string) {
  if (lang === defaultLocale) return path;
  if (path === "/") return `/${lang}`;
  return `/${lang}${path}`;
}

// 현재 주소에서 언어 코드를 떼어 낸다: "/en/jobs" → { lang: "en", path: "/jobs" }
export function splitLocale(pathname: string): { lang: Locale; path: string } {
  const seg = pathname.split("/")[1] ?? "";
  if (isLocale(seg) && seg !== defaultLocale) {
    const rest = pathname.slice(seg.length + 1);
    return { lang: seg, path: rest === "" ? "/" : rest };
  }
  return { lang: defaultLocale, path: pathname || "/" };
}

// "{name} 위치 지도" 같은 문구의 {자리}를 채운다
export function fmt(s: string, vars: Record<string, string | number>) {
  return s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
}
