import type { Metadata } from "next";
import { AboutHero } from "@/areas/about/hero";
import { AboutGreeting } from "@/areas/about/greeting";
import { StatsStrip } from "@/areas/shared/stats-strip";
import { AboutSubnav } from "@/areas/shared/about-subnav";
import { AboutFocus } from "@/areas/about/focus";
import { AboutBranches } from "@/areas/about/branches";

// 이 페이지는 영역(area)을 순서대로 쌓기만 한다. 내용 수정은 src/areas/about/ 의 각 영역에서
export const metadata: Metadata = {
  title: "회사소개 - 20년 물류 현장 인력 전문",
  description: "물류업계 20년 노하우로 경기광주·성남·천호 세 지점을 직접 운영하는 인력 소개·도급 회사 태산 리크루트 & 태산크루.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutSubnav current="about" />
      <AboutGreeting />
      <StatsStrip />
      <AboutFocus />
      <AboutBranches />
    </>
  );
}
