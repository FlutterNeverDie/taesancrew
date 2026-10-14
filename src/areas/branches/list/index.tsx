import Link from "next/link";
import { Container } from "@/components/ui";
import { branches, mapQuery, tel } from "@/lib/site";
import { PhoneIcon } from "@/components/icons";
import { brandName, branchText, fmt, getDict, localeInfo, lp, type Locale } from "@/i18n";

export function BranchesList({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.branchesPage;
  const hl = localeInfo[lang].html;
  return (
    <section className="py-16 md:py-24">
      <Container className="space-y-8">
        {branches.map((b) => {
          const bt = branchText(d, b.slug);
          const q = encodeURIComponent(mapQuery(b));
          return (
            <article key={b.slug} id={b.slug} className="grid overflow-hidden rounded-lg border border-rule md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
              {/* 위치 지도: 구글 지도 임베드(API 키 필요 없음). 지도 글자도 페이지 언어로 */}
              <iframe
                title={fmt(d.common.mapTitle, { name: bt.name })}
                src={`https://www.google.com/maps?q=${q}&hl=${hl}&z=17&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0 bg-navy-50 md:h-full md:min-h-80"
              />
              <div className="p-7 md:p-10">
                <p className="text-base font-semibold text-navy-700">{brandName(b.brand, lang)}</p>
                <h2 className="mt-1 text-3xl font-extrabold text-navy-950">
                  <Link href={lp(lang, `/branches/${b.slug}`)} className="hover:text-navy-700">
                    {bt.name}
                  </Link>
                </h2>
                <dl className="mt-6 space-y-3 text-lg text-ink">
                  <div className="flex gap-4">
                    <dt className="w-24 shrink-0 font-semibold text-muted">{t.address}</dt>
                    <dd>{b.address}</dd>
                  </div>
                  {bt.landmark && (
                    <div className="flex gap-4">
                      <dt className="w-24 shrink-0 font-semibold text-muted">{t.landmark}</dt>
                      <dd className="font-semibold text-navy-800">{bt.landmark}</dd>
                    </div>
                  )}
                </dl>
                <div className="mt-8 flex flex-wrap gap-3">
                  {b.phone ? (
                    <a href={tel(b.phone)} className="press inline-flex items-center gap-2 rounded-md bg-point px-5 py-3 font-bold whitespace-nowrap text-navy-950 hover:bg-point-dark">
                      <PhoneIcon /> <span dir="ltr">{b.phone}</span>
                    </a>
                  ) : (
                    <span className="rounded-md bg-navy-50 px-5 py-3 text-muted">{t.noPhone}</span>
                  )}
                  <a href={`https://map.naver.com/p/search/${q}`} target="_blank" rel="noreferrer" className="press rounded-md border border-navy-800 px-5 py-3 font-bold whitespace-nowrap text-navy-800 hover:bg-navy-50">
                    {d.common.naverMap}
                  </a>
                  <a href={`https://map.kakao.com/link/search/${q}`} target="_blank" rel="noreferrer" className="press rounded-md border border-navy-800 px-5 py-3 font-bold whitespace-nowrap text-navy-800 hover:bg-navy-50">
                    {d.common.kakaoMap}
                  </a>
                  <Link href={lp(lang, `/branches/${b.slug}`)} className="press rounded-md bg-navy-900 px-5 py-3 font-bold whitespace-nowrap text-white hover:bg-navy-800">
                    {t.detail}
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </Container>
    </section>
  );
}
