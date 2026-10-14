"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CloseIcon, GlobeIcon } from "@/components/icons";
import { lp, splitLocale, type Locale } from "@/i18n/config";

// code: 언어 코드, name: 그 나라 말 이름(한국어, English, 中文 …), html: lang 속성값
export type LangOption = { code: Locale; name: string; html: string };

// 언어 고르기: 🌐 + 지금 언어 버튼 → 창(PC: 가운데 3칸 격자 / 휴대폰: 아래에서 올라오는 2칸 격자).
// 13개 언어를 숨김 없이 한 번에 보여준다 (자기 언어를 바로 찾게). 고르면 지금 페이지의 같은 자리로 간다 (/jobs → /en/jobs)
export function LanguageMenu({
  lang,
  label,
  close,
  languages,
  block = false,
  onPicked,
}: {
  lang: Locale;
  label: string;
  close: string;
  languages: LangOption[];
  block?: boolean; // 휴대폰 메뉴 안: 가로로 꽉 찬 버튼
  onPicked?: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const path = splitLocale(usePathname()).path;
  const current = languages.find((l) => l.code === lang)!;

  const show = () => {
    ref.current?.showModal();
    setOpen(true);
  };
  const hide = () => ref.current?.close();

  // 열려 있는 동안 뒤 페이지가 스크롤되지 않게
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    return () => {
      html.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-label={label}
        onClick={show}
        className={`press flex cursor-pointer items-center gap-1.5 rounded-md text-base font-semibold whitespace-nowrap text-navy-800 hover:bg-navy-50 ${
          block ? "w-full justify-center border border-rule px-4 py-3" : "px-3 py-2"
        }`}
      >
        <GlobeIcon />
        <span lang={current.html}>{current.name}</span>
      </button>

      <dialog
        ref={ref}
        aria-label={label}
        onClose={() => setOpen(false)}
        // 바깥(어두운 배경)을 누르면 닫힌다
        onClick={(e) => e.target === e.currentTarget && hide()}
        className="dock-panel m-0 mt-auto max-h-[85svh] w-full max-w-none overflow-y-auto rounded-t-2xl bg-paper text-ink backdrop:bg-navy-950/50 lg:m-auto lg:max-w-2xl lg:rounded-2xl"
      >
        <div className="p-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] md:p-7">
          <div className="flex items-center gap-3">
            <GlobeIcon className="h-6 w-6 text-navy-700" />
            <p className="flex-1 text-xl font-extrabold text-navy-950 md:text-2xl">{label}</p>
            <button type="button" onClick={hide} className="-me-2 flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-muted hover:bg-navy-50">
              <CloseIcon className="h-6 w-6" />
              <span className="sr-only">{close}</span>
            </button>
          </div>
          <ul className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-3">
            {languages.map((l) => {
              const active = l.code === lang;
              return (
                <li key={l.code}>
                  <Link
                    href={lp(l.code, path)}
                    hrefLang={l.html}
                    lang={l.html}
                    onClick={() => {
                      hide();
                      onPicked?.();
                    }}
                    aria-current={active ? "true" : undefined}
                    className={`press flex min-h-14 items-center rounded-xl border-2 px-4 text-lg font-bold ${
                      active ? "border-navy-900 bg-navy-900 text-white" : "border-rule text-navy-950 hover:border-navy-700"
                    }`}
                  >
                    {l.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </dialog>
    </>
  );
}
