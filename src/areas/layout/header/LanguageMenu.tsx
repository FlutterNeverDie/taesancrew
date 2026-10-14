"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon, GlobeIcon } from "@/components/icons";
import { lp, splitLocale, type Locale } from "@/i18n/config";

// code: 언어 코드, name: 그 나라 말 이름(한국어, English, 中文 …), html: lang 속성값
export type LangOption = { code: Locale; name: string; html: string };

// 지금 보고 있는 페이지의 같은 자리로 언어만 바꿔 간다 (/jobs → /en/jobs)
function useHref() {
  const pathname = usePathname();
  const path = splitLocale(pathname).path;
  return (code: Locale) => lp(code, path);
}

// PC 위쪽 메뉴: 지구본 + 지금 언어 이름. 누르면 아래로 언어 목록
export function LanguageMenu({ lang, label, languages }: { lang: Locale; label: string; languages: LangOption[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const href = useHref();
  const current = languages.find((l) => l.code === lang)!;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: PointerEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="press flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-2 text-base font-semibold whitespace-nowrap text-navy-800 hover:bg-navy-50"
      >
        <GlobeIcon />
        <span lang={current.html}>{current.name}</span>
        <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="menu-panel absolute end-0 top-full z-50 mt-2 grid w-60 grid-cols-1 gap-0.5 rounded-lg border border-rule bg-paper p-1.5 shadow-[0_12px_32px_-12px_rgb(0_0_0/0.25)]">
          {languages.map((l) => (
            <li key={l.code}>
              <Link
                href={href(l.code)}
                hrefLang={l.html}
                lang={l.html}
                onClick={() => setOpen(false)}
                aria-current={l.code === lang ? "true" : undefined}
                className={`block rounded-md px-3 py-2.5 text-base font-semibold hover:bg-navy-50 ${l.code === lang ? "bg-navy-50 text-navy-800" : "text-ink"}`}
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// 휴대폰 메뉴 안: 언어를 두 줄로 펼쳐 둔다
export function LanguageList({ lang, languages, onPick }: { lang: Locale; languages: LangOption[]; onPick: () => void }) {
  const href = useHref();
  return (
    <ul className="mt-2 grid grid-cols-2 gap-2">
      {languages.map((l) => (
        <li key={l.code}>
          <Link
            href={href(l.code)}
            hrefLang={l.html}
            lang={l.html}
            onClick={onPick}
            aria-current={l.code === lang ? "true" : undefined}
            className={`press block rounded-md border px-3 py-2.5 text-base font-semibold ${l.code === lang ? "border-navy-900 bg-navy-900 text-white" : "border-rule text-ink"}`}
          >
            {l.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
