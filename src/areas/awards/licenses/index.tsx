import { Container, Placeholder, SectionTitle } from "@/components/ui";
import { branches } from "@/lib/site";
import { ZoomImage } from "@/components/Lightbox";

// 지점별 등록증 이미지(branches[].licenseImage)와 등록번호. 이미지가 없는 지점은 "준비 중" 자리
export function AwardsLicenses() {
  return (
    <section className="bg-navy-50 py-20 md:py-28">
      <Container>
        <SectionTitle title="지점별 등록증" desc="등록증을 누르면 크게 볼 수 있어요. 대표 생년월일은 가렸습니다." />
        <div className="reveal-each grid gap-5 md:grid-cols-3">
          {branches.map((b) => (
            <div key={b.slug}>
              {b.licenseImage ? (
                <ZoomImage src={b.licenseImage} alt={`${b.brand} ${b.name} 유료직업소개사업 등록증`} className="lift overflow-hidden rounded-lg border border-rule bg-paper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.licenseImage} alt="" width={1200} height={1698} loading="lazy" className="aspect-[1/1.414] w-full object-cover object-top" />
                </ZoomImage>
              ) : (
                <Placeholder label={`${b.name} 등록증 준비 중`} className="aspect-[1/1.414] bg-paper" />
              )}
              <p className="mt-3 text-lg font-bold text-navy-950">
                {b.brand} {b.name}
              </p>
              <p className="text-base text-muted">등록번호 {b.agencyNo ?? "준비 중"}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
