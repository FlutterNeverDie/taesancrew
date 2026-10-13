import type { Metadata } from "next";
import { Suspense } from "react";
import { Container, PageHero } from "@/components/ui";
import { company, tel } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = { title: "문의하기" };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="CONTACT" title="문의하기" desc="24시간 연중무휴로 의견을 듣습니다. 남겨주시면 빠르게 연락드립니다." />
      <section className="py-16 md:py-24">
        <Container className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <Suspense>
            <ContactForm />
          </Suspense>
          <aside className="space-y-4">
            <a href={tel(company.mainPhone)} className="block rounded-2xl bg-point p-7">
              <p className="text-sm font-bold text-navy-900/70">대표전화</p>
              <p className="mt-1 text-3xl font-extrabold text-navy-950">{company.mainPhone}</p>
            </a>
            <div className="rounded-2xl bg-navy-50 p-7 text-gray-700">
              <p>사무실 {company.officePhone}</p>
              <p>팩스 {company.fax}</p>
              <p>이메일 {company.email}</p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
