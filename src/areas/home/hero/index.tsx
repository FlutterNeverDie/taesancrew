import type { CSSProperties } from "react";
import { ButtonLink, Container } from "@/components/ui";
import { branches, tel } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="on-dark bg-navy-900 text-white">
      <Container className="grid gap-12 py-14 md:py-20 lg:min-h-[min(calc(100svh-4rem),46rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16 xl:gap-24">
        <div className="min-w-0">
          <h1 className="text-[2.5rem] leading-[1.15] font-extrabold [overflow-wrap:anywhere] md:text-[3.75rem] xl:text-[5rem]">
            {/* 첫 화면은 한 줄씩 떠오른다 (globals.css의 .rise, 지연은 --d) */}
            <span className="rise block" style={{ "--d": "0ms" } as CSSProperties}>믿을 수 있는</span>
            <span className="rise block" style={{ "--d": "90ms" } as CSSProperties}>일자리 파트너,</span>
            <span className="rise block" style={{ "--d": "180ms" } as CSSProperties}>태산크루</span>
          </h1>
          <p style={{ "--d": "300ms" } as CSSProperties} className="rise mt-6 max-w-md text-lg leading-relaxed text-white/90 md:text-xl xl:max-w-lg">
            물류·제조 현장 20년. 경기광주, 성남, 천호 세 지점에서 매일 100명 이상이 현장으로 출근합니다.
          </p>
          <div style={{ "--d": "380ms" } as CSSProperties} className="rise mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/contact?type=business" variant="point">인력 요청하기</ButtonLink>
            <ButtonLink href="/jobs" variant="ghost">일자리 찾기</ButtonLink>
          </div>
        </div>

        <DispatchBoard />
      </Container>
    </section>
  );
}

// 히어로 오른쪽: 지점 3곳을 현장 배차판처럼
function DispatchBoard() {
  return (
    <div style={{ "--d": "250ms" } as CSSProperties} className="rise min-w-0 overflow-hidden rounded-lg bg-navy-950 ring-1 ring-white/10">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 bg-point px-5 py-3.5 text-navy-950 md:px-6">
        <p className="font-display text-xl font-extrabold xl:text-2xl">지점 안내</p>
        <p className="text-base font-bold">전화 한 통이면 배치</p>
      </div>
      <ul>
        {branches.map((b, i) => (
          <li key={b.slug} style={{ "--d": `${400 + i * 90}ms` } as CSSProperties} className="rise grid gap-3 border-t border-white/15 px-5 py-5 first:border-t-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-5 md:px-6 xl:px-7 xl:py-6">
            <div className="min-w-0">
              <p className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                <span className="font-display text-2xl font-extrabold text-white xl:text-[1.75rem]">{b.name}</span>
              </p>
              <p className="mt-1.5 text-base leading-snug text-white/90 md:text-lg">{b.address}</p>
              {b.landmark && <p className="mt-0.5 text-base font-semibold text-brand-sky">{b.landmark}</p>}
            </div>
            {b.phone ? (
              <a href={tel(b.phone)} className="press justify-self-start rounded-md border-2 border-point px-4 py-2.5 text-lg font-bold whitespace-nowrap text-point xl:px-5 xl:py-3 xl:text-xl tabular-nums hover:bg-point hover:text-navy-950 sm:justify-self-auto">
                {b.phone}
              </a>
            ) : (
              <span className="text-base whitespace-nowrap text-white/80">번호 준비 중</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
