// 근무 조건을 공고문의 "항목 | 내용" 표로. 내용은 태산 홈페이지 변경.docx + 지점 채용 전단에 있는 사실만
const rows: { label: string; items: string[] }[] = [
  { label: "하는 일", items: ["포장·피킹·검수·분배", "상하차 없는 현장이 많아요"] },
  { label: "급여", items: ["당일·익일 지급 (지점별 확인)", "잔업 시 1.5배 수당", "1종 운전 가능 시 인센티브"] },
  { label: "식사", items: ["점심 식사 무료 제공"] },
  { label: "출퇴근", items: ["역에서 출퇴근 셔틀 운행"] },
  { label: "누구나", items: ["초보 가능, 경력 우대", "외국인 가능 (F비자)", "친구와 같이 지원 가능"] },
  { label: "기간", items: ["하루만, 주말만, 단기, 중장기 모두 가능"] },
];

export function Perks() {
  return (
    <dl className="border-t-4 border-navy-900">
      {rows.map((r) => (
        <div key={r.label} className="grid gap-2 border-b border-rule py-5 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8 md:py-6">
          <dt className="text-lg font-extrabold text-navy-700 md:text-xl">{r.label}</dt>
          <dd className="flex flex-wrap gap-x-6 gap-y-1.5 text-lg font-semibold text-ink md:text-xl">
            {r.items.map((it) => (
              <span key={it} className="whitespace-nowrap">{it}</span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
