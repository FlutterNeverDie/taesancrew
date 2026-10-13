import { Container, Placeholder, SectionTitle } from "@/components/ui";
import { branches } from "@/lib/site";

export function AwardsLicenses() {
  return (
    <section className="bg-navy-50 py-20 md:py-28">
      <Container>
        <SectionTitle title="유료직업소개소 등록증" desc="지점별로 관할 관청에 정식 등록된 직업소개소입니다." />
        <div className="grid gap-5 md:grid-cols-3">
          {branches.map((b) => (
            <div key={b.slug}>
              <Placeholder label={`${b.name} 등록증`} className="aspect-[3/4] bg-paper" />
              <p className="mt-3 font-bold text-navy-950">{b.name}</p>
              <p className="text-base text-muted">등록번호 {b.agencyNo ?? "준비 중"}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
