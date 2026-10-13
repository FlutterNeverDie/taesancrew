import type { ReactNode } from "react";

// 채용 조건 (태산 홈페이지 변경.docx). 색은 노랑·하늘·파랑·남색을 번갈아 쓴다
const perks: { title: string; desc: string; icon: ReactNode }[] = [
  { title: "포장·피킹·검수·분배", desc: "어렵지 않은 물류 업무", icon: <path d="M4 8l8-4 8 4v8l-8 4-8-4V8zm0 0l8 4 8-4M12 12v8" /> },
  { title: "당일·익일 지급", desc: "지점별 지급 방식 확인", icon: <><circle cx="12" cy="12" r="8" /><path d="M9 10.5h6M9 13.5h6M12 8v8" /></> },
  { title: "점심 식사 무료 제공", desc: "현장에서 든든하게", icon: <path d="M7 3v8a2 2 0 002 2v8M5 3v6M9 3v6M17 3c-2 2-2 6 0 8v10" /> },
  { title: "출퇴근 셔틀 제공", desc: "역에서 함께 이동", icon: <><rect x="4" y="4" width="16" height="13" rx="2" /><path d="M4 11h16M8 20v-3M16 20v-3" /><circle cx="8" cy="14" r=".5" /><circle cx="16" cy="14" r=".5" /></> },
  { title: "1종 운전 가능 시 인센티브", desc: "운전하면 더 받아요", icon: <><path d="M5 16V11l2-5h10l2 5v5H5z" /><path d="M5 11h14" /><circle cx="8" cy="16" r="1.5" /><circle cx="16" cy="16" r="1.5" /></> },
  { title: "잔업 시 1.5배 수당", desc: "일한 만큼 더", icon: <><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></> },
  { title: "친구 동반 가능", desc: "아는 사람과 같이", icon: <><circle cx="9" cy="9" r="3" /><circle cx="16" cy="10" r="2.5" /><path d="M3.5 19c.5-3 3-5 5.5-5s5 2 5.5 5M14.5 14.5c2.5 0 4.5 1.5 5 4.5" /></> },
  { title: "외국인 가능 (F비자)", desc: "현장에 따라 가능", icon: <><circle cx="12" cy="12" r="8" /><path d="M4 12h16M12 4c2.5 2.5 2.5 13.5 0 16M12 4c-2.5 2.5-2.5 13.5 0 16" /></> },
  { title: "초보 가능·경력 우대", desc: "안전교육 후 시작", icon: <path d="M5 12.5l4.5 4.5L19 7.5" /> },
  { title: "주말·단기 가능", desc: "하루만, 단기, 중장기 모두", icon: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M9 3v4M15 3v4" /></> },
];

const tones = [
  { tile: "bg-point/30", icon: "bg-point text-navy-950", text: "text-navy-950", sub: "text-navy-900/70" },
  { tile: "bg-brand-sky/25", icon: "bg-brand-sky text-navy-950", text: "text-navy-950", sub: "text-navy-900/70" },
  { tile: "bg-brand-blue/12", icon: "bg-brand-blue text-white", text: "text-navy-950", sub: "text-navy-900/70" },
  { tile: "bg-navy-900", icon: "bg-point text-navy-950", text: "text-white", sub: "text-white/85" },
];

export function Perks() {
  return (
    <ul className="grid grid-cols-2 gap-3 md:gap-4 xl:grid-cols-5">
      {perks.map((p, i) => {
        const t = tones[i % tones.length];
        return (
          <li key={p.title} className={`flex flex-col gap-4 rounded-lg p-4 sm:p-5 md:gap-5 md:p-7 ${t.tile}`}>
            <span className={`flex h-14 w-14 items-center justify-center rounded-full ${t.icon}`} aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                {p.icon}
              </svg>
            </span>
            <span>
              <span className={`block text-lg leading-snug font-extrabold md:text-[1.375rem] ${t.text}`}>{p.title}</span>
              <span className={`mt-1.5 block text-base font-medium sm:text-base md:text-lg ${t.sub}`}>{p.desc}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
