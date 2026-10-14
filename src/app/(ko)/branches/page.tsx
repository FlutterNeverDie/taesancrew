import { BranchesView, branchesMeta } from "@/views/branches";

// 한국어 페이지. 화면 구성은 src/views/branches.tsx (다른 언어와 같이 쓴다)
export const metadata = branchesMeta("ko");

export default function Page() {
  return <BranchesView lang="ko" />;
}
