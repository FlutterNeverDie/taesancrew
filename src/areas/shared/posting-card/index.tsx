import { ZoomImage } from "@/components/Lightbox";
import { branches, company, recruitPostedAt, type RecruitPost } from "@/lib/site";
import { branchText, fmt, getDict, postText, type Locale } from "@/i18n";

// 채용 공고 한 장: 전단 이미지(누르면 크게) + 같은 내용을 글자로. 검색엔진은 이미지 속 글자를 못 읽어서 글자로도 쓴다
export function PostingCard({ p, lang }: { p: RecruitPost; lang: Locale }) {
  const d = getDict(lang);
  const t = postText(d, p.slug);
  const branch = branchText(d, p.branchSlug).name;
  const rows: [string, string][] = [
    [d.posting.tasks, t.tasks],
    [d.posting.hours, t.days ? `${t.days} · ${t.hours}` : t.hours],
    [d.posting.pay, t.pay],
    [d.posting.meet, t.meet],
  ];
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-rule bg-paper">
      <ZoomImage src={p.src} alt={fmt(d.posting.imageAlt, { branch, title: t.title })} closeLabel={d.common.close} zoomLabel={d.common.zoom} className="press">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.src} alt="" loading="lazy" width={800} height={1200} className="aspect-[2/3] w-full bg-navy-100 object-contain" />
      </ZoomImage>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-base font-bold text-navy-700">{branch}</p>
        <h3 className="mt-1 text-xl font-extrabold text-navy-950">{t.title}</h3>
        <dl className="mt-4 space-y-2 text-base">
          {rows.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[minmax(4.5rem,auto)_minmax(0,1fr)] gap-2">
              <dt className="font-semibold text-muted">{k}</dt>
              <dd className="text-ink">{v}</dd>
            </div>
          ))}
        </dl>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {t.perks.map((x) => (
            <li key={x} className="rounded-md bg-navy-50 px-2.5 py-1 text-base font-semibold text-navy-800">
              {x}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

// 구글 채용 정보(Google for Jobs)용 공고 데이터. 화면에는 안 보인다. 한국어 페이지에만 넣는다(같은 공고가 언어마다 겹치지 않게).
// 근무지(jobLocation)는 근로자가 모이는 지점(집결지) 주소. 금액은 넣지 않는다
export function PostingsJsonLd({ posts }: { posts: RecruitPost[] }) {
  const d = getDict("ko");
  const json = posts.map((p) => {
    const b = branches.find((x) => x.slug === p.branchSlug)!;
    const t = postText(d, p.slug);
    const desc = [
      `<p>${p.site} ${t.title}. ${b.brand} ${b.name}에서 소개합니다.</p>`,
      `<ul><li>하는 일: ${t.tasks}</li><li>근무 시간: ${t.days ? `${t.days} ` : ""}${t.hours}</li><li>지급: ${t.pay}</li><li>집결지: ${t.meet}</li>`,
      ...t.perks.map((x) => `<li>${x}</li>`),
      `</ul><p>지원: ${b.phone}로 성함, 생년월일, 거주지, 희망 집결지, 시작 가능일, 희망 요일을 문자로 보내주세요.</p>`,
    ].join("");
    return {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: t.title,
      description: desc,
      identifier: { "@type": "PropertyValue", name: company.title, value: p.slug },
      datePosted: recruitPostedAt,
      employmentType: ["TEMPORARY", "PART_TIME"],
      hiringOrganization: { "@type": "Organization", name: `${b.brand} ${b.name}`, sameAs: company.siteUrl, logo: `${company.siteUrl}/icon.png` },
      jobLocation: {
        "@type": "Place",
        address: { "@type": "PostalAddress", streetAddress: b.address, addressLocality: b.locality, addressRegion: b.province, addressCountry: "KR" },
      },
      directApply: false,
    };
  });
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json).replace(/</g, "\\u003c") }} />;
}
