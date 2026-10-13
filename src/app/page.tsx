import Link from "next/link";
import { ButtonLink, Container, Placeholder, SectionTitle } from "@/components/ui";
import { PhoneIcon } from "@/components/MobileCallBar";
import { branches, clients, company, stats, strengths, tel } from "@/lib/site";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* 히어로: 기업 / 구직자 두 갈래 */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-navy-700/40 blur-3xl" />
        <Container className="relative py-20 md:py-32">
          <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-point">
            물류·제조 인력 아웃소싱 전문기업
          </p>
          <h1 className="text-4xl leading-[1.2] font-extrabold md:text-6xl">
            인력이 곧
            <br />
            <span className="text-point">기업의 경쟁력</span>입니다
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100/85">
            20년 물류 현장 노하우와 3개 직영 지점으로
            <br className="hidden md:block" /> 필요한 순간, 검증된 인력을 보내드립니다.
          </p>

          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
            <Link href="/business" className="group rounded-2xl bg-white p-6 text-navy-950 transition hover:-translate-y-1">
              <p className="text-sm font-semibold text-navy-700">화주사 · 도급사</p>
              <p className="mt-1 text-xl font-extrabold">인력이 필요해요 →</p>
            </Link>
            <Link href="/jobs" className="group rounded-2xl bg-point p-6 text-navy-950 transition hover:-translate-y-1">
              <p className="text-sm font-semibold text-navy-900/70">일자리를 찾는 분</p>
              <p className="mt-1 text-xl font-extrabold">일하고 싶어요 →</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* 숫자 */}
      <section className="border-b border-navy-100 bg-white">
        <Container className="grid grid-cols-2 gap-y-8 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-navy-800 md:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-gray-600 md:text-base">{s.label}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* 5대 강점 */}
      <section className="bg-navy-50 py-20 md:py-28">
        <Container>
          <SectionTitle eyebrow="WHY TS CREW" title={<>도급사가 태산크루를<br className="md:hidden" /> 선택하는 이유</>} />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {strengths.map((s, i) => (
              <div
                key={s.no}
                className={`rounded-2xl p-7 ${i === 3 ? "bg-navy-800 text-white lg:row-span-1" : "bg-white"}`}
              >
                <p className={`text-sm font-extrabold ${i === 3 ? "text-point" : "text-navy-700"}`}>{s.no}</p>
                <h3 className="mt-3 text-xl font-extrabold">{s.title}</h3>
                <p className={`mt-3 leading-relaxed ${i === 3 ? "text-navy-100/85" : "text-gray-600"}`}>{s.desc}</p>
              </div>
            ))}
            <Link
              href="/business"
              className="flex flex-col justify-between rounded-2xl border-2 border-navy-800 p-7 transition hover:bg-white"
            >
              <p className="text-xl font-extrabold text-navy-900">인력 운영 방식<br />자세히 보기</p>
              <p className="mt-6 text-2xl text-navy-800">→</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* 수상·인증 */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="flex items-end justify-between">
            <SectionTitle eyebrow="AWARDS & CERTIFICATES" title="수상 · 인증" />
            <Link href="/awards" className="mb-12 text-sm font-semibold text-navy-700 hover:underline">전체 보기 →</Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {["상장 사진", "감사패 사진", "인증서 사진", "직업소개소 등록증"].map((label) => (
              <Placeholder key={label} label={label} className="aspect-[3/4]" />
            ))}
          </div>
        </Container>
      </section>

      {/* 고객사 */}
      <section className="bg-navy-950 py-20 text-white md:py-28">
        <Container>
          <SectionTitle light eyebrow="CLIENTS" title="함께하는 고객사" desc="국내 주요 유통·패션·식품 기업의 물류 현장에 인력을 공급하고 있습니다." />
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
            {clients.map((c) => (
              <div key={c} className="flex h-16 items-center justify-center rounded-lg bg-white/5 px-2 text-center text-sm font-semibold text-white/85">
                {c}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 블로그 */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="flex items-end justify-between">
            <SectionTitle eyebrow="NEWS" title="태산크루 소식" />
            <Link href="/blog" className="mb-12 text-sm font-semibold text-navy-700 hover:underline">전체 보기 →</Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-2xl border border-navy-100 p-6 transition hover:border-navy-700">
                <p className="text-xs font-bold text-navy-700">{p.category}</p>
                <h3 className="mt-2 text-lg leading-snug font-bold group-hover:text-navy-700">{p.title}</h3>
                <p className="mt-3 line-clamp-2 text-sm text-gray-600">{p.summary}</p>
                <p className="mt-4 text-xs text-gray-400">{p.date}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 지점 */}
      <section className="bg-navy-50 py-20 md:py-28">
        <Container>
          <SectionTitle eyebrow="BRANCHES" title="가까운 지점으로 오세요" desc="경기 광주 · 성남 · 서울 동부 세 권역에서 근로자를 모집합니다." />
          <div className="grid gap-5 md:grid-cols-3">
            {branches.map((b) => (
              <div key={b.slug} className="rounded-2xl bg-white p-7">
                <p className="text-sm font-semibold text-navy-700">{b.area} 권역</p>
                <h3 className="mt-1 text-2xl font-extrabold text-navy-950">{b.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{b.address}</p>
                {b.landmark && <p className="mt-1 text-sm font-semibold text-navy-800">{b.landmark}</p>}
                {b.phone ? (
                  <a href={tel(b.phone)} className="mt-5 flex items-center gap-2 text-lg font-bold text-navy-800">
                    <PhoneIcon /> {b.phone}
                  </a>
                ) : (
                  <p className="mt-5 text-sm text-gray-400">전화번호 준비 중</p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-navy-800 py-16 text-white">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-2xl font-extrabold md:text-3xl">24시간 연중무휴, 지금 바로 상담하세요</p>
            <p className="mt-2 text-navy-100/80">이슈 발생 시 24시간 이내 피드백을 약속합니다.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={tel(company.mainPhone)} variant="point">{company.mainPhone}</ButtonLink>
            <ButtonLink href="/contact" variant="ghost">문의 남기기</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
