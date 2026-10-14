import type { Metadata } from "next";
import { FaqHero } from "@/areas/faq/hero";
import { FaqJumpNav } from "@/areas/faq/jump-nav";
import { FaqColumns } from "@/areas/faq/columns";
import { FaqCta } from "@/areas/faq/cta";

// 이 페이지는 영역(area)을 순서대로 쌓기만 한다. 내용 수정은 src/areas/faq/ 의 각 영역에서
export const metadata: Metadata = {
  title: "자주 묻는 질문",
  description: "인력 요청·도급 이용 방법과 물류센터 알바 지원 방법, 급여 지급일, 잔업 수당, 준비물 등 자주 묻는 질문.",
};

export default function FaqPage() {
  return (
    <>
      <FaqHero />
      <FaqJumpNav />
      <FaqColumns />
      <FaqCta />
    </>
  );
}
