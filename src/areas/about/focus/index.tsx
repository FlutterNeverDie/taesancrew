import Link from "next/link";
import { Container } from "@/components/ui";
import { strengths } from "@/lib/site";

// 회사소개 안의 "중점분야" 요약. 자세한 내용은 /business
export function AboutFocus() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.6fr)] lg:gap-20">
        <div>
          <h2 className="text-[1.75rem] leading-snug font-extrabold text-navy-950 md:text-[2.5rem]">
            중점분야
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">물류·제조 현장 인력 소개와 도급. 현장이 원하는 사람을 보내고 끝까지 책임집니다.</p>
          <Link href="/business" className="mt-6 inline-block text-lg font-bold text-navy-700 underline decoration-2 underline-offset-4 hover:text-navy-900">
            중점분야 자세히 보기
          </Link>
        </div>
        <ul className="grid border-t-2 border-navy-900 md:grid-cols-2 md:gap-x-12">
          {strengths.map((s) => (
            <li key={s.title} className="border-b border-rule py-6">
              <h3 className="text-xl font-bold text-navy-950 md:text-2xl">{s.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted md:text-lg">{s.desc}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
