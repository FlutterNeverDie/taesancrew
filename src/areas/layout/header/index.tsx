"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, nav, tel } from "@/lib/site";
import { Logo } from "@/components/Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname.startsWith(href.split("#")[0]);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-4 md:px-6 lg:px-10">
        <Link href="/" onClick={() => setOpen(false)} aria-label={`${company.title} 홈`}>
          <Logo />
        </Link>

        <nav aria-label="주 메뉴" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = isActive(item.href) || item.children?.some((c) => isActive(c.href));
            const linkCls = `block rounded-md px-3 py-2 text-base font-semibold whitespace-nowrap transition-colors hover:bg-navy-50 ${
              active ? "text-navy-800 underline decoration-point decoration-4 underline-offset-8" : "text-muted"
            }`;
            if (!item.children) {
              return (
                <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={linkCls}>
                  {item.label}
                </Link>
              );
            }
            // 회사소개: 마우스를 올리거나 키보드로 들어가면 하위 메뉴가 열린다
            return (
              <div key={item.href} className="group relative">
                <Link href={item.href} className={linkCls} aria-haspopup="true">
                  {item.label}
                </Link>
                <div className="invisible absolute top-full left-0 pt-2 opacity-0 transition-opacity duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="min-w-40 rounded-lg border border-rule bg-paper p-1.5">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="block rounded-md px-3 py-2.5 text-base font-semibold whitespace-nowrap text-ink hover:bg-navy-50">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
          <a href={tel(company.mainPhone)} className="press ml-3 rounded-md bg-point px-4 py-2 text-base font-bold whitespace-nowrap text-navy-950 hover:bg-point-dark">
            {company.mainPhone}
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          className="flex h-11 w-11 cursor-pointer items-center justify-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6" aria-hidden>
            <span className={`absolute left-0 block h-0.5 w-6 bg-navy-900 ${open ? "top-2 rotate-45" : "top-0"}`} />
            <span className={`absolute top-2 left-0 block h-0.5 w-6 bg-navy-900 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 block h-0.5 w-6 bg-navy-900 ${open ? "top-2 -rotate-45" : "top-4"}`} />
          </span>
        </button>
      </div>

      {open && (
        <nav aria-label="주 메뉴" className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-rule bg-paper px-4 pb-6 lg:hidden">
          {nav.map((item) => (
            <div key={item.href} className="border-b border-rule">
              <Link href={item.href} onClick={() => setOpen(false)} className="block py-4 text-lg font-semibold text-ink">
                {item.label}
              </Link>
              {item.children && (
                <ul className="-mt-1 pb-3 pl-4">
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} onClick={() => setOpen(false)} className="block py-2.5 text-base font-medium text-muted">
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
