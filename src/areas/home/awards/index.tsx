import Link from "next/link";
import { Container, Placeholder, SectionTitle } from "@/components/ui";
import { branches } from "@/lib/site";
import { ZoomImage } from "@/components/Lightbox";
import { brandName, branchText, fmt, getDict, lp, type Locale } from "@/i18n";

// 메인의 등록증 미리보기 (예전 "수상과 인증" 자리). 수상·감사패를 받으면 다시 같이 보여준다
export function HomeAwards({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.home;
  return (
    <section className="bg-navy-50 py-20 md:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle title={t.licensesTitle} desc={t.licensesDesc} />
          <Link href={lp(lang, "/awards")} className="ms-auto mb-10 text-lg font-bold whitespace-nowrap text-navy-700 underline decoration-2 underline-offset-4 md:mb-14">
            {t.licensesLink}
          </Link>
        </div>
        <ul className="reveal-each grid grid-cols-3 gap-3 md:gap-5">
          {branches.map((b) => {
            const name = branchText(d, b.slug).name;
            return (
              <li key={b.slug} className="min-w-0">
                {/* 등록증이 있으면 그 자리에서 크게, 없으면 "준비 중" */}
                {b.licenseImage ? (
                  <ZoomImage src={b.licenseImage} alt={fmt(d.common.licenseAlt, { name: `${brandName(b.brand, lang)} ${name}` })} closeLabel={d.common.close} zoomLabel={d.common.zoom} className="lift rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={b.licenseImage} alt="" width={1200} height={1698} loading="lazy" className="aspect-[1/1.414] w-full rounded-lg border border-rule bg-paper object-cover object-top" />
                  </ZoomImage>
                ) : (
                  <Placeholder label={d.common.preparing} className="aspect-[1/1.414] bg-paper" />
                )}
                <p className="mt-3 text-base font-bold text-navy-950 md:text-lg">{name}</p>
                <p className="hidden text-base text-muted md:block">
                  {d.common.regNo} {b.agencyNo ?? d.common.preparing}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
