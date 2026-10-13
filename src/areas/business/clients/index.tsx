import { Container, SectionTitle } from "@/components/ui";
import { ClientWall } from "@/areas/shared/client-wall";

export function BusinessClients() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionTitle title="주요 고객사" />
        <ClientWall />
      </Container>
    </section>
  );
}
