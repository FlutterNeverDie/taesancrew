import type { Metadata } from "next";
import { BlogHero } from "@/areas/blog/hero";
import { BlogList } from "@/areas/blog/list";

// 이 페이지는 영역(area)을 순서대로 쌓기만 한다. 내용 수정은 src/areas/blog/ 의 각 영역에서
export const metadata: Metadata = {
  title: "소식 - 물류 알바 가이드 · 현장 소식",
  description: "물류센터 알바 준비물과 하루 흐름, 근무 조건, 인력 소개와 도급 차이 등 태산크루 소식과 가이드.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogList />
    </>
  );
}
