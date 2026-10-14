import { BlogView, blogMeta } from "@/views/blog";

// 한국어 페이지. 화면 구성은 src/views/blog.tsx (다른 언어와 같이 쓴다)
export const metadata = blogMeta("ko");

export default function Page() {
  return <BlogView lang="ko" />;
}
