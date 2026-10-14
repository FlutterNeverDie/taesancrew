import { PrivacyView, privacyMeta } from "@/views/privacy";

// 한국어 페이지. 화면 구성은 src/views/privacy.tsx (다른 언어와 같이 쓴다)
export const metadata = privacyMeta("ko");

export default function Page() {
  return <PrivacyView lang="ko" />;
}
