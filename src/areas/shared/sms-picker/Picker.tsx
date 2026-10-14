"use client";

import { useEffect, useRef, useState } from "react";
import { CloseIcon, MessageIcon } from "@/components/icons";

// "문자 보내기"를 누르면 지점 고르는 창이 뜬다 (모바일: 아래에서 올라오는 시트 / PC: 가운데 창)
// 지점을 고르면 그 지점 대표 번호로, 양식(희망 집결지에 그 지점 이름)이 채워진 문자 창이 열린다
export type PickerItem = { slug: string; name: string; sub: string; phone: string; href: string };
export type PickerText = { button: string; title: string; desc: string; close: string };

export function SmsPicker({ items, text }: { items: PickerItem[]; text: PickerText }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const show = () => {
    ref.current?.showModal();
    setOpen(true);
  };
  const close = () => ref.current?.close();

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
        onClick={show}
        aria-haspopup="dialog"
        className="press mt-6 flex min-h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-point px-6 text-lg font-extrabold text-navy-950 hover:bg-point-dark"
      >
        <MessageIcon /> {text.button}
      </button>

      <dialog
        ref={ref}
        aria-labelledby="sms-picker-title"
        onClose={() => setOpen(false)}
        // 바깥(어두운 배경)을 누르면 닫힌다. 안쪽 내용은 div가 받으므로 target이 dialog 자신일 때만 바깥
        onClick={(e) => e.target === e.currentTarget && close()}
        className="dock-panel m-0 mt-auto max-h-[85svh] w-full max-w-none overflow-y-auto rounded-t-2xl bg-paper text-ink backdrop:bg-navy-950/50 lg:m-auto lg:max-w-md lg:rounded-2xl"
      >
        <div className="p-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] md:p-7">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <p id="sms-picker-title" className="text-xl font-extrabold text-navy-950 md:text-2xl">
                {text.title}
              </p>
              <p className="mt-1 text-base text-muted md:text-lg">{text.desc}</p>
            </div>
            <button type="button" onClick={close} className="-mt-1 -me-2 flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-muted hover:bg-navy-50">
              <CloseIcon className="h-6 w-6" />
              <span className="sr-only">{text.close}</span>
            </button>
          </div>

          <ul className="mt-5 grid gap-3">
            {items.map((b) => (
              <li key={b.slug}>
                <a
                  href={b.href}
                  onClick={close}
                  className="press flex min-h-16 items-center gap-4 rounded-xl border-2 border-rule px-5 py-3.5 text-navy-950 hover:border-navy-700"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-extrabold">{b.name}</span>
                    <span className="block text-base text-muted">{b.sub}</span>
                  </span>
                  <span dir="ltr" className="text-base font-bold whitespace-nowrap text-navy-700 tabular-nums md:text-lg">{b.phone}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </>
  );
}
