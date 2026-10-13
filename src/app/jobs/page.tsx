import type { Metadata } from "next";
import { ButtonLink, Container, PageHero, SectionTitle } from "@/components/ui";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { branches, recruitPosts, tel, workerFaq } from "@/lib/site";
import { RecruitGallery } from "./RecruitGallery";

export const metadata: Metadata = { title: "일자리" };

// 지점 채용 전단에 공통으로 적힌 조건
const perks = [
  { title: "당일·익일 지급", desc: "지점별 지급 방식 확인" },
  { title: "초보 가능·경력 우대", desc: "안전교육 후 시작" },
  { title: "주말·단기 가능", desc: "하루만, 단기, 중장기 모두" },
];


export default function JobsPage() {
  return (
    <>
      <PageHero
        title={<>쉽고 편한 일,<br />지금 바로 시작하세요</>}
        desc="문자 한 통이면 지원 끝. 성함, 생년월일, 거주지, 시작 가능일을 가까운 지점으로 보내주세요."
      />

      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle title="이런 조건으로 일해요" />
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-rule bg-rule md:grid-cols-3">
            {perks.map((p) => (
              <div key={p.title} className="flex flex-col-reverse bg-paper p-5 md:p-7">
                <dd className="mt-1 text-sm text-muted md:text-base">{p.desc}</dd>
                <dt className="text-lg font-bold text-navy-900 md:text-xl">{p.title}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-navy-50 py-16 md:py-24">
        <Container>
          <SectionTitle title="지금 모집 중" desc="사진을 누르면 크게 볼 수 있어요." />
          <RecruitGallery posts={recruitPosts} />
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle title="지점으로 바로 연락하세요" />
          <div className="grid gap-4 md:grid-cols-3">
            {branches.map((b) => (
              <div key={b.slug} className="rounded-lg border border-rule p-6">
                <p className="text-xl font-extrabold text-navy-950">{b.name}</p>
                <p className="mt-1 text-muted">{b.landmark ?? b.address}</p>
                {b.phone ? (
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <a href={tel(b.phone)} className="press rounded-md bg-point py-3.5 text-center text-lg font-bold text-navy-950">
                      전화
                    </a>
                    <a href={`sms:${b.phone.replaceAll("-", "")}`} className="press rounded-md bg-navy-800 py-3.5 text-center text-lg font-bold text-white">
                      문자
                    </a>
                    <p className="col-span-2 mt-1 text-center text-lg font-bold text-navy-800">{b.phone}</p>
                  </div>
                ) : (
                  <p className="mt-5 rounded-md bg-navy-50 py-4 text-center text-muted">전화번호 준비 중</p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-16 md:py-24">
        <Container className="max-w-3xl">
          <SectionTitle title="자주 묻는 질문" />
          <FaqList items={workerFaq.slice(0, 4)} />
          <p className="mt-6">
            <Link href="/faq#worker" className="font-bold text-navy-700 underline decoration-2 underline-offset-4">질문 더 보기</Link>
          </p>
          <div className="mt-10 text-center">
            <ButtonLink href="/contact?type=worker">온라인으로 지원 남기기</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
