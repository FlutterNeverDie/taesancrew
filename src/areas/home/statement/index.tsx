import { ButtonLink, Container } from "@/components/ui";
import { company, tel } from "@/lib/site";

export function HomeStatement() {
  return (
    <section className="bg-navy-50 py-16 md:py-24">
      <Container>
        <p className="font-display max-w-4xl text-[1.75rem] leading-snug font-extrabold text-navy-900 md:text-[2.75rem]">
          근로자 문제가 생기면
          <br />
          소장이 직접 현장으로 갑니다.
        </p>
        <p className="mt-5 max-w-xl text-lg text-muted md:text-xl">24시간 연중무휴로 도급사의 의견을 듣고, 이슈는 24시간 안에 답합니다.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={tel(company.mainPhone)}>{`전화 ${company.mainPhone}`}</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
