import { branches } from "@/lib/site";
import { smsApplyHref } from "@/i18n/sms";
import { branchText, getDict, type Locale } from "@/i18n";
import { DockClient } from "./DockClient";

// 연락·공유 버튼: 서버에서 그 언어 문구와 지점별 문자 지원 링크를 만들어 브라우저 쪽(DockClient)에 넘긴다
export function ContactDock({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const items = branches
    .filter((b) => b.phone)
    .map((b) => {
      const bt = branchText(d, b.slug);
      return { slug: b.slug, name: bt.name, sub: bt.landmark || b.address, phone: b.phone!, smsHref: smsApplyHref(b.phone!, b.name, lang) };
    });
  const t = { ...d.dock, call: d.common.call, sms: d.common.sms, smsApply: d.common.smsApply, close: d.common.close, back: d.common.back };
  return <DockClient t={t} branches={items} />;
}
