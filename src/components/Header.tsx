"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, nav, tel } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" onClick={() => setOpen(false)} aria-label="태산크루 홈">
          <Logo />
        </Link>

        <nav aria-label="주 메뉴" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-[15px] font-semibold whitespace-nowrap transition-colors hover:bg-navy-50 ${
                  active ? "text-navy-800 underline decoration-point decoration-4 underline-offset-8" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a href={tel(company.mainPhone)} className="press ml-3 rounded-md bg-point px-4 py-2 text-sm font-bold whitespace-nowrap text-navy-950 hover:bg-point-dark">
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
        <nav aria-label="주 메뉴" className="border-t border-rule bg-paper px-4 pb-6 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-rule py-4 text-lg font-semibold text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="block border-b border-rule py-4 text-lg font-semibold text-ink">
            문의하기
          </Link>
        </nav>
      )}
    </header>
  );
}
