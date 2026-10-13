import Link from "next/link";
import { Container, SectionTitle } from "@/components/ui";
import { strengths } from "@/lib/site";

export function HomePromises() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.6fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionTitle
            title={<>도급사가 태산크루를<br />다시 찾는 이유</>}
            desc="현장이 원하는 사람을 정확히 보내고, 보낸 뒤에도 끝까지 책임집니다."
          />
          <Link href="/business" className="font-bold text-navy-700 underline decoration-2 underline-offset-4 hover:text-navy-900">
            인력 운영 방식 자세히 보기
          </Link>
        </div>
        <ul className="grid border-t-2 border-navy-900 xl:grid-cols-2 xl:gap-x-12">
          {strengths.map((s) => (
            <li key={s.title} className="border-b border-rule py-7">
              <h3 className="text-xl font-bold text-navy-950 md:text-2xl">{s.title}</h3>
              <p className="mt-2 max-w-xl text-lg leading-relaxed text-muted">{s.desc}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
