import { Container } from "@/components/ui";
import { branches, smsApplyHref, tel } from "@/lib/site";

export function JobsBranches() {
  return (
    <section className="bg-navy-50 py-16 md:py-24">
      <Container>
        <h2 className="text-[1.75rem] font-extrabold text-navy-950 md:text-[2.5rem]">편한 지점으로 연락하세요</h2>
        <ul className="mt-8 border-t-4 border-navy-900 md:mt-10">
          {branches.map((b) => (
            <li key={b.slug} className="grid gap-4 border-b border-navy-200 py-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-8">
              <div className="min-w-0">
                <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-2xl font-extrabold text-navy-950">{b.name}</span>
                </p>
                <p className="mt-1.5 text-lg text-ink">{b.address}</p>
                {b.landmark && <p className="mt-0.5 text-base font-semibold text-navy-700 md:text-lg">{b.landmark}</p>}
              </div>
              {b.phone && (
                <div className="flex flex-wrap items-center gap-2">
                  <a href={tel(b.phone)} className="press inline-flex min-h-13 items-center rounded-md bg-navy-900 px-5 text-lg font-bold whitespace-nowrap text-white tabular-nums hover:bg-navy-800">
                    전화 {b.phone}
                  </a>
                  <a href={smsApplyHref(b.phone, b.name)} className="press inline-flex min-h-13 items-center rounded-md border-2 border-navy-900 px-5 text-lg font-bold whitespace-nowrap text-navy-900 hover:bg-paper">
                    문자 지원
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
