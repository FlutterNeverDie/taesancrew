import { Container, Placeholder } from "@/components/ui";
import { branches, tel } from "@/lib/site";
import { PhoneIcon } from "@/components/icons";

export function BranchesList() {
  return (
    <section className="py-16 md:py-24">
      <Container className="space-y-8">
        {branches.map((b) => (
          <article key={b.slug} id={b.slug} className="grid overflow-hidden rounded-lg border border-rule md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
            <Placeholder label={`${b.name} 사무실 사진`} className="min-h-56 rounded-none border-0" />
            <div className="p-7 md:p-10">
              <p className="text-base font-semibold text-navy-700">{b.brand} · {b.area} 권역</p>
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
                  href={`https://map.naver.com/p/search/${encodeURIComponent(b.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="press rounded-md border border-navy-800 px-5 py-3 font-bold whitespace-nowrap text-navy-800 hover:bg-navy-50"
                >
                  네이버 지도
                </a>
                <a
                  href={`https://map.kakao.com/link/search/${encodeURIComponent(b.address)}`}
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
