import Link from "next/link";
import { Container } from "@/components/ui";
import { branches, tel } from "@/lib/site";

// 회사소개 안의 "지점안내" 요약. 자세한 내용(주소·지도)은 /branches
export function AboutBranches() {
  return (
    <section className="bg-navy-50 py-20 md:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[1.75rem] leading-snug font-extrabold text-navy-950 md:text-[2.5rem]">지점안내</h2>
          <Link href="/branches" className="text-lg font-bold text-navy-700 underline decoration-2 underline-offset-4 hover:text-navy-900">
            주소·지도 자세히 보기
          </Link>
        </div>
        <ul className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3">
          {branches.map((b, i) => (
            <li key={b.slug} className={`rounded-lg p-6 md:p-7 ${i === 0 ? "on-dark bg-navy-900 text-white" : "bg-paper"}`}>
              <p className={`text-base font-bold ${i === 0 ? "text-point" : "text-navy-700"}`}>
                {b.brand}
              </p>
              <p className={`mt-1 text-2xl font-extrabold ${i === 0 ? "text-white" : "text-navy-950"}`}>{b.name}</p>
              <p className={`mt-3 text-lg ${i === 0 ? "text-white/90" : "text-ink"}`}>{b.address}</p>
              {b.landmark && <p className={`mt-0.5 text-base font-semibold md:text-lg ${i === 0 ? "text-brand-sky" : "text-navy-700"}`}>{b.landmark}</p>}
              <p className={`mt-1 text-base md:text-lg ${i === 0 ? "text-white/85" : "text-muted"}`}>
                대표 {b.owner ?? "준비 중"} · {b.opened} 개업
              </p>
              {b.phone && (
                <a
                  href={tel(b.phone)}
                  className={`press mt-5 inline-flex min-h-12 items-center rounded-md px-5 text-lg font-bold tabular-nums ${
                    i === 0 ? "bg-point text-navy-950 hover:bg-point-dark" : "bg-navy-900 text-white hover:bg-navy-800"
                  }`}
                >
                  {b.phone}
                </a>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
