// 로고 파일을 받기 전까지 쓰는 글자 로고
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span translate="no" className="flex items-baseline gap-2">
      <span className={`font-display text-[1.375rem] font-extrabold tracking-tight ${light ? "text-white" : "text-navy-900"}`}>태산크루</span>
      <span className={`text-xs font-bold ${light ? "text-point" : "text-navy-700"}`}>TS CREW</span>
    </span>
  );
}
