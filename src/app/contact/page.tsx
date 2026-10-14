import type { Metadata } from "next";
import { ContactHero } from "@/areas/contact/hero";
import { ContactFormArea } from "@/areas/contact/form";

// 이 페이지는 영역(area)을 순서대로 쌓기만 한다. 내용 수정은 src/areas/contact/ 의 각 영역에서
export const metadata: Metadata = {
  title: "기업 인력 요청 · 도급 상담",
  description: "물류센터·제조 현장 인력이 필요하면 필요한 인원과 근무지를 남겨주세요. 본점 대표가 직접 연락드립니다. 010-5801-2036.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormArea />
    </>
  );
}
