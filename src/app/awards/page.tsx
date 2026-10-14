import type { Metadata } from "next";
import { AwardsHero } from "@/areas/awards/hero";
import { AwardsLicenses } from "@/areas/awards/licenses";

// 수상·감사패(awards/awards)는 받은 게 생기면 다시 넣는다
// 이 페이지는 영역(area)을 순서대로 쌓기만 한다. 내용 수정은 src/areas/awards/ 의 각 영역에서
export const metadata: Metadata = { title: "유료직업소개소 등록증" };

export default function AwardsPage() {
  return (
    <>
      <AwardsHero />
      <AwardsLicenses />
    </>
  );
}
