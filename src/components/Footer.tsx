import Link from "next/link";
import { branches, company, navFlat } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="on-dark bg-navy-950 text-base text-navy-100/75">
      <div className="mx-auto max-w-[90rem] px-4 py-12 md:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <Logo light />
            <p className="mt-4 leading-relaxed">
              대표전화 {company.mainPhone}
              <br />
              Tel {company.officePhone}, Fax {company.fax}
              <br />
              {company.email}
            </p>
          </div>
          <nav aria-label="하단 메뉴" className="grid grid-cols-2 gap-x-10 gap-y-1 sm:grid-cols-3">
            {navFlat.map((item) => (
              <Link key={item.href} href={item.href} className="py-1.5 whitespace-nowrap hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* 지점별 사업자 정보 - 비어 있는 값은 자료를 받으면 site.ts에서 채운다 */}
        <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
          {branches.map((b) => (
            <dl key={b.slug} className="leading-relaxed text-navy-100/80">
              <dt className="mb-1 font-semibold text-white/90">
                {company.name} {b.legalName}
              </dt>
              <dd>{b.address}</dd>
              <dd>대표 {b.owner ?? "준비 중"}</dd>
              <dd>사업자등록번호 {b.bizNo ?? "준비 중"}</dd>
              <dd>유료직업소개소 등록번호 {b.agencyNo ?? "준비 중"}</dd>
            </dl>
          ))}
        </div>
        <p className="mt-8 text-base text-navy-100/85">© {company.title}. All rights reserved.</p>
      </div>
    </footer>
  );
}
