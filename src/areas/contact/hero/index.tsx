import Link from "next/link";
import { PageHero } from "@/components/ui";
import { CheckIcon } from "@/components/icons";
import { getDict, lp, type Locale } from "@/i18n";
import { BrochureButton } from "@/areas/shared/brochure-button";

// 문의 페이지 첫 화면: 제목·설명 + 신뢰 칩 3개(정식 등록·지점·규모) + 오른쪽 회사소개서 받기
// 칩 글자는 이미 있는 사전 값(등록증 제목, 강조 숫자)을 다시 쓴다
export function ContactHero({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.contact;
  const chip = "inline-flex min-h-10 items-center gap-2 rounded-full bg-white/10 px-4 text-base font-semibold text-white ring-1 ring-white/15";
  return (
    <PageHero title={t.title} desc={t.desc} action={<BrochureButton lang={lang} tone="solid" />}>
      <ul className="mt-7 flex flex-wrap gap-2.5">
        <li>
          <Link href={lp(lang, "/awards")} className={`${chip} hover:bg-white/15`}>
            <CheckIcon className="h-4 w-4 text-point" /> {d.meta.awardsTitle}
          </Link>
        </li>
        {[d.stats[2], d.stats[1]].map((s) => (
          <li key={s.label} className={chip}>
            <CheckIcon className="h-4 w-4 text-point" />
            <span><b className="font-extrabold">{s.value}</b> {s.label}</span>
          </li>
        ))}
      </ul>
    </PageHero>
  );
}
