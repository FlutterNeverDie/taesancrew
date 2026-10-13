import Link from "next/link";
import { Container, Placeholder, SectionTitle } from "@/components/ui";

export function HomeAwards() {
  return (
    <section className="bg-navy-50 py-20 md:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle title="수상과 인증" />
          <Link href="/awards" className="mb-10 font-bold text-navy-700 underline decoration-2 underline-offset-4 md:mb-14">
            전체 보기
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {["상장 사진", "감사패 사진", "인증서 사진", "직업소개소 등록증"].map((label) => (
            <Placeholder key={label} label={label} className="aspect-[3/4] bg-paper" />
          ))}
        </div>
      </Container>
    </section>
  );
}
