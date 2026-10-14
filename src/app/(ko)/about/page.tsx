import { AboutView, aboutMeta } from "@/views/about";

// 한국어 페이지. 화면 구성은 src/views/about.tsx (다른 언어와 같이 쓴다)
export const metadata = aboutMeta("ko");

export default function Page() {
  return <AboutView lang="ko" />;
}
