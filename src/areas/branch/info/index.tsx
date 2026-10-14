import { Container } from "@/components/ui";
import { mapQuery, type Branch } from "@/lib/site";
import { branchText, fmt, getDict, localeInfo, type Locale } from "@/i18n";

// 지점 정보: 위치 지도 + 주소·찾아오기·대표·등록번호 + 네이버/카카오 지도
export function BranchInfo({ lang, b }: { lang: Locale; b: Branch }) {
  const d = getDict(lang);
  const t = d.branchPage;
  const bt = branchText(d, b.slug);
  const q = encodeURIComponent(mapQuery(b));
  const rows: [string, string, boolean][] = [
    [d.branchesPage.address, b.address, false],
    ...(bt.landmark ? [[d.branchesPage.landmark, bt.landmark, true] as [string, string, boolean]] : []),
    [t.owner, b.owner ?? d.common.preparing, false],
    [t.agencyNo, b.agencyNo ?? d.common.preparing, false],
  ];
  return (
    <section className="py-16 md:py-24">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-14">
        <iframe
          title={fmt(d.common.mapTitle, { name: bt.name })}
          src={`https://www.google.com/maps?q=${q}&hl=${localeInfo[lang].html}&z=17&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="reveal h-80 w-full rounded-lg border border-rule bg-navy-50 lg:h-full lg:min-h-96"
        />
        <div>
          <h2 className="text-[1.75rem] font-extrabold text-navy-950 md:text-[2.25rem]">{t.infoTitle}</h2>
          {/* 글씨는 크고 진하게: 항목 이름은 남색 굵게, 값은 더 크게 */}
          <dl className="mt-6 divide-y divide-rule border-y-2 border-navy-900">
            {rows.map(([k, v, accent]) => (
              <div key={k} className="grid gap-1 py-5 sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-baseline sm:gap-4">
                <dt className="text-lg font-bold text-navy-700 md:text-xl">{k}</dt>
                <dd className={`text-xl leading-snug font-bold md:text-2xl ${accent ? "text-navy-800" : "text-navy-950"}`}>{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`https://map.naver.com/p/search/${q}`} target="_blank" rel="noreferrer" className="press rounded-md border-2 border-navy-800 px-5 py-3 text-lg font-bold whitespace-nowrap text-navy-800 hover:bg-navy-50">
              {d.common.naverMap}
            </a>
            <a href={`https://map.kakao.com/link/search/${q}`} target="_blank" rel="noreferrer" className="press rounded-md border-2 border-navy-800 px-5 py-3 text-lg font-bold whitespace-nowrap text-navy-800 hover:bg-navy-50">
              {d.common.kakaoMap}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
