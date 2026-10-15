import { Container } from "@/components/ui";
import { PhoneIcon, MessageIcon } from "@/components/icons";
import { tel, type Branch } from "@/lib/site";
import { smsApplyHref } from "@/i18n/sms";
import { brandName, branchText, fmt, getDict, type Locale } from "@/i18n";

// 지점 페이지 첫 화면: "○○ 인력사무소" + 지점 이름 + 전화·문자 지원
export function BranchHero({ lang, b }: { lang: Locale; b: Branch }) {
  const d = getDict(lang);
  const t = d.branchPage;
  const bt = branchText(d, b.slug);
  return (
    <section className="brand-mark on-dark border-b-8 border-point bg-navy-900 py-14 text-white md:py-20">
      <Container>
        <p className="text-lg font-bold text-point">{fmt(t.eyebrow, { region: bt.region })}</p>
        <h1 className="mt-3 text-[2.25rem] leading-tight font-extrabold [overflow-wrap:anywhere] md:text-5xl xl:text-6xl">
          {brandName(b.brand, lang)} {bt.name}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">{bt.intro}</p>
        <p className="mt-3 text-lg text-white/90 md:text-xl">{t.anyone}</p>
        {b.phone && (
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={tel(b.phone)} className="press inline-flex min-h-13 items-center gap-2 rounded-md bg-point px-6 text-lg font-extrabold whitespace-nowrap text-navy-950 tabular-nums hover:bg-point-dark">
              <PhoneIcon /> <span dir="ltr">{b.phone}</span>
            </a>
            <a href={smsApplyHref(b.phone, b.name, lang)} className="press inline-flex min-h-13 items-center gap-2 rounded-md border-2 border-white/60 px-6 text-lg font-bold whitespace-nowrap text-white hover:bg-white/10">
              <MessageIcon /> {t.applySms}
            </a>
          </div>
        )}
      </Container>
    </section>
  );
}
