import { Container } from "@/components/ui";
import { ClientWall } from "@/areas/shared/client-wall";

export function JobsClients() {
  return (
    <section className="border-t border-rule py-14 md:py-20">
      <Container>
        <h2 className="text-[1.75rem] font-extrabold text-navy-950 md:text-[2.5rem]">이런 회사의 물류 현장에서 일해요</h2>
        <div className="mt-8 md:mt-10">
          <ClientWall />
        </div>
      </Container>
    </section>
  );
}
