import type { Metadata } from "next";
import { AboutSubnav } from "@/areas/shared/about-subnav";
import { BranchesHero } from "@/areas/branches/hero";
import { BranchesList } from "@/areas/branches/list";

// 이 페이지는 영역(area)을 순서대로 쌓기만 한다. 내용 수정은 src/areas/branches/ 의 각 영역에서
export const metadata: Metadata = { title: "지점 안내" };

export default function BranchesPage() {
  return (
    <>
      <BranchesHero />
      <AboutSubnav current="branches" />
      <BranchesList />
    </>
  );
}
