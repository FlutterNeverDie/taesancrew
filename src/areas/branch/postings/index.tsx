import Link from "next/link";
import { Container } from "@/components/ui";
import { recruitPosts, tel, type Branch } from "@/lib/site";
import { PostingCard, PostingsJsonLd } from "@/areas/shared/posting-card";

// 이 지점에서 지금 모집 중인 공고. 없으면 전화 문의 안내
export function BranchPostings({ b }: { b: Branch }) {
  const posts = recruitPosts.filter((p) => p.branchSlug === b.slug);
  return (
    <section className="bg-navy-50 py-16 md:py-24">
      <Container>
        <h2 className="text-[1.75rem] font-extrabold text-navy-950 md:text-[2.5rem]">{b.name} 모집 중인 일자리</h2>
        {posts.length ? (
          <>
            <ul className="reveal-each mt-8 grid gap-5 sm:grid-cols-2 md:mt-10 xl:grid-cols-3">
              {posts.map((p) => (
                <li key={p.slug}>
                  <PostingCard p={p} />
                </li>
              ))}
            </ul>
            <PostingsJsonLd posts={posts} />
          </>
        ) : (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink md:text-xl">
            지금 올라온 공고는 없지만, 연락 주시면 맞는 현장을 바로 안내합니다.{" "}
            {b.phone && (
              <a href={tel(b.phone)} className="font-bold whitespace-nowrap text-navy-800 underline underline-offset-4 tabular-nums">
                {b.phone}
              </a>
            )}
          </p>
        )}
        <p className="mt-8 text-lg">
          <Link href="/jobs" className="font-bold text-navy-700 underline decoration-2 underline-offset-4 hover:text-navy-900">
            전체 일자리와 근무 조건 보기
          </Link>
        </p>
      </Container>
    </section>
  );
}
