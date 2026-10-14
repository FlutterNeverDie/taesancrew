import { JobsView, jobsMeta } from "@/views/jobs";

// 한국어 페이지. 화면 구성은 src/views/jobs.tsx (다른 언어와 같이 쓴다)
export const metadata = jobsMeta("ko");

export default function Page() {
  return <JobsView lang="ko" />;
}
