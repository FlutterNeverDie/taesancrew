"use client";

import { useEffect, useRef, useState } from "react";

type Post = { src: string; branch: string; title: string };

export function RecruitGallery({ posts }: { posts: Post[] }) {
  const [open, setOpen] = useState<Post | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <ul className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-4 md:grid-cols-[repeat(3,minmax(0,1fr))] xl:grid-cols-[repeat(4,minmax(0,1fr))]">
        {posts.map((p) => (
          <li key={p.src}>
            <button type="button" onClick={() => setOpen(p)} className="press block w-full cursor-pointer overflow-hidden rounded-lg border border-rule bg-paper text-left">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={`${p.branch} 채용 공고: ${p.title}`} loading="lazy" width={800} height={1200} className="aspect-[2/3] w-full bg-navy-100 object-contain" />
              <span className="block p-4">
                <span className="block text-base font-bold text-navy-700">{p.branch}</span>
                <span className="mt-1 block font-bold text-ink">{p.title}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          className="modal fixed inset-0 z-50 overscroll-contain flex items-center justify-center bg-navy-950/90 p-4"
          onClick={() => setOpen(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={open.src} alt={`${open.branch} 채용 공고: ${open.title}`} className="max-h-full max-w-full rounded-md" />
          <button
            ref={closeRef}
            type="button"
            aria-label="닫기"
            className="press absolute top-4 right-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-paper text-2xl font-bold text-ink"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
