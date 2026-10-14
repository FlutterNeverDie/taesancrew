import { ButtonLink, Container, SectionTitle } from "@/components/ui";

const workerPerks = ["당일·익일 지급", "주말·하루만 가능"];

export function HomeWorkerCta() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end">
        <div>
          <SectionTitle title={<>처음이어도 괜찮아요.<br />교육받고 시작합니다.</>} desc="문자 한 통이면 지원 끝. 성함, 생년월일, 거주지, 시작 가능일을 가까운 지점으로 보내주세요." />
          <ButtonLink href="/jobs">지금 모집 중인 일자리</ButtonLink>
        </div>
        {/* 구분선은 divide-y로 (gap-px + 배경색 방식은 화면 배율에 따라 1px 선이 사라질 때가 있음) */}
        <ul className="divide-y divide-rule overflow-hidden rounded-lg border border-rule bg-paper">
          {workerPerks.map((p) => (
            <li key={p} className="px-4 py-5 text-base font-semibold text-ink md:px-5 md:text-lg">
              {p}
            </li>
          ))}
          <li className="px-4 py-5 text-base font-semibold text-ink md:px-5 md:text-lg">초보 가능, 경력 우대</li>
        </ul>
      </Container>
    </section>
  );
}
