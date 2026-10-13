import { Container, Placeholder, SectionTitle } from "@/components/ui";

// 상장·인증서 사진을 받으면 여기에 { src, title, issuer, date } 로 추가
const awards: { src: string; title: string; issuer: string; date: string }[] = [];

export function AwardsAwards() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionTitle title="수상과 감사패" />
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {awards.length === 0 &&
            ["상장 1", "상장 2", "감사패 1", "감사패 2"].map((label) => (
              <div key={label}>
                <Placeholder label={`${label} 사진`} className="aspect-[3/4]" />
                <p className="mt-3 font-bold text-muted/60">수상명</p>
                <p className="text-base text-muted/60">수여 기관·날짜</p>
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
}
