import { FaqView, faqMeta } from "@/views/faq";

// 한국어 페이지. 화면 구성은 src/views/faq.tsx (다른 언어와 같이 쓴다)
export const metadata = faqMeta("ko");

export default function Page() {
  return <FaqView lang="ko" />;
}
