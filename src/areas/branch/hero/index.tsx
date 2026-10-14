import { Container } from "@/components/ui";
import { PhoneIcon, MessageIcon } from "@/components/icons";
import { smsApplyHref, tel, type Branch } from "@/lib/site";

// 지점 페이지 첫 화면: "○○ 인력사무소" + 지점 이름 + 전화·문자 지원
export function BranchHero({ b }: { b: Branch }) {
  return (
    <section className="on-dark border-b-8 border-point bg-navy-900 py-14 text-white md:py-20">
      <Container>
        <p className="text-lg font-bold text-point">{b.region} 인력사무소</p>
        <h1 className="mt-3 text-[2.25rem] leading-tight font-extrabold [overflow-wrap:anywhere] md:text-5xl xl:text-6xl">
          {b.brand} {b.name}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">{b.intro}</p>
        <p className="mt-3 text-lg text-white/90 md:text-xl">사는 곳과 상관없이, 오가기 편하면 누구나 지원할 수 있어요.</p>
        {b.phone && (
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={tel(b.phone)} className="press inline-flex min-h-13 items-center gap-2 rounded-md bg-point px-6 text-lg font-extrabold whitespace-nowrap text-navy-950 tabular-nums hover:bg-point-dark">
              <PhoneIcon /> {b.phone}
            </a>
            <a href={smsApplyHref(b.phone, b.name)} className="press inline-flex min-h-13 items-center gap-2 rounded-md border-2 border-white/60 px-6 text-lg font-bold whitespace-nowrap text-white hover:bg-white/10">
              <MessageIcon /> 문자로 지원하기
            </a>
          </div>
        )}
      </Container>
    </section>
  );
}
