import type { CSSProperties } from "react";
import { Container, Lines } from "@/components/ui";
import { branches, tel } from "@/lib/site";
import { fmt, getDict, type Locale } from "@/i18n";
import { SmsPickerFor } from "@/areas/shared/sms-picker";

const head = branches[0]; // 경기광주 본점: 연락이 모이는 곳

export function JobsHero({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.jobs;
  // 6줄 양식. 4번째(희망 집결지)와 6번째(희망 요일)에는 고를 수 있는 값 안내를 붙인다
  const hints: Record<number, string> = { 3: fmt(d.sms.workplaceHint, { choices: d.sms.workplaceChoices }), 5: d.sms.dayHint };
  return (
    <section className="on-dark bg-navy-900 text-white">
      <Container className="grid gap-10 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-20">
        <div className="min-w-0">
          <p className="text-lg font-bold text-point">{t.eyebrow}</p>
          <h1 className="mt-3 text-[2.5rem] leading-[1.15] font-extrabold [overflow-wrap:anywhere] md:text-[3.5rem] xl:text-[4.25rem]">
            <Lines lines={t.title} />
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/85 md:text-xl">{t.desc}</p>
        </div>

        <div className="min-w-0 rounded-lg bg-paper p-6 text-ink md:p-8">
          <p className="text-lg font-extrabold text-navy-900">{t.sendLabel}</p>
          {/* 보낼 내용 6줄이 한 줄씩 떠오른다 (globals.css의 .rise) */}
          <ol className="mt-4 divide-y divide-rule border-y border-rule">
            {d.sms.fields.map((label, i) => (
              <li key={label} style={{ "--d": `${250 + i * 70}ms` } as CSSProperties} className="rise flex flex-wrap items-baseline gap-x-4 gap-y-0.5 py-3">
                <span className="w-6 shrink-0 text-lg font-extrabold text-navy-700 tabular-nums">{i + 1}</span>
                <span className="text-xl font-bold md:text-2xl">{label}</span>
                {hints[i] && <span className="text-base font-semibold text-navy-700">{hints[i]}</span>}
              </li>
            ))}
          </ol>
          <SmsPickerFor lang={lang} />
          <p className="mt-3 text-center text-base text-muted md:text-lg">
            {t.phoneApply}{" "}
            <a href={tel(head.phone!)} dir="ltr" className="font-bold whitespace-nowrap text-navy-800 underline underline-offset-4 tabular-nums">
              {head.phone}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
