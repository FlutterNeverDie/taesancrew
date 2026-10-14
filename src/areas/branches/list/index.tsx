import { Container } from "@/components/ui";
import { branches, tel, type Branch } from "@/lib/site";
import { PhoneIcon } from "@/components/icons";

// 지도 검색어: 따로 정한 값(mapQuery)이 있으면 그것, 없으면 도로명 주소까지만 (층·호수·괄호가 붙으면 위치를 못 찾을 때가 있음)
const mapQuery = (b: Branch) => b.mapQuery ?? b.address.split(",")[0];

export function BranchesList() {
  return (
    <section className="py-16 md:py-24">
      <Container className="space-y-8">
        {branches.map((b) => (
          <article key={b.slug} id={b.slug} className="grid overflow-hidden rounded-lg border border-rule md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
            {/* 위치 지도: 구글 지도 임베드(API 키 필요 없음) */}
            <iframe
              title={`${b.name} 위치 지도`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery(b))}&hl=ko&z=17&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0 bg-navy-50 md:h-full md:min-h-80"
            />
            <div className="p-7 md:p-10">
              <p className="text-base font-semibold text-navy-700">{b.brand}</p>
              <h2 className="mt-1 text-3xl font-extrabold text-navy-950">{b.name}</h2>
              <dl className="mt-6 space-y-3 text-lg text-ink">
                <div className="flex gap-4">
                  <dt className="w-20 shrink-0 font-semibold text-muted">주소</dt>
                  <dd>{b.address}</dd>
                </div>
                {b.landmark && (
                  <div className="flex gap-4">
                    <dt className="w-20 shrink-0 font-semibold text-muted">찾아오기</dt>
                    <dd className="font-semibold text-navy-800">{b.landmark}</dd>
                  </div>
                )}
                <div className="flex gap-4">
                  <dt className="w-20 shrink-0 font-semibold text-muted">운영시간</dt>
                  <dd className="text-muted">준비 중</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                {b.phone ? (
                  <a href={tel(b.phone)} className="press inline-flex items-center gap-2 rounded-md bg-point px-5 py-3 font-bold whitespace-nowrap text-navy-950 hover:bg-point-dark">
                    <PhoneIcon /> {b.phone}
                  </a>
                ) : (
                  <span className="rounded-md bg-navy-50 px-5 py-3 text-muted">전화번호 준비 중</span>
                )}
                <a
                  href={`https://map.naver.com/p/search/${encodeURIComponent(mapQuery(b))}`}
                  target="_blank"
                  rel="noreferrer"
                  className="press rounded-md border border-navy-800 px-5 py-3 font-bold whitespace-nowrap text-navy-800 hover:bg-navy-50"
                >
                  네이버 지도
                </a>
                <a
                  href={`https://map.kakao.com/link/search/${encodeURIComponent(mapQuery(b))}`}
                  target="_blank"
                  rel="noreferrer"
                  className="press rounded-md border border-navy-800 px-5 py-3 font-bold whitespace-nowrap text-navy-800 hover:bg-navy-50"
                >
                  카카오맵
                </a>
              </div>
            </div>
          </article>
        ))}
      </Container>
    </section>
  );
}
