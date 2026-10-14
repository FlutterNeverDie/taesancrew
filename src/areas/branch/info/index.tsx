import { Container } from "@/components/ui";
import { company, mapQuery, type Branch } from "@/lib/site";

// 지점 정보: 위치 지도 + 주소·찾아오기·운영시간·등록번호 + 네이버/카카오 지도
export function BranchInfo({ b }: { b: Branch }) {
  const q = encodeURIComponent(mapQuery(b));
  const rows: [string, string][] = [
    ["주소", b.address],
    ...(b.landmark ? [["찾아오기", b.landmark] as [string, string]] : []),
    ["운영시간", company.hours],
    ["대표", b.owner ?? "준비 중"],
    ["직업소개소 등록번호", b.agencyNo ?? "준비 중"],
  ];
  return (
    <section className="py-16 md:py-24">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-14">
        <iframe
          title={`${b.name} 위치 지도`}
          src={`https://www.google.com/maps?q=${q}&hl=ko&z=17&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="reveal h-80 w-full rounded-lg border border-rule bg-navy-50 lg:h-full lg:min-h-96"
        />
        <div>
          <h2 className="text-[1.75rem] font-extrabold text-navy-950 md:text-[2.25rem]">찾아오는 길</h2>
          {/* 글씨는 크고 진하게: 항목 이름은 남색 굵게, 값은 더 크게 */}
          <dl className="mt-6 divide-y divide-rule border-y-2 border-navy-900">
            {rows.map(([k, v]) => (
              <div key={k} className="grid gap-1 py-5 sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-baseline sm:gap-4">
                <dt className="text-lg font-bold text-navy-700 md:text-xl">{k}</dt>
                <dd className={`text-xl leading-snug font-bold md:text-2xl ${k === "찾아오기" ? "text-navy-800" : "text-navy-950"}`}>{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`https://map.naver.com/p/search/${q}`} target="_blank" rel="noreferrer" className="press rounded-md border-2 border-navy-800 px-5 py-3 text-lg font-bold whitespace-nowrap text-navy-800 hover:bg-navy-50">
              네이버 지도
            </a>
            <a href={`https://map.kakao.com/link/search/${q}`} target="_blank" rel="noreferrer" className="press rounded-md border-2 border-navy-800 px-5 py-3 text-lg font-bold whitespace-nowrap text-navy-800 hover:bg-navy-50">
              카카오맵
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
