import { Container } from "@/components/ui";
import { ConditionsTable } from "./ConditionsTable";

export function JobsConditions() {
  return (
    <section className="py-14 md:py-20">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.6fr)] lg:gap-16">
        <h2 className="text-[1.75rem] font-extrabold text-navy-950 md:text-[2.5rem]">근무 조건</h2>
        <ConditionsTable />
      </Container>
    </section>
  );
}
