import { Container, Placeholder, SectionTitle } from "@/components/ui";

export function AboutTeam() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionTitle title="함께하는 지점장들" desc="경기광주 본점, 성남 수진역점, 천호점을 맡고 있는 사람들입니다." />
        <Placeholder label="지점장 단체 사진" className="aspect-[16/7]" />
      </Container>
    </section>
  );
}
