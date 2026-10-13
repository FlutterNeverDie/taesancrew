import { HomeHero } from "@/areas/home/hero";
import { StatsStrip } from "@/areas/shared/stats-strip";
import { HomePromises } from "@/areas/home/promises";
import { HomeStatement } from "@/areas/home/statement";
import { HomeWorkerCta } from "@/areas/home/worker-cta";
import { HomeClients } from "@/areas/home/clients";
import { HomeAwards } from "@/areas/home/awards";
import { HomeNews } from "@/areas/home/news";

// 이 페이지는 영역(area)을 순서대로 쌓기만 한다. 내용 수정은 src/areas/home/ 의 각 영역에서
export default function Home() {
  return (
    <>
      <HomeHero />
      <StatsStrip />
      <HomePromises />
      <HomeStatement />
      <HomeWorkerCta />
      <HomeClients />
      <HomeAwards />
      <HomeNews />
    </>
  );
}
