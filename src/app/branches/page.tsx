import type { Metadata } from "next";
import { AboutSubnav } from "@/areas/shared/about-subnav";
import { BranchesHero } from "@/areas/branches/hero";
import { BranchesList } from "@/areas/branches/list";

// 이 페이지는 영역(area)을 순서대로 쌓기만 한다. 내용 수정은 src/areas/branches/ 의 각 영역에서
export const metadata: Metadata = {
  title: { absolute: "지점 안내 | 경기광주·성남 수진역·천호역 인력사무소 태산크루" },
  description: "태산 리크루트 경기광주 본점, 태산크루 성남 수진역점(수진역 3번 출구), 천호점(천호역 6번 출구). 항시 운영, 위치 지도와 전화번호.",
};

export default function BranchesPage() {
  return (
    <>
      <BranchesHero />
      <AboutSubnav current="branches" />
      <BranchesList />
    </>
  );
}
