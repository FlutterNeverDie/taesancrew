import type { Metadata } from "next";
import { ContactHero } from "@/areas/contact/hero";
import { ContactFormArea } from "@/areas/contact/form";

// 이 페이지는 영역(area)을 순서대로 쌓기만 한다. 내용 수정은 src/areas/contact/ 의 각 영역에서
export const metadata: Metadata = { title: "문의하기" };

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormArea />
    </>
  );
}
