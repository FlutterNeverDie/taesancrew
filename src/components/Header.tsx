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
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[15px] font-medium transition-colors hover:text-navy-700 ${
                pathname.startsWith(item.href) ? "text-navy-800" : "text-gray-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-navy-800 px-5 py-2 text-sm font-semibold text-white hover:bg-navy-900"
          >
            문의하기
          </Link>
        </nav>

        <button
          type="button"
          aria-label="메뉴 열기"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span className={`absolute left-0 block h-0.5 w-6 bg-navy-900 transition ${open ? "top-2 rotate-45" : "top-0"}`} />
            <span className={`absolute top-2 left-0 block h-0.5 w-6 bg-navy-900 transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 block h-0.5 w-6 bg-navy-900 transition ${open ? "top-2 -rotate-45" : "top-4"}`} />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-navy-100 bg-white px-4 pb-6 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-gray-100 py-4 text-lg font-medium text-gray-800"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <a href={tel(company.mainPhone)} className="rounded-xl bg-point py-3 text-center font-bold text-navy-950">
              전화하기
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-navy-800 py-3 text-center font-bold text-white"
            >
              문의하기
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
