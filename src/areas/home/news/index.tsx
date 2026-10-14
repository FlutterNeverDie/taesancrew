import Link from "next/link";
import { Container, SectionTitle } from "@/components/ui";
import { getAllPosts } from "@/lib/posts";

export function HomeNews() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="py-20 md:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle title="태산크루 소식" />
          <Link href="/blog" className="mb-10 font-bold text-navy-700 underline decoration-2 underline-offset-4 md:mb-14">
            소식 전체 보기
          </Link>
        </div>
        <ul className="reveal-each border-t-2 border-navy-900">
          {posts.map((p) => (
            <li key={p.slug} className="border-b border-rule">
              <Link href={`/blog/${p.slug}`} className="group grid gap-1 py-6 md:grid-cols-[8rem_9rem_minmax(0,1fr)] md:items-baseline md:gap-6">
                <time dateTime={p.date} className="text-base text-muted tabular-nums">{p.date}</time>
                <span className="text-base font-bold text-navy-700">{p.category}</span>
                <span className="text-lg font-bold text-ink">
                  <span className="link-slide pb-0.5">{p.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
