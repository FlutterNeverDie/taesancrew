// 로고 파일을 받기 전까지 쓰는 글자 로고
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <span className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-black ${light ? "bg-point text-navy-950" : "bg-navy-800 text-white"}`}>
        TS
      </span>
      <span className={`text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-navy-900"}`}>태산크루</span>
    </span>
  );
}
