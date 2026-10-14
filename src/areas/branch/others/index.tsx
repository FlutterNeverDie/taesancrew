import Link from "next/link";
import { Container } from "@/components/ui";
import { branches, type Branch } from "@/lib/site";

// 다른 지점으로 가는 카드 (지점 페이지끼리 서로 이어 준다)
export function BranchOthers({ b }: { b: Branch }) {
  const others = branches.filter((x) => x.slug !== b.slug);
  return (
    <section className="py-16 md:py-24">
      <Container>
        <h2 className="text-[1.75rem] font-extrabold text-navy-950 md:text-[2.25rem]">다른 지점</h2>
        <ul className="reveal-each mt-8 grid gap-4 md:grid-cols-2">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/branches/${o.slug}`} className="lift block rounded-lg border border-rule bg-paper p-6 md:p-7">
                <p className="text-base font-bold text-navy-700">{o.region} 인력사무소</p>
                <p className="mt-1 text-2xl font-extrabold text-navy-950">
                  {o.brand} {o.name}
                </p>
                <p className="mt-2 text-lg text-muted">{o.landmark ?? o.address}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
