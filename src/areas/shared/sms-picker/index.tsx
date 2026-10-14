import { branches } from "@/lib/site";
import { smsApplyHref } from "@/i18n/sms";
import { branchText, getDict, type Locale } from "@/i18n";
import { SmsPicker } from "./Picker";

// 서버에서 지점별 문자 링크와 문구를 만들어 브라우저 쪽 창(Picker)에 넘긴다
export function SmsPickerFor({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const items = branches
    .filter((b) => b.phone)
    .map((b) => {
      const bt = branchText(d, b.slug);
      return { slug: b.slug, name: bt.name, sub: bt.landmark || b.address, phone: b.phone!, href: smsApplyHref(b.phone!, b.name, lang) };
    });
  return <SmsPicker items={items} text={{ ...d.smsPicker, close: d.common.close }} />;
}
