import { Container, SectionTitle } from "@/components/ui";
import { ClientWall } from "@/areas/shared/client-wall";

export function HomeClients() {
  return (
    <section className="border-t border-rule py-20 md:py-24">
      <Container>
        <SectionTitle title="물류 현장을 맡겨 주신 고객사" desc="유통·패션·식품 기업의 물류센터에 인력을 공급하고 있습니다." />
        <ClientWall />
      </Container>
    </section>
  );
}
