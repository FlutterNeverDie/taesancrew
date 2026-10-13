import Link from "next/link";
import { branches, company, nav } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-sm text-navy-100/80">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <Logo light />
            <p className="mt-3 text-navy-100/70">{company.tagline}</p>
            <p className="mt-4">
              대표전화 {company.mainPhone} · 사무실 {company.officePhone} · 팩스 {company.fax}
              <br />
              이메일 {company.email}
            </p>
          </div>
          <nav className="grid grid-cols-3 gap-x-8 gap-y-2">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="hover:text-white">문의하기</Link>
          </nav>
        </div>

        {/* 지점별 사업자 정보 — 비어 있는 값은 자료를 받으면 site.ts에서 채운다 */}
        <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-3">
          {branches.map((b) => (
            <div key={b.slug} className="leading-relaxed text-navy-100/60">
              <p className="mb-1 font-semibold text-white/90">
                {company.name} {b.name}
              </p>
              <p>{b.address}</p>
              <p>대표 {b.owner ?? "준비 중"} · 사업자등록번호 {b.bizNo ?? "준비 중"}</p>
              <p>유료직업소개소 등록번호 {b.agencyNo ?? "준비 중"}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-navy-100/40">© {company.name} ({company.nameEn}). All rights reserved.</p>
      </div>
    </footer>
  );
}
