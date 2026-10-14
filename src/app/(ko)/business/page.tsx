import { BusinessView, businessMeta } from "@/views/business";

// 한국어 페이지. 화면 구성은 src/views/business.tsx (다른 언어와 같이 쓴다)
export const metadata = businessMeta("ko");

export default function Page() {
  return <BusinessView lang="ko" />;
}
