import { Container } from "@/components/ui";
import { branches, company } from "@/lib/site";
import { brandName, branchText, getDict, type Locale } from "@/i18n";

// 개인정보처리방침. 사이트는 정보를 저장하지 않고, 지원·문의는 문자/전화로 지점에 직접 전달된다
// 내용은 사전의 privacy (한국어가 원문, 시행일도 거기서 바꾼다)
export function PrivacyBody({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.privacy;
  const [head, ...rest] = branches;
  return (
    <section className="py-14 md:py-20">
      <Container className="max-w-3xl">
        <h1 className="text-3xl leading-snug font-extrabold text-navy-950 md:text-4xl">{t.title}</h1>
        {lang !== "ko" && t.translationNote && <p className="mt-4 rounded-md bg-navy-50 p-4 text-base text-ink">{t.translationNote}</p>}
        <p className="mt-4 text-lg leading-relaxed text-muted">{t.intro}</p>

        <div className="prose-post mt-10 text-lg text-ink">
          {t.sections.map((s) => (
            <div key={s.h}>
              <h2>{s.h}</h2>
              {s.items.length === 1 && !s.items[0].b ? (
                <p>{s.items[0].t}</p>
              ) : (
                <ul>
                  {s.items.map((it) => (
                    <li key={it.t}>
                      {it.b && <strong>{it.b} </strong>}
                      {it.t}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <h2>{t.ownersTitle}</h2>
          <ul>
            <li>
              {t.ownerHead}: {brandName(head.brand, lang)} {branchText(d, head.slug).name} {t.owner} {head.owner} (<span dir="ltr">{company.mainPhone}</span>)
            </li>
            {rest.map((b) => (
              <li key={b.slug}>
                {brandName(b.brand, lang)} {branchText(d, b.slug).name} {t.owner} {b.owner} (<span dir="ltr">{b.phone}</span>)
              </li>
            ))}
          </ul>

          <h2>{t.effectiveTitle}</h2>
          <p>{t.effective}</p>
        </div>
      </Container>
    </section>
  );
}
