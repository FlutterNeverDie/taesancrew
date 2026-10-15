import type { Locale } from "@/i18n";
import { getDict } from "@/i18n";
import { pageMeta } from "@/i18n/meta";
import { JobsHero } from "@/areas/jobs/hero";
import { JobsConditions } from "@/areas/jobs/conditions";
import { JobsDay } from "@/areas/jobs/day";
import { JobsBranches } from "@/areas/jobs/branches";
import { JobsPostings } from "@/areas/jobs/postings";
import { JobsClients } from "@/areas/jobs/clients";
import { JobsFaq } from "@/areas/jobs/faq";

export const jobsMeta = (lang: Locale) => {
  const t = getDict(lang).meta;
  return pageMeta(lang, "/jobs", t.jobsTitle, t.jobsDesc, true);
};

export function JobsView({ lang }: { lang: Locale }) {
  return (
    <>
      <JobsHero lang={lang} />
      <JobsConditions lang={lang} />
      <JobsDay lang={lang} />
      <JobsBranches lang={lang} />
      <JobsPostings lang={lang} />
      <JobsClients lang={lang} />
      <JobsFaq lang={lang} />
    </>
  );
}
