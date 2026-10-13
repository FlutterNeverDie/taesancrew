import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero } from "@/components/ui";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = { title: "소식" };

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero title="태산크루 소식" desc="현장 이야기, 기업 인사이트, 구직 가이드를 전합니다." />
      <section className="py-16 md:py-24">
        <Container className="max-w-4xl">
          <ul className="divide-y divide-rule border-y border-rule">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group block py-7">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="rounded-full bg-navy-50 px-3 py-1 font-bold text-navy-700">{p.category}</span>
                    <span className="text-muted">{p.date}</span>
                  </div>
                  <h2 className="mt-3 text-xl font-bold text-navy-950 group-hover:text-navy-700 md:text-2xl">{p.title}</h2>
                  <p className="mt-2 text-muted">{p.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
