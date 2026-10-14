import { AwardsView, awardsMeta } from "@/views/awards";

// 한국어 페이지. 화면 구성은 src/views/awards.tsx (다른 언어와 같이 쓴다)
export const metadata = awardsMeta("ko");

export default function Page() {
  return <AwardsView lang="ko" />;
}
