/* Hallmark · macrostructure: Notice Sheet (custom, 구인 공고문) · tone: utilitarian · anchor hue: navy 260 + safety yellow 92
 * redesign of: PageHero → icon-tile grid → gallery → 3 equal cards → FAQ → centred CTA
 * pre-emit critique: P4 H5 E4 S5 R4 V4
 */
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import { FaqList } from "@/components/FaqList";
import { ClientWall } from "@/components/ClientWall";
import { branches, recruitPosts, tel, workerFaq } from "@/lib/site";
import { RecruitGallery } from "./RecruitGallery";
import { Perks } from "./Perks";

export const metadata: Metadata = { title: "일자리" };

// 문자 지원 양식. 버튼을 누르면 이 내용이 채워진 문자 창이 열린다
const smsFields = ["성함", "생년월일", "거주지", "시작 가능일"];
const smsBody = encodeURIComponent(["[일자리 지원]", ...smsFields.map((f) => `${f}: `)].join("\n"));
const smsHref = (phone: string) => `sms:${phone.replaceAll("-", "")}?&body=${smsBody}`;

const head = branches[0]; // 경기광주 본점: 연락이 모이는 곳

export default function JobsPage() {
  return (
    <>
      {/* 첫 화면: 지원 방법 그 자체 */}
      <section className="on-dark brand-hero bg-navy-900 text-white">
        <Container className="grid gap-10 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-20">
          <div className="min-w-0">
            <p className="text-lg font-bold text-point">일자리 찾는 분</p>
            <h1 className="mt-3 text-[2.5rem] leading-[1.15] font-extrabold [overflow-wrap:anywhere] md:text-[3.5rem] xl:text-[4.25rem]">
              문자 한 통으로
              <br />
              지원하세요
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/85 md:text-xl">
              네 가지만 보내주시면 가까운 지점에서 연락드립니다. 처음이어도, 하루만 일해도 괜찮아요.
            </p>
          </div>

          <div className="min-w-0 rounded-lg bg-paper p-6 text-ink md:p-8">
            <p className="text-lg font-extrabold text-navy-900">보낼 내용</p>
            <ol className="mt-4 divide-y divide-rule border-y border-rule">
              {smsFields.map((f, i) => (
                <li key={f} className="flex items-baseline gap-4 py-3.5">
                  <span className="w-6 shrink-0 text-lg font-extrabold text-navy-700 tabular-nums">{i + 1}</span>
                  <span className="text-xl font-bold md:text-2xl">{f}</span>
                </li>
              ))}
            </ol>
            <a
              href={smsHref(head.phone!)}
              className="press mt-6 flex min-h-14 items-center justify-center rounded-md bg-point px-6 text-lg font-extrabold text-navy-950 hover:bg-point-dark"
            >
              {head.name}으로 문자 보내기
            </a>
            <p className="mt-3 text-center text-base text-muted">
              전화로도 지원할 수 있어요{" "}
              <a href={tel(head.phone!)} className="font-bold text-navy-800 underline underline-offset-4 tabular-nums">
                {head.phone}
              </a>
            </p>
          </div>
        </Container>
      </section>

      {/* 근무 조건: 공고문 표 */}
      <section className="py-14 md:py-20">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.6fr)] lg:gap-16">
          <h2 className="text-[1.75rem] font-extrabold text-navy-950 md:text-[2.5rem]">근무 조건</h2>
          <Perks />
        </Container>
      </section>

      {/* 지점 연락처: 줄 단위 */}
      <section className="bg-navy-50 py-16 md:py-24">
        <Container>
          <h2 className="text-[1.75rem] font-extrabold text-navy-950 md:text-[2.5rem]">가까운 지점으로 연락하세요</h2>
          <ul className="mt-8 border-t-4 border-navy-900 md:mt-10">
            {branches.map((b) => (
              <li key={b.slug} className="grid gap-4 border-b border-navy-200 py-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-8">
                <div className="min-w-0">
                  <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-2xl font-extrabold text-navy-950">{b.name}</span>
                    <span className="text-lg font-semibold text-navy-700">{b.area} 권역</span>
                  </p>
                  <p className="mt-1.5 text-lg text-ink">{b.landmark ?? b.address}</p>
                </div>
                {b.phone && (
                  <div className="flex flex-wrap items-center gap-2">
                    <a href={tel(b.phone)} className="press inline-flex min-h-13 items-center rounded-md bg-navy-900 px-5 text-lg font-bold whitespace-nowrap text-white tabular-nums hover:bg-navy-800">
                      전화 {b.phone}
                    </a>
                    <a href={smsHref(b.phone)} className="press inline-flex min-h-13 items-center rounded-md border-2 border-navy-900 px-5 text-lg font-bold whitespace-nowrap text-navy-900 hover:bg-paper">
                      문자 지원
                    </a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 모집 공고 */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-[1.75rem] font-extrabold text-navy-950 md:text-[2.5rem]">지금 모집 중인 공고</h2>
            <p className="text-lg text-muted">사진을 누르면 크게 보여요</p>
          </div>
          <div className="mt-8 md:mt-10">
            <RecruitGallery posts={recruitPosts} />
          </div>
        </Container>
      </section>

      {/* 일하는 현장 */}
      <section className="border-t border-rule py-14 md:py-20">
        <Container>
          <h2 className="text-[1.75rem] font-extrabold text-navy-950 md:text-[2.5rem]">이런 회사의 물류 현장에서 일해요</h2>
          <div className="mt-8 md:mt-10">
            <ClientWall />
          </div>
        </Container>
      </section>

      {/* 자주 묻는 질문 */}
      <section className="bg-navy-50 py-16 md:py-20">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.6fr)] lg:gap-16">
          <div>
            <h2 className="text-[1.75rem] font-extrabold text-navy-950 md:text-[2.5rem]">자주 묻는 질문</h2>
            <p className="mt-4 text-lg text-ink">
              더 궁금하면{" "}
              <Link href="/faq#worker" className="font-bold text-navy-800 underline decoration-2 underline-offset-4">
                전체 질문
              </Link>
              을 보거나{" "}
              <Link href="/contact?type=worker" className="font-bold text-navy-800 underline decoration-2 underline-offset-4">
                온라인으로 지원
              </Link>
              하세요.
            </p>
          </div>
          <FaqList items={workerFaq.slice(0, 4)} />
        </Container>
      </section>
    </>
  );
}
