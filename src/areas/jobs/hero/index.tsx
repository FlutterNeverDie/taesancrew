import { Container } from "@/components/ui";
import { branches, smsApplyHref, smsFields, tel } from "@/lib/site";

const head = branches[0]; // 경기광주 본점: 연락이 모이는 곳

export function JobsHero() {
  return (
    <section className="on-dark bg-navy-900 text-white">
      <Container className="grid gap-10 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-20">
        <div className="min-w-0">
          <p className="text-lg font-bold text-point">일자리 찾는 분</p>
          <h1 className="mt-3 text-[2.5rem] leading-[1.15] font-extrabold [overflow-wrap:anywhere] md:text-[3.5rem] xl:text-[4.25rem]">
            문자 한 통으로
            <br />
            지원하세요
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/85 md:text-xl">
            아래 내용을 보내주시면 희망 근무지의 지점 대표가 직접 연락드립니다. 처음이어도, 하루만 일해도 괜찮아요.
          </p>
        </div>

        <div className="min-w-0 rounded-lg bg-paper p-6 text-ink md:p-8">
          <p className="text-lg font-extrabold text-navy-900">보낼 내용</p>
          <ol className="mt-4 divide-y divide-rule border-y border-rule">
            {smsFields.map((f, i) => (
              <li key={f.label} className="flex flex-wrap items-baseline gap-x-4 gap-y-0.5 py-3">
                <span className="w-6 shrink-0 text-lg font-extrabold text-navy-700 tabular-nums">{i + 1}</span>
                <span className="text-xl font-bold md:text-2xl">{f.label}</span>
                {f.hint && <span className="text-base font-semibold text-navy-700">{f.hint}</span>}
              </li>
            ))}
          </ol>
          <a
            href={smsApplyHref(head.phone!)}
            className="press mt-6 flex min-h-14 items-center justify-center rounded-md bg-point px-6 text-lg font-extrabold text-navy-950 hover:bg-point-dark"
          >
            {head.name}으로 문자 보내기
          </a>
          <p className="mt-3 text-center text-base text-muted md:text-lg">
            전화로도 지원할 수 있어요{" "}
            <a href={tel(head.phone!)} className="font-bold text-navy-800 underline underline-offset-4 tabular-nums">
              {head.phone}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
