import Link from "next/link";
import { ButtonLink, Container, Placeholder, SectionTitle } from "@/components/ui";
import { branches, company, stats, strengths, tel } from "@/lib/site";
import { ClientWall } from "@/components/ClientWall";
import { getAllPosts } from "@/lib/posts";

const workerPerks = ["당일·익일 지급", "주말·하루만 가능"];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* 히어로 + 지점 배차판 */}
      <section className="on-dark brand-hero bg-navy-900 text-white">
        <Container className="grid gap-12 py-14 md:py-20 lg:min-h-[min(calc(100svh-4rem),46rem)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-20 xl:gap-32">
          <div className="min-w-0">
            <h1 className="text-[2.5rem] leading-[1.15] font-extrabold [overflow-wrap:anywhere] md:text-[3.75rem] xl:text-[5rem]">
              필요한 날,
              <br />
              필요한 사람을
              <br />
              보냅니다
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-navy-100/85 xl:max-w-lg xl:text-xl">
              물류·제조 현장 20년. 경기광주, 성남, 천호 세 지점에서 매일 100명 이상이 현장으로 출근합니다.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/contact?type=business" variant="point">인력 요청하기</ButtonLink>
              <ButtonLink href="/jobs" variant="ghost">일자리 찾기</ButtonLink>
            </div>
          </div>

          <DispatchBoard />
        </Container>
      </section>

      {/* 숫자 - 사용자가 강조한 사실만 */}
      <section className="border-b border-rule">
        <Container>
          <dl className="grid grid-cols-2 gap-px bg-rule md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse bg-paper px-4 py-7 max-md:odd:pl-0 md:px-8 md:py-9 md:first:pl-0">
                <dt className="text-base text-muted md:text-base">{s.label}</dt>
                <dd className="font-display text-3xl font-extrabold text-navy-800 md:text-[2.75rem]">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* 기업 고객: 약속 목록 */}
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
                <p className="mt-2 max-w-xl leading-relaxed text-muted">{s.desc}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 약속 한 줄 */}
      <section className="bg-navy-50 py-16 md:py-24">
        <Container>
          <p className="font-display max-w-4xl text-[1.75rem] leading-snug font-extrabold text-navy-900 md:text-[2.75rem]">
            근로자 문제가 생기면
            <br />
            소장이 직접 현장으로 갑니다.
          </p>
          <p className="mt-5 max-w-xl text-lg text-muted">24시간 연중무휴로 도급사의 의견을 듣고, 이슈는 24시간 안에 답합니다.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={tel(company.mainPhone)}>{`전화 ${company.mainPhone}`}</ButtonLink>
          </div>
        </Container>
      </section>

      {/* 구직자 */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end">
          <div>
            <SectionTitle title={<>처음이어도 괜찮아요.<br />교육받고 시작합니다.</>} desc="문자 한 통이면 지원 끝. 성함, 생년월일, 거주지, 시작 가능일을 가까운 지점으로 보내주세요." />
            <ButtonLink href="/jobs">지금 모집 중인 일자리</ButtonLink>
          </div>
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-rule bg-rule">
            {workerPerks.map((p) => (
              <li key={p} className="bg-paper px-4 py-5 text-base font-semibold text-ink md:px-5 md:text-lg">
                {p}
              </li>
            ))}
            <li className="bg-paper px-4 py-5 text-base font-semibold text-ink md:px-5 md:text-lg">초보 가능, 경력 우대</li>
          </ul>
        </Container>
      </section>

      {/* 고객사 */}
      <section className="border-t border-rule py-20 md:py-24">
        <Container>
          <SectionTitle title="물류 현장을 맡겨 주신 고객사" desc="유통·패션·식품 기업의 물류센터에 인력을 공급하고 있습니다." />
          <ClientWall />
        </Container>
      </section>

      {/* 수상·인증 */}
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

      {/* 소식 */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionTitle title="태산크루 소식" />
            <Link href="/blog" className="mb-10 font-bold text-navy-700 underline decoration-2 underline-offset-4 md:mb-14">
              소식 전체 보기
            </Link>
          </div>
          <ul className="border-t-2 border-navy-900">
            {posts.map((p) => (
              <li key={p.slug} className="border-b border-rule">
                <Link href={`/blog/${p.slug}`} className="group grid gap-1 py-6 md:grid-cols-[8rem_9rem_minmax(0,1fr)] md:items-baseline md:gap-6">
                  <time dateTime={p.date} className="text-base text-muted tabular-nums">{p.date}</time>
                  <span className="text-base font-bold text-navy-700">{p.category}</span>
                  <span className="text-lg font-bold text-ink group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">{p.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}

// 히어로 오른쪽: 지점 3곳을 현장 배차판처럼
function DispatchBoard() {
  return (
    <div className="min-w-0 overflow-hidden rounded-lg bg-navy-950 ring-1 ring-white/10">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 bg-point px-5 py-3.5 text-navy-950 md:px-6">
        <p className="font-display text-xl font-extrabold">지점별 집결지</p>
        <p className="text-base font-bold">전화 한 통이면 배치</p>
      </div>
      <ul>
        {branches.map((b) => (
          <li key={b.slug} className="grid gap-3 border-t border-white/15 px-5 py-5 first:border-t-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-5 md:px-6">
            <div className="min-w-0">
              <p className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                <span className="font-display text-2xl font-extrabold text-white">{b.name}</span>
                <span className="text-base font-medium text-brand-sky">{b.area} 권역</span>
              </p>
              <p className="mt-1.5 text-base leading-snug text-white/90 md:text-lg">{b.landmark ?? b.address}</p>
            </div>
            {b.phone ? (
              <a href={tel(b.phone)} className="press justify-self-start rounded-md border-2 border-point px-4 py-2.5 text-lg font-bold whitespace-nowrap text-point tabular-nums hover:bg-point hover:text-navy-950 sm:justify-self-auto">
                {b.phone}
              </a>
            ) : (
              <span className="text-base whitespace-nowrap text-white/80">번호 준비 중</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
