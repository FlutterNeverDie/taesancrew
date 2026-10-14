import Link from "next/link";
import { Container } from "@/components/ui";
import { getDict, lp, type Locale } from "@/i18n";

// 회사소개 묶음(회사소개·중점분야·지점안내) 페이지 상단 탭. 메뉴의 회사소개 하위 메뉴와 같은 구성
const tabs = [
  { href: "/about", key: "about" },
  { href: "/business", key: "business" },
  { href: "/branches", key: "branches" },
] as const;

export function AboutSubnav({ lang, current }: { lang: Locale; current: "about" | "business" | "branches" }) {
  const nav = getDict(lang).nav;
  return (
    <nav aria-label={nav.aboutMenu} className="sticky top-16 z-30 border-b border-rule bg-paper">
      <Container>
        <ul className="-mx-1 flex gap-1 overflow-x-auto py-2">
          {tabs.map((t) => {
            const active = t.key === current;
            return (
              <li key={t.key}>
                <Link
                  href={lp(lang, t.href)}
                  aria-current={active ? "page" : undefined}
                  className={`relative block rounded-md px-4 py-2.5 text-base font-bold whitespace-nowrap md:text-lg ${
                    active ? "text-white" : "text-muted hover:bg-navy-50 hover:text-navy-900"
                  }`}
                >
                  {/* 선택 표시: 페이지가 바뀌면 같은 이름(about-tab)끼리 이어져 다음 탭으로 미끄러진다.
                      글자에도 이름을 줘서 미끄러지는 표시 위에 글자가 보이게 한다 */}
                  {active && <span aria-hidden className="absolute inset-0 rounded-md bg-navy-900" style={{ viewTransitionName: "about-tab" }} />}
                  <span className="relative" style={{ viewTransitionName: `about-tab-label-${t.key}` }}>
                    {nav[t.key]}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}
