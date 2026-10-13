import type { MetadataRoute } from "next";
import { company } from "@/lib/site";

// 정적 사이트(output: export)라 빌드할 때 파일로 만들어 둔다
export const dynamic = "force-static";

// 모든 검색엔진에 사이트 전체를 허용하고, 사이트 지도 위치를 알려준다
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${company.siteUrl}/sitemap.xml`,
  };
}
