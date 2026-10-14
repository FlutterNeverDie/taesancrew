"use client";

import { useState } from "react";
import { Lightbox } from "@/components/Lightbox";

type Post = { src: string; branch: string; title: string };

export function RecruitGallery({ posts }: { posts: Post[] }) {
  const [open, setOpen] = useState<Post | null>(null);

  return (
    <>
      <ul className="reveal-each grid grid-cols-[repeat(2,minmax(0,1fr))] gap-4 md:grid-cols-[repeat(3,minmax(0,1fr))] xl:grid-cols-[repeat(4,minmax(0,1fr))]">
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

      {open && <Lightbox src={open.src} alt={`${open.branch} 채용 공고: ${open.title}`} onClose={() => setOpen(null)} />}
    </>
  );
}
