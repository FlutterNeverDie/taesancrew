import type { Metadata } from "next";
import { Container, PageHero, Placeholder, SectionTitle } from "@/components/ui";
import { branches } from "@/lib/site";

export const metadata: Metadata = { title: "수상·인증" };

// 상장·인증서 사진을 받으면 여기에 { src, title, issuer, date } 로 추가
const awards: { src: string; title: string; issuer: string; date: string }[] = [];

export default function AwardsPage() {
  return (
    <>
      <PageHero title="수상과 인증" desc="태산크루가 받은 상과 공식 자격을 소개합니다." />

      <section className="py-20 md:py-28">
        <Container>
          <SectionTitle title="수상과 감사패" />
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {awards.length === 0 &&
              ["상장 1", "상장 2", "감사패 1", "감사패 2"].map((label) => (
                <div key={label}>
                  <Placeholder label={`${label} 사진`} className="aspect-[3/4]" />
                  <p className="mt-3 font-bold text-muted/60">수상명</p>
                  <p className="text-sm text-muted/60">수여 기관·날짜</p>
                </div>
              ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-20 md:py-28">
        <Container>
          <SectionTitle title="유료직업소개소 등록증" desc="지점별로 관할 관청에 정식 등록된 직업소개소입니다." />
          <div className="grid gap-5 md:grid-cols-3">
            {branches.map((b) => (
              <div key={b.slug}>
                <Placeholder label={`${b.name} 등록증`} className="aspect-[3/4] bg-paper" />
                <p className="mt-3 font-bold text-navy-950">{b.name}</p>
                <p className="text-sm text-muted">등록번호 {b.agencyNo ?? "준비 중"}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
