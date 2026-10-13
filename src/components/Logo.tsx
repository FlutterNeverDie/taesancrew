// 대표 로고: 태산 심볼(매장 간판과 같은 것) + 홈페이지 제목
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span translate="no" className="flex items-center gap-2.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={light ? "/brand/taesan/symbol-white.svg" : "/brand/taesan/symbol.svg"} alt="" width={40} height={40} className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.0625rem] font-extrabold tracking-tight whitespace-nowrap sm:text-[1.25rem] ${light ? "text-white" : "text-navy-900"}`}>
          태산 리크루트 &amp; 태산크루
        </span>
        <span className={`mt-1 text-[0.6875rem] font-bold tracking-[0.18em] ${light ? "text-brand-sky" : "text-navy-700"}`}>TS CREW</span>
      </span>
    </span>
  );
}
