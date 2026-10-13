import { Container, Placeholder, SectionTitle } from "@/components/ui";

export function AboutTeam() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionTitle title="함께하는 지점장들" desc="세 지점의 현장은 지점장이 직접 책임집니다." />
        <Placeholder label="지점장 단체 사진" className="aspect-[16/7]" />
      </Container>
    </section>
  );
}
