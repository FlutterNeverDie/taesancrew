import type { Metadata } from "next";
import { PrivacyBody } from "@/areas/privacy/body";

export const metadata: Metadata = { title: "개인정보처리방침", description: "태산 리크루트 & 태산크루 개인정보처리방침" };

export default function PrivacyPage() {
  return <PrivacyBody />;
}
