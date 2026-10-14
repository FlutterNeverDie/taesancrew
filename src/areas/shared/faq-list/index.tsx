// 질문 목록 항목: { q: 질문, a: 답, link?: 답 끝에 붙는 링크 글자, href?: 그 주소 } (사전의 businessFaq·workerFaq)
import Link from "next/link";
import { lp, type Locale } from "@/i18n";

type Faq = { q: string; a: string; link?: string; href?: string };

// 답이 높이가 늘어나며 펼쳐진다 (최신 CSS ::details-content, 미지원 브라우저는 그냥 열린다).
// 이 문법은 빌드의 CSS 처리기가 globals.css에서 통째로 버리기 때문에 여기서 <style>로 직접 넣는다
const faqMotion = `
:root { interpolate-size: allow-keywords; }
.faq-item::details-content {
  block-size: 0;
  overflow-y: clip;
  transition: block-size 260ms cubic-bezier(0.23, 1, 0.32, 1), content-visibility 260ms allow-discrete;
}
.faq-item[open]::details-content { block-size: auto; }
@media (prefers-reduced-motion: reduce) {
  .faq-item::details-content { transition: none; }
}
`;

export function FaqList({ lang, items }: { lang: Locale; items: Faq[] }) {
  return (
    <div className="border-t-2 border-navy-900">
      <style>{faqMotion}</style>
      {items.map((f) => (
        <details key={f.q} className="faq-item group border-b border-rule">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-extrabold text-navy-950 [&::-webkit-details-marker]:hidden">
            {f.q}
            <span aria-hidden className="text-2xl leading-none font-bold text-navy-900 transition-transform duration-200 group-open:rotate-45">+</span>
          </summary>
          <p className="pb-6 text-lg leading-relaxed font-medium text-navy-950">
            {f.a}
            {f.link && f.href && (
              <>
                {" "}
                <Link href={lp(lang, f.href)} className="font-bold whitespace-nowrap text-navy-800 underline decoration-2 underline-offset-4 hover:text-navy-950">
                  {f.link}
                </Link>
              </>
            )}
          </p>
        </details>
      ))}
    </div>
  );
}
