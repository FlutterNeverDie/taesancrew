"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, nav, tel } from "@/lib/site";
import { Logo } from "@/components/Logo";
import { lp, splitLocale, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dict/ko";
import { LanguageMenu, type LangOption } from "./LanguageMenu";

export function HeaderClient({ lang, t, closeLabel, languages }: { lang: Locale; t: Dict["nav"]; closeLabel: string; languages: LangOption[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // 언어 코드를 뗀 주소로 비교한다 (/en/jobs → /jobs)
  const here = splitLocale(pathname).path;
  const isActive = (href: string) => here.startsWith(href.split("#")[0]);

  return (
    <header className="header-scroll sticky top-0 z-40 border-b border-rule bg-paper" style={{ viewTransitionName: "site-header" }}>
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-4 md:px-6 lg:px-10">
        <Link href={lp(lang, "/")} onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label={t.mainMenu} className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = isActive(item.href) || item.children?.some((c) => isActive(c.href));
            const linkCls = `block rounded-md px-3 py-2 text-base font-semibold whitespace-nowrap transition-colors hover:bg-navy-50 ${
              active ? "text-navy-800 underline decoration-point decoration-4 underline-offset-8" : "nav-slide text-muted"
            }`;
            if (!item.children) {
              return (
                <Link key={item.href} href={lp(lang, item.href)} aria-current={active ? "page" : undefined} className={linkCls}>
                  {t[item.key]}
                </Link>
              );
            }
            // 회사소개: 마우스를 올리거나 키보드로 들어가면 하위 메뉴가 열린다
            return (
              <div key={item.href} className="group relative">
                <Link href={lp(lang, item.href)} className={linkCls} aria-haspopup="true">
                  {t[item.key]}
                </Link>
                <div className="invisible absolute start-0 top-full -translate-y-1 pt-2 opacity-0 transition-[opacity,translate,visibility] duration-200 ease-out group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:translate-y-0">
                  <ul className="min-w-40 rounded-lg border border-rule bg-paper p-1.5">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={lp(lang, c.href)} className="block rounded-md px-3 py-2.5 text-base font-semibold whitespace-nowrap text-ink hover:bg-navy-50">
                          {t[c.key]}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
          {/* Contact 옆: 언어 고르기 */}
          <LanguageMenu lang={lang} label={t.language} close={closeLabel} languages={languages} />
          <a href={tel(company.mainPhone)} dir="ltr" className="press ms-3 rounded-md bg-point px-4 py-2 text-base font-bold whitespace-nowrap text-navy-950 hover:bg-point-dark">
            {company.mainPhone}
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? t.menuClose : t.menuOpen}
          aria-expanded={open}
          className="flex h-11 w-11 cursor-pointer items-center justify-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6" aria-hidden>
            <span className={`absolute left-0 block h-0.5 w-6 bg-navy-900 transition-[top,transform] duration-200 ${open ? "top-2 rotate-45" : "top-0"}`} />
            <span className={`absolute top-2 left-0 block h-0.5 w-6 bg-navy-900 transition-opacity duration-150 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 block h-0.5 w-6 bg-navy-900 transition-[top,transform] duration-200 ${open ? "top-2 -rotate-45" : "top-4"}`} />
          </span>
        </button>
      </div>

      {open && (
        <nav aria-label={t.mainMenu} className="menu-panel max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-rule bg-paper px-4 pb-6 lg:hidden">
          {nav.map((item) => (
            <div key={item.href} className="border-b border-rule">
              <Link href={lp(lang, item.href)} onClick={() => setOpen(false)} className="menu-link block py-4 text-lg font-semibold text-ink">
                {t[item.key]}
              </Link>
              {item.children && (
                <ul className="-mt-1 ps-4 pb-3">
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link href={lp(lang, c.href)} onClick={() => setOpen(false)} className="menu-link block py-2.5 text-base font-medium text-muted">
                        {t[c.key]}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {/* 휴대폰 메뉴 맨 아래: 언어 고르기 버튼 (누르면 아래에서 창이 올라온다) */}
          <div className="pt-5">
            <LanguageMenu lang={lang} label={t.language} close={closeLabel} languages={languages} block onPicked={() => setOpen(false)} />
          </div>
        </nav>
      )}
    </header>
  );
}
