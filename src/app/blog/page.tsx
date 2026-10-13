import type { Metadata } from "next";
import { BlogHero } from "@/areas/blog/hero";
import { BlogList } from "@/areas/blog/list";

// 이 페이지는 영역(area)을 순서대로 쌓기만 한다. 내용 수정은 src/areas/blog/ 의 각 영역에서
export const metadata: Metadata = { title: "소식" };

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogList />
    </>
  );
}
