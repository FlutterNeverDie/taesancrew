import { ContactView, contactMeta } from "@/views/contact";

// 한국어 페이지. 화면 구성은 src/views/contact.tsx (다른 언어와 같이 쓴다)
export const metadata = contactMeta("ko");

export default function Page() {
  return <ContactView lang="ko" />;
}
