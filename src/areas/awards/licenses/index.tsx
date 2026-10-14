import { Container, Placeholder, SectionTitle } from "@/components/ui";
import { branches } from "@/lib/site";

// 받은 등록증 이미지 (대표 생년월일은 가린 사본). 없는 지점은 "준비 중" 자리
const images: Record<string, string> = {
  sujin: "/images/licenses/sujin.jpg",
};

export function AwardsLicenses() {
  return (
    <section className="bg-navy-50 py-20 md:py-28">
      <Container>
        <SectionTitle title="유료직업소개소 등록증" desc="지점별로 관할 관청에 정식 등록된 직업소개소입니다." />
        <div className="grid gap-5 md:grid-cols-3">
          {branches.map((b) => (
            <div key={b.slug}>
              {images[b.slug] ? (
                <a href={images[b.slug]} target="_blank" rel="noopener" className="block overflow-hidden rounded-lg border border-rule bg-paper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={images[b.slug]} alt={`${b.brand} ${b.name} 유료직업소개사업 등록증`} width={1200} height={1698} loading="lazy" className="aspect-[1/1.414] w-full object-cover object-top" />
                </a>
              ) : (
                <Placeholder label={`${b.name} 등록증`} className="aspect-[1/1.414] bg-paper" />
              )}
              <p className="mt-3 text-lg font-bold text-navy-950">{b.name}</p>
              <p className="text-base text-muted">등록번호 {b.agencyNo ?? "준비 중"}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
