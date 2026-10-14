import { getDict, localeInfo, locales, type Locale } from "@/i18n";
import { HeaderClient } from "./HeaderClient";

// 머리글: 서버에서 그 언어 메뉴 이름표와 언어 목록만 골라 브라우저 쪽(HeaderClient)에 넘긴다
export function Header({ lang }: { lang: Locale }) {
  const languages = locales.map((code) => ({ code, name: localeInfo[code].name, html: localeInfo[code].html }));
  return <HeaderClient lang={lang} t={getDict(lang).nav} languages={languages} />;
}
