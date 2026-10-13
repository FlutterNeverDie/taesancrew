import type { Metadata } from "next";
import { FaqHero } from "@/areas/faq/hero";
import { FaqJumpNav } from "@/areas/faq/jump-nav";
import { FaqColumns } from "@/areas/faq/columns";
import { FaqCta } from "@/areas/faq/cta";

// 이 페이지는 영역(area)을 순서대로 쌓기만 한다. 내용 수정은 src/areas/faq/ 의 각 영역에서
export const metadata: Metadata = { title: "자주 묻는 질문" };

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
