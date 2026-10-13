"use client";

import { useState } from "react";

type Post = { src: string; branch: string; title: string };

export function RecruitGallery({ posts }: { posts: Post[] }) {
  const [open, setOpen] = useState<Post | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {posts.map((p) => (
          <button key={p.src} type="button" onClick={() => setOpen(p)} className="group overflow-hidden rounded-2xl bg-white text-left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={p.title} loading="lazy" className="aspect-[2/3] w-full bg-navy-100 object-contain transition group-hover:scale-[1.02]" />
            <div className="p-4">
              <p className="text-xs font-bold text-navy-700">{p.branch}</p>
              <p className="mt-1 font-bold text-navy-950">{p.title}</p>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setOpen(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={open.src} alt={open.title} className="max-h-full max-w-full rounded-lg" />
          <button type="button" aria-label="닫기" className="absolute top-4 right-4 h-11 w-11 rounded-full bg-white text-2xl font-bold">
            ×
          </button>
        </div>
      )}
    </>
  );
}
