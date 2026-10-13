import type { Metadata } from "next";
import { JobsHero } from "@/areas/jobs/hero";
import { JobsConditions } from "@/areas/jobs/conditions";
import { JobsBranches } from "@/areas/jobs/branches";
import { JobsPostings } from "@/areas/jobs/postings";
import { JobsClients } from "@/areas/jobs/clients";
import { JobsFaq } from "@/areas/jobs/faq";

// 이 페이지는 영역(area)을 순서대로 쌓기만 한다. 내용 수정은 src/areas/jobs/ 의 각 영역에서
export const metadata: Metadata = { title: "일자리" };

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
