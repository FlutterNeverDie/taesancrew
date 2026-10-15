import { Lines, PageHero } from "@/components/ui";
import { getDict, type Locale } from "@/i18n";
import { BrochureButton } from "@/areas/shared/brochure-button";

// 회사소개 첫 화면. 오른쪽에 회사소개서 받기 (문의 페이지와 같은 자리)
export function AboutHero({ lang }: { lang: Locale }) {
  const t = getDict(lang).about;
  return <PageHero title={<Lines lines={t.title} />} desc={t.desc} action={<BrochureButton lang={lang} tone="solid" />} />;
}
