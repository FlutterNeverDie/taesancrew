import { VisaView, visaMeta } from "@/views/visa";

// 한국어 페이지. 화면 구성은 src/views/visa.tsx (다른 언어와 같이 쓴다)
export const metadata = visaMeta("ko");

export default function Page() {
  return <VisaView lang="ko" />;
}
