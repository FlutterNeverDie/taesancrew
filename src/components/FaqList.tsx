import type { Faq } from "@/lib/site";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="border-t-2 border-navy-900">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-rule">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-bold text-navy-950 [&::-webkit-details-marker]:hidden">
            {f.q}
            <span aria-hidden className="text-2xl leading-none text-navy-700 group-open:rotate-45">+</span>
          </summary>
          <p className="pb-6 text-lg leading-relaxed text-ink">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
