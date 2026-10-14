"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@/components/icons";

// 이미지를 화면 위에 크게 띄우는 창 (채용 전단, 등록증). 열릴 때 짧게 커지며 나타난다 (globals.css의 .modal)
// Esc, 바깥 클릭, 닫기 버튼으로 닫는다. 열려 있는 동안 뒤 페이지는 스크롤되지 않는다
export function Lightbox({ src, alt, onClose, closeLabel = "닫기" }: { src: string; alt: string; onClose: () => void; closeLabel?: string }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      opener?.focus(); // 닫으면 누른 자리로 포커스를 돌려준다
    };
  }, [onClose]);

  // body에 바로 그린다: 움직임 효과(transform)가 걸린 카드 안에 있으면 fixed 창이 카드 안에 갇히기 때문
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="modal fixed inset-0 z-50 flex items-center justify-center overscroll-contain bg-navy-950/90 p-4"
      onClick={onClose}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="max-h-full max-w-full rounded-md bg-paper" />
      <button
        ref={closeRef}
        type="button"
        aria-label={closeLabel}
        className="press absolute end-4 top-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-paper text-ink"
      >
        <CloseIcon className="h-6 w-6" />
      </button>
    </div>,
    document.body,
  );
}

// 썸네일(children)을 누르면 Lightbox로 크게 보여준다. 서버 컴포넌트에서도 감싸서 쓸 수 있다
export function ZoomImage({
  src,
  alt,
  className = "",
  children,
  closeLabel = "닫기",
  zoomLabel = "크게 보기",
}: {
  src: string;
  alt: string;
  className?: string;
  children: ReactNode;
  closeLabel?: string;
  zoomLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} aria-label={`${alt} ${zoomLabel}`} className={`block w-full cursor-zoom-in text-start ${className}`}>
        {children}
      </button>
      {open && <Lightbox src={src} alt={alt} closeLabel={closeLabel} onClose={() => setOpen(false)} />}
    </>
  );
}
