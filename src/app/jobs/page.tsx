import type { Metadata } from "next";
import { JobsHero } from "@/areas/jobs/hero";
import { JobsConditions } from "@/areas/jobs/conditions";
import { JobsBranches } from "@/areas/jobs/branches";
import { JobsPostings } from "@/areas/jobs/postings";
import { JobsClients } from "@/areas/jobs/clients";
import { JobsFaq } from "@/areas/jobs/faq";

// 이 페이지는 영역(area)을 순서대로 쌓기만 한다. 내용 수정은 src/areas/jobs/ 의 각 영역에서
export const metadata: Metadata = {
  title: { absolute: "물류센터 알바 · 1일 알바 모집 (초보 가능, 출퇴근 셔틀) | 태산크루 인력사무소" },
  description: "경기광주·성남 수진역·천호역 인력사무소 태산크루의 물류센터 알바. 포장·피킹·검수, 당일·익일 지급, 점심 제공, 하루만·주말만 가능. 문자 한 통으로 지원.",
};

export default function JobsPage() {
  return (
    <>
      <JobsHero />
      <JobsConditions />
      <JobsBranches />
      <JobsPostings />
      <JobsClients />
      <JobsFaq />
    </>
  );
}
