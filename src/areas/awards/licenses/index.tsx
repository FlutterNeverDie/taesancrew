import { Container, Placeholder, SectionTitle } from "@/components/ui";
import { branches } from "@/lib/site";
import { ZoomImage } from "@/components/Lightbox";
import { brandName, branchText, fmt, getDict, type Locale } from "@/i18n";

// 지점별 등록증 이미지(branches[].licenseImage)와 등록번호. 이미지가 없는 지점은 "준비 중" 자리
export function AwardsLicenses({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.awards;
  return (
    <section className="bg-navy-50 py-20 md:py-28">
      <Container>
        <SectionTitle title={t.listTitle} desc={t.listDesc} />
        <div className="reveal-each grid gap-5 md:grid-cols-3">
          {branches.map((b) => {
            const name = branchText(d, b.slug).name;
            return (
              <div key={b.slug}>
                {b.licenseImage ? (
                  <ZoomImage src={b.licenseImage} alt={fmt(d.common.licenseAlt, { name: `${brandName(b.brand, lang)} ${name}` })} closeLabel={d.common.close} zoomLabel={d.common.zoom} className="lift overflow-hidden rounded-lg border border-rule bg-paper">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={b.licenseImage} alt="" width={1200} height={1698} loading="lazy" className="aspect-[1/1.414] w-full object-cover object-top" />
                  </ZoomImage>
                ) : (
                  <Placeholder label={fmt(t.preparing, { name })} className="aspect-[1/1.414] bg-paper" />
                )}
                <p className="mt-3 text-lg font-bold text-navy-950">
                  {brandName(b.brand, lang)} {name}
                </p>
                <p className="text-base text-muted">
                  {d.common.regNo} {b.agencyNo ?? d.common.preparing}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
