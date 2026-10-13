import type { Metadata } from "next";
import { Container, PageHero, Placeholder } from "@/components/ui";
import { PhoneIcon } from "@/components/MobileCallBar";
import { branches, tel } from "@/lib/site";

export const metadata: Metadata = { title: "지점 안내" };

export default function BranchesPage() {
  return (
    <>
      <PageHero eyebrow="BRANCHES" title="지점 안내" desc="경기 광주 · 성남 · 서울 동부, 세 권역에서 근로자를 모집합니다." />

      <section className="py-16 md:py-24">
        <Container className="space-y-8">
          {branches.map((b) => (
            <article key={b.slug} id={b.slug} className="grid overflow-hidden rounded-3xl border border-navy-100 md:grid-cols-[1fr_1.3fr]">
              <Placeholder label={`${b.name} 사무실 사진`} className="min-h-56 rounded-none border-0" />
              <div className="p-7 md:p-10">
                <p className="text-sm font-semibold text-navy-700">{b.area} 권역</p>
                <h2 className="mt-1 text-3xl font-extrabold text-navy-950">{b.name}</h2>
                <dl className="mt-6 space-y-3 text-gray-700">
                  <div className="flex gap-4">
                    <dt className="w-16 shrink-0 font-semibold text-gray-400">주소</dt>
                    <dd>{b.address}</dd>
                  </div>
                  {b.landmark && (
                    <div className="flex gap-4">
                      <dt className="w-16 shrink-0 font-semibold text-gray-400">찾아오기</dt>
                      <dd className="font-semibold text-navy-800">{b.landmark}</dd>
                    </div>
                  )}
                  <div className="flex gap-4">
                    <dt className="w-16 shrink-0 font-semibold text-gray-400">운영시간</dt>
                    <dd className="text-gray-400">준비 중</dd>
                  </div>
                </dl>
                <div className="mt-8 flex flex-wrap gap-3">
                  {b.phone ? (
                    <a href={tel(b.phone)} className="inline-flex items-center gap-2 rounded-full bg-point px-6 py-3 font-bold text-navy-950">
                      <PhoneIcon /> {b.phone}
                    </a>
                  ) : (
                    <span className="rounded-full bg-gray-100 px-6 py-3 text-gray-400">전화번호 준비 중</span>
                  )}
                  <a
                    href={`https://map.naver.com/p/search/${encodeURIComponent(b.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-navy-800 px-6 py-3 font-bold text-navy-800"
                  >
                    네이버 지도
                  </a>
                  <a
                    href={`https://map.kakao.com/link/search/${encodeURIComponent(b.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-navy-800 px-6 py-3 font-bold text-navy-800"
                  >
                    카카오맵
                  </a>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
