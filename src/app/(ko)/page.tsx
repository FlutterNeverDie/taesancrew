import { HomeView, homeMeta } from "@/views/home";

// 한국어 페이지. 화면 구성은 src/views/home.tsx (다른 언어와 같이 쓴다)
export const metadata = homeMeta("ko");

export default function Page() {
  return <HomeView lang="ko" />;
}
