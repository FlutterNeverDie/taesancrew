import { DownloadIcon } from "@/components/icons";
import { company } from "@/lib/site";
import { getDict, type Locale } from "@/i18n";

// 회사소개서 PDF 받기. 파일은 site.ts의 company.brochure (public/files/ 안)
// 파일이 정해지기 전(null)에는 실제 사이트에서 안 보이고, 로컬 개발 서버에서만 "준비 중" 자리로 보인다
// tone: "dark" = 남색 바탕 위 테두리 버튼(중점분야 아래 상담 줄), "light" = 흰 바탕 위 버튼, "solid" = 남색 바탕 위 꽉 찬 흰 버튼(문의 페이지 첫 화면)
const DOWNLOAD_NAME = "태산크루_회사소개서.pdf";

export function BrochureButton({ lang, tone = "light" }: { lang: Locale; tone?: "dark" | "light" | "solid" }) {
  const t = getDict(lang).common;
  const file = company.brochure;
  if (!file && process.env.NODE_ENV !== "development") return null;

  const cls =
    tone === "solid"
      ? "press flex min-h-14 w-full items-center justify-center gap-2.5 rounded-lg border-2 border-white bg-white px-6 text-lg font-bold whitespace-nowrap text-navy-950 hover:bg-navy-50"
      : `press inline-flex min-h-12 items-center justify-center gap-2 rounded-md border-2 px-6 text-base font-bold whitespace-nowrap ${
          tone === "dark" ? "border-white/50 text-white hover:bg-white/10" : "border-navy-800 text-navy-900 hover:bg-navy-50"
        }`;
  if (!file) {
    return (
      <span className={`${cls} cursor-not-allowed border-dashed opacity-70`}>
        <DownloadIcon /> {t.brochurePreparing}
      </span>
    );
  }
  return (
    <a href={file} download={DOWNLOAD_NAME} className={cls}>
      <DownloadIcon /> {t.brochure}
      <span className="text-sm font-semibold opacity-70">PDF</span>
    </a>
  );
}
