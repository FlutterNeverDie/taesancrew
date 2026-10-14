import Link from "next/link";
import { Container } from "@/components/ui";
import { branches, type Branch } from "@/lib/site";
import { brandName, branchText, fmt, getDict, lp, type Locale } from "@/i18n";

// 다른 지점으로 가는 카드 (지점 페이지끼리 서로 이어 준다)
export function BranchOthers({ lang, b }: { lang: Locale; b: Branch }) {
  const d = getDict(lang);
  const others = branches.filter((x) => x.slug !== b.slug);
  return (
    <section className="py-16 md:py-24">
      <Container>
        <h2 className="text-[1.75rem] font-extrabold text-navy-950 md:text-[2.25rem]">{d.branchPage.others}</h2>
        <ul className="reveal-each mt-8 grid gap-4 md:grid-cols-2">
          {others.map((o) => {
            const ot = branchText(d, o.slug);
            return (
              <li key={o.slug}>
                <Link href={lp(lang, `/branches/${o.slug}`)} className="lift block rounded-lg border border-rule bg-paper p-6 md:p-7">
                  <p className="text-base font-bold text-navy-700">{fmt(d.branchPage.eyebrow, { region: ot.region })}</p>
                  <p className="mt-1 text-2xl font-extrabold text-navy-950">
                    {brandName(o.brand, lang)} {ot.name}
                  </p>
                  <p className="mt-2 text-lg text-muted">{ot.landmark || o.address}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
