import type { Metadata } from "next";
import { AboutSubnav } from "@/areas/shared/about-subnav";
import { BusinessHero } from "@/areas/business/hero";
import { BusinessPromises } from "@/areas/business/promises";
import { BusinessServices } from "@/areas/business/services";
import { BusinessProcess } from "@/areas/business/process";
import { BusinessManagement } from "@/areas/business/management";
import { BusinessClients } from "@/areas/business/clients";
import { BusinessCta } from "@/areas/business/cta";

// 이 페이지는 영역(area)을 순서대로 쌓기만 한다. 내용 수정은 src/areas/business/ 의 각 영역에서
export const metadata: Metadata = {
  title: "물류·제조 인력 소개 · 도급",
  description: "물류센터 포장·피킹·검수·입출고, 제조 라인 인력 소개와 작업 단위 도급. 하루 100명 이상 투입, 경력자 우선 배치, 안전교육 후 투입.",
};

export default function BusinessPage() {
  return (
    <>
      <BusinessHero />
      <AboutSubnav current="business" />
      <BusinessPromises />
      <BusinessServices />
      <BusinessProcess />
      <BusinessManagement />
      <BusinessClients />
      <BusinessCta />
    </>
  );
}
