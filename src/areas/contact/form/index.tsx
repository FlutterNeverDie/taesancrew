import { Suspense } from "react";
import { Container } from "@/components/ui";
import { company, tel } from "@/lib/site";
import { ContactForm as Form } from "./ContactForm";

export function ContactFormArea() {
  return (
    <section className="py-16 md:py-24">
      <Container className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <Suspense>
          <Form />
        </Suspense>
        <aside className="space-y-4">
          <a href={tel(company.mainPhone)} className="press block rounded-lg bg-point p-7 hover:bg-point-dark">
            <p className="text-base font-bold text-navy-900/70">대표전화</p>
            <p className="mt-1 text-3xl font-extrabold text-navy-950">{company.mainPhone}</p>
          </a>
          <div className="rounded-lg bg-navy-50 p-7 text-ink">
            <p>사무실 {company.officePhone}</p>
            <p>팩스 {company.fax}</p>
            <p>이메일 {company.email}</p>
          </div>
        </aside>
      </Container>
    </section>
  );
}
