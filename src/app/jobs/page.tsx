import type { Metadata } from "next";
import { ButtonLink, Container, PageHero, SectionTitle } from "@/components/ui";
import { branches, recruitPosts, tel } from "@/lib/site";
import { RecruitGallery } from "./RecruitGallery";

export const metadata: Metadata = { title: "일자리" };

// 지점 채용 전단에 공통으로 적힌 조건
const perks = [
  { title: "일급 10만 ~ 11.5만원", desc: "현장·직무별로 다름" },
  { title: "당일 · 익일 지급", desc: "지점별 지급 방식 확인" },
  { title: "출퇴근 셔틀", desc: "수진역 · 천호역에서 함께 이동" },
  { title: "점심 식사 제공", desc: "대부분의 현장" },
  { title: "초보 가능 · 경력 우대", desc: "안전교육 후 시작" },
  { title: "주말 · 단기 가능", desc: "하루만, 단기, 중장기 모두" },
];

const faq = [
  { q: "처음인데 할 수 있나요?", a: "네. 포장·피킹·검수처럼 어렵지 않은 업무가 많고, 시작 전에 안전교육을 받습니다." },
  { q: "외국인도 가능한가요?", a: "현장에 따라 가능합니다(F비자 등). 지점으로 문의해 주세요." },
  { q: "상하차 업무인가요?", a: "상하차 없는 현장이 많습니다. 공고마다 업무가 적혀 있습니다." },
  { q: "잔업하면 수당이 있나요?", a: "잔업 시 1.5배 수당을 지급하는 현장이 있습니다." },
];

export default function JobsPage() {
  return (
    <>
      <PageHero
        eyebrow="JOBS"
        title={<>쉽고 편한 일,<br />지금 바로 시작하세요</>}
        desc="문자 한 통이면 지원 끝. 성함 · 생년월일 · 거주지 · 시작 가능일을 가까운 지점으로 보내주세요."
      />

      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle eyebrow="BENEFITS" title="이런 조건으로 일해요" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {perks.map((p) => (
              <div key={p.title} className="rounded-2xl bg-navy-50 p-5 md:p-7">
                <p className="text-lg font-extrabold text-navy-900 md:text-xl">{p.title}</p>
                <p className="mt-1 text-sm text-gray-600 md:text-base">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-16 md:py-24">
        <Container>
          <SectionTitle eyebrow="NOW HIRING" title="지금 모집 중" desc="사진을 누르면 크게 볼 수 있어요." />
          <RecruitGallery posts={recruitPosts} />
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle eyebrow="APPLY" title="지점으로 바로 연락하세요" />
          <div className="grid gap-4 md:grid-cols-3">
            {branches.map((b) => (
              <div key={b.slug} className="rounded-2xl border-2 border-navy-100 p-6">
                <p className="text-xl font-extrabold text-navy-950">{b.name}</p>
                <p className="mt-1 text-gray-600">{b.landmark ?? b.address}</p>
                {b.phone ? (
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <a href={tel(b.phone)} className="rounded-xl bg-point py-3.5 text-center text-lg font-bold text-navy-950">
                      전화
                    </a>
                    <a href={`sms:${b.phone.replaceAll("-", "")}`} className="rounded-xl bg-navy-800 py-3.5 text-center text-lg font-bold text-white">
                      문자
                    </a>
                    <p className="col-span-2 mt-1 text-center text-lg font-bold text-navy-800">{b.phone}</p>
                  </div>
                ) : (
                  <p className="mt-5 rounded-xl bg-gray-50 py-4 text-center text-gray-400">전화번호 준비 중</p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-16 md:py-24">
        <Container className="max-w-3xl">
          <SectionTitle eyebrow="FAQ" title="자주 묻는 질문" />
          <div className="space-y-3">
            {faq.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white p-6">
                <summary className="cursor-pointer list-none text-lg font-bold text-navy-950">
                  Q. {f.q}
                </summary>
                <p className="mt-3 text-lg leading-relaxed text-gray-700">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/contact?type=worker">온라인으로 지원 남기기</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
