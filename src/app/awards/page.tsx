import type { Metadata } from "next";
import { AwardsHero } from "@/areas/awards/hero";
import { AwardsAwards } from "@/areas/awards/awards";
import { AwardsLicenses } from "@/areas/awards/licenses";

// 이 페이지는 영역(area)을 순서대로 쌓기만 한다. 내용 수정은 src/areas/awards/ 의 각 영역에서
export const metadata: Metadata = { title: "수상·인증" };

export default function AwardsPage() {
  return (
    <>
      <AwardsHero />
      <AwardsAwards />
      <AwardsLicenses />
    </>
  );
}
