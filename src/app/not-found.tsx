import type { Metadata } from "next";
import { ButtonLink, Container } from "@/components/ui";
import { company, tel } from "@/lib/site";

// 없는 주소로 들어왔을 때 (정적 빌드에서 404.html로 나가고, Cloudflare Pages가 알아서 보여준다)
export const metadata: Metadata = { title: "페이지를 찾을 수 없어요" };

export default function NotFound() {
  return (
    <section className="py-24 md:py-36">
      <Container className="max-w-3xl">
        <p className="font-display text-6xl font-extrabold text-navy-200 md:text-8xl">404</p>
        <h1 className="mt-4 text-[2rem] leading-tight font-extrabold text-navy-950 md:text-5xl">페이지를 찾을 수 없어요</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted md:text-xl">
          주소가 바뀌었거나 없어진 페이지예요. 아래에서 찾으시는 곳으로 가거나, 대표번호로 전화 주세요.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="/">메인으로</ButtonLink>
          <ButtonLink href="/jobs" variant="point">일자리 보기</ButtonLink>
          <ButtonLink href="/branches" variant="primary">지점 안내</ButtonLink>
        </div>
        <p className="mt-8 text-lg text-ink">
          대표번호{" "}
          <a href={tel(company.mainPhone)} className="font-bold whitespace-nowrap text-navy-800 underline underline-offset-4 tabular-nums">
            {company.mainPhone}
          </a>
        </p>
      </Container>
    </section>
  );
}
