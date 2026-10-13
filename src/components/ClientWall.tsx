import { clients } from "@/lib/site";

// 고객사 로고 벽: 정사각 타일을 1px 선으로 이어 붙인다
export function ClientWall() {
  return (
    <ul className="grid grid-cols-4 gap-px overflow-hidden rounded-lg border border-rule bg-rule sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-11">
      {clients.map((c) => (
        <li key={c.name} className="aspect-square bg-white">
          {c.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={`/images/clients/${c.logo}.jpg`} alt={c.name} width={300} height={313} loading="lazy" className="h-full w-full object-contain" />
          ) : (
            <span className="flex h-full w-full items-center justify-center p-2 text-center text-base font-extrabold text-navy-900 md:text-lg">{c.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
