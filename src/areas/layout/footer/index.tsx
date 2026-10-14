import Link from "next/link";
import { branches, company, navFlat } from "@/lib/site";
import { getDict, lp, type Locale } from "@/i18n";
import { Logo } from "@/components/Logo";

// 공식 사업자 정보(상호·주소·번호)는 언어와 상관없이 한국어 그대로, 항목 이름만 번역
export function Footer({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.footer;
  return (
    <footer className="on-dark bg-navy-950 text-base text-navy-100/75">
      <div className="mx-auto max-w-[90rem] px-4 py-12 md:px-6 lg:px-10 lg:pb-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <Logo light />
            <p className="mt-4 leading-relaxed">
              {t.mainPhone} <span dir="ltr">{company.mainPhone}</span>
              <br />
              Tel <span dir="ltr">{company.officePhone}</span>, Fax <span dir="ltr">{company.fax}</span>
              <br />
              {company.email}
            </p>
          </div>
          <nav aria-label={d.nav.footerMenu} className="grid grid-cols-2 gap-x-10 gap-y-1 sm:grid-cols-3">
            {navFlat.map((item) => (
              <Link key={item.href} href={lp(lang, item.href)} className="py-1.5 whitespace-nowrap hover:text-white">
                {d.nav[item.key]}
              </Link>
            ))}
          </nav>
        </div>

        {/* 지점별 사업자 정보 - 비어 있는 값은 자료를 받으면 site.ts에서 채운다 */}
        <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
          {branches.map((b) => (
            <dl key={b.slug} className="leading-relaxed text-navy-100/80">
              <dt className="mb-1 font-semibold text-white/90">
                {b.brand} {b.legalName}
              </dt>
              <dd>{b.address}</dd>
              <dd>
                {t.owner} {b.owner ?? d.common.preparing}
              </dd>
              <dd>
                {t.bizNo} {b.bizNo ?? d.common.preparing}
              </dd>
              <dd>
                {t.agencyNo} {b.agencyNo ?? d.common.preparing}
              </dd>
            </dl>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-base text-navy-100/85">
            © {company.title}. {t.rights}
          </p>
          <Link href={lp(lang, "/privacy")} className="text-base font-bold text-white hover:underline">
            {t.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
