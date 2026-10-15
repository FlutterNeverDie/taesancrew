import fs from "node:fs";
import path from "node:path";
import { DownloadIcon } from "@/components/icons";
import { company } from "@/lib/site";
import { getDict, type Locale } from "@/i18n";

// 회사소개서 PDF 받기 버튼. 파일은 site.ts의 company.brochure (public/files/ 안)
// 파일이 정해지기 전(null)에는 실제 사이트에서 안 보이고, 로컬 개발 서버에서만 "준비 중" 자리로 보인다
// tone: "dark" = 남색 바탕 위(중점분야 아래 상담 줄), "light" = 흰 바탕 위(문의 페이지)
export function BrochureButton({ lang, tone = "light" }: { lang: Locale; tone?: "dark" | "light" }) {
  const t = getDict(lang).common;
  const file = company.brochure;
  const cls = `press inline-flex min-h-12 items-center justify-center gap-2 rounded-md border-2 px-6 text-base font-bold whitespace-nowrap ${
    tone === "dark" ? "border-white/50 text-white hover:bg-white/10" : "border-navy-800 text-navy-900 hover:bg-navy-50"
  }`;

  if (!file) {
    if (process.env.NODE_ENV !== "development") return null;
    return (
      <span className={`${cls} cursor-not-allowed border-dashed opacity-70`}>
        <DownloadIcon /> {t.brochurePreparing}
      </span>
    );
  }

  // 파일 크기를 버튼에 같이 적는다 (휴대폰 데이터 걱정 덜게)
  let size = "";
  try {
    size = `${(fs.statSync(path.join(process.cwd(), "public", file)).size / 1024 / 1024).toFixed(1)}MB`;
  } catch {}
  return (
    <a href={file} download="태산크루_회사소개서.pdf" className={cls}>
      <DownloadIcon /> {t.brochure}
      <span className="text-sm font-semibold opacity-80">PDF{size && ` · ${size}`}</span>
    </a>
  );
}
