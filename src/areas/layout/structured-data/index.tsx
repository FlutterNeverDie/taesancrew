import { branches, company } from "@/lib/site";

// 검색엔진(구글·네이버)이 읽는 회사·지점 정보 (schema.org JSON-LD). 화면에는 보이지 않는다.
// 값은 모두 site.ts에서 가져온다. 지점이 늘거나 주소가 바뀌면 site.ts만 고치면 된다
const intl = (phone: string) => `+82-${phone.replace(/^0/, "")}`;

export function StructuredData() {
  const org = {
    "@type": "Organization",
    "@id": `${company.siteUrl}/#org`,
    name: company.title,
    alternateName: [company.name, "태산 리크루트", company.nameEn],
    url: company.siteUrl,
    logo: `${company.siteUrl}/icon.png`,
    telephone: intl(company.mainPhone),
    faxNumber: intl(company.fax),
    description: "물류·제조 현장 인력 소개와 도급 전문. 경기광주 본점, 성남 수진역점, 천호점 3개 직영 지점.",
    department: branches.map((b) => ({ "@id": `${company.siteUrl}/branches#${b.slug}` })),
  };
  const shops = branches.map((b) => ({
    "@type": "EmploymentAgency",
    "@id": `${company.siteUrl}/branches#${b.slug}`,
    name: `${b.brand} ${b.name}`,
    url: `${company.siteUrl}/branches/${b.slug}`,
    telephone: b.phone ? intl(b.phone) : undefined,
    address: { "@type": "PostalAddress", streetAddress: b.address, addressLocality: b.locality, addressRegion: b.province, addressCountry: "KR" },
    // 항시 운영 = 매일 0시~24시
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    parentOrganization: { "@id": `${company.siteUrl}/#org` },
  }));
  const json = { "@context": "https://schema.org", "@graph": [org, ...shops] };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json).replace(/</g, "\\u003c") }} />;
}
