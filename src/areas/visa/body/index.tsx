import { ButtonLink, Container, Lines } from "@/components/ui";
import { lp, type Locale } from "@/i18n";
import { getVisa, type VisaGroup } from "@/i18n/visa";

// 비자(체류자격)별 근무 안내. 문구는 src/i18n/visa.ts (법이 바뀌면 거기서 기준일과 함께 고친다)
const toneCls: Record<VisaGroup["tone"], { badge: string; bar: string }> = {
  ok: { badge: "bg-navy-900 text-white", bar: "border-navy-900" },
  check: { badge: "bg-point text-navy-950", bar: "border-point" },
  no: { badge: "bg-navy-100 text-navy-800", bar: "border-navy-200" },
};

export function VisaBody({ lang }: { lang: Locale }) {
  const t = getVisa(lang);
  return (
    <>
      <section className="on-dark border-b-8 border-point bg-navy-900 py-14 text-white md:py-20">
        <Container>
          <p className="text-lg font-bold text-point">{t.eyebrow}</p>
          <h1 className="mt-3 text-[2.25rem] leading-tight font-extrabold md:text-5xl xl:text-6xl">
            <Lines lines={t.title} />
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">{t.lead}</p>
          <p className="mt-4 max-w-3xl rounded-md border-s-4 border-point bg-white/10 px-4 py-3 text-lg font-semibold md:text-xl">{t.korean}</p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="space-y-12 md:space-y-16">
          <p className="text-base font-semibold text-muted md:text-lg">{t.updated}</p>
          {t.groups.map((g) => (
            <div key={g.title} className="reveal">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`rounded-md px-3 py-1.5 text-base font-bold ${toneCls[g.tone].badge}`}>{t.toneLabel[g.tone]}</span>
                <h2 className="text-[1.5rem] font-extrabold text-navy-950 md:text-[2rem]">{g.title}</h2>
              </div>
              <p className="mt-2 text-lg text-muted md:text-xl">{g.desc}</p>
              <ul className={`mt-6 divide-y divide-rule border-y-2 ${toneCls[g.tone].bar}`}>
                {g.items.map((it) => (
                  <li key={it.code} className="grid gap-2 py-5 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-8">
                    <p>
                      <span dir="ltr" className="block text-2xl font-extrabold text-navy-950">{it.code}</span>
                      <span className="text-lg font-bold text-navy-700">{it.name}</span>
                    </p>
                    <p className="text-lg leading-relaxed text-ink">{it.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-navy-50 py-16 md:py-24">
        <Container>
          <h2 className="text-[1.5rem] font-extrabold text-navy-950 md:text-[2rem]">{t.checkTitle}</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {t.checks.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="lift block h-full rounded-lg border border-rule bg-paper p-6"
                >
                  <span className="block text-xl font-extrabold text-navy-800 underline decoration-2 underline-offset-4">{c.label}</span>
                  <span className="mt-2 block text-lg leading-relaxed text-ink">{c.desc}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted md:text-lg">{t.notice}</p>
          {/* 이 페이지 내용의 근거 */}
          <h3 className="mt-10 text-lg font-extrabold text-navy-950 md:text-xl">{t.sourcesTitle}</h3>
          <ul className="mt-3 list-disc space-y-1.5 ps-5 text-base md:text-lg">
            {t.sources.map((src) => (
              <li key={src.href}>
                <a href={src.href} target="_blank" rel="noreferrer" className="font-semibold break-words text-navy-800 underline underline-offset-4 hover:text-navy-950">
                  {src.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-[1.5rem] font-extrabold text-navy-950 md:text-[2rem]">{t.applyTitle}</h2>
            <p className="mt-2 text-lg text-muted md:text-xl">{t.applyDesc}</p>
          </div>
          <ButtonLink href={lp(lang, "/jobs")} variant="point">{t.applyButton}</ButtonLink>
        </Container>
      </section>
    </>
  );
}
