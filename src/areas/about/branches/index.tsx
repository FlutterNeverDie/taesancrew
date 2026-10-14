import Link from "next/link";
import { Container } from "@/components/ui";
import { branches, tel } from "@/lib/site";
import { brandName, branchText, fmt, getDict, lp, type Locale } from "@/i18n";

// 회사소개 안의 "지점안내" 요약. 자세한 내용(주소·지도)은 /branches
export function AboutBranches({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.about;
  return (
    <section className="bg-navy-50 py-20 md:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[1.75rem] leading-snug font-extrabold text-navy-950 md:text-[2.5rem]">{t.branchesTitle}</h2>
          <Link href={lp(lang, "/branches")} className="text-lg font-bold text-navy-700 underline decoration-2 underline-offset-4 hover:text-navy-900">
            {t.branchesLink}
          </Link>
        </div>
        <ul className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3">
          {branches.map((b, i) => {
            const bt = branchText(d, b.slug);
            return (
              <li key={b.slug} className={`rounded-lg p-6 md:p-7 ${i === 0 ? "on-dark bg-navy-900 text-white" : "bg-paper"}`}>
                <p className={`text-base font-bold ${i === 0 ? "text-point" : "text-navy-700"}`}>{brandName(b.brand, lang)}</p>
                <p className={`mt-1 text-2xl font-extrabold ${i === 0 ? "text-white" : "text-navy-950"}`}>{bt.name}</p>
                <p className={`mt-3 text-lg ${i === 0 ? "text-white/90" : "text-ink"}`}>{b.address}</p>
                {bt.landmark && <p className={`mt-0.5 text-base font-semibold md:text-lg ${i === 0 ? "text-brand-sky" : "text-navy-700"}`}>{bt.landmark}</p>}
                <p className={`mt-1 text-base md:text-lg ${i === 0 ? "text-white/85" : "text-muted"}`}>
                  {fmt(t.ownerOpened, { owner: b.owner ?? d.common.preparing, opened: b.opened })}
                </p>
                {b.phone && (
                  <a
                    href={tel(b.phone)}
                    dir="ltr"
                    className={`press mt-5 inline-flex min-h-12 items-center rounded-md px-5 text-lg font-bold tabular-nums ${
                      i === 0 ? "bg-point text-navy-950 hover:bg-point-dark" : "bg-navy-900 text-white hover:bg-navy-800"
                    }`}
                  >
                    {b.phone}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
