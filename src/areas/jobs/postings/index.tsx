import { Container } from "@/components/ui";
import { recruitPosts } from "@/lib/site";
import { PostingCard, PostingsJsonLd } from "@/areas/shared/posting-card";

export function JobsPostings() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-[1.75rem] font-extrabold text-navy-950 md:text-[2.5rem]">지금 모집 중인 공고</h2>
          <p className="text-lg text-muted md:text-xl">전단을 누르면 크게 보여요</p>
        </div>
        <ul className="reveal-each mt-8 grid gap-5 sm:grid-cols-2 md:mt-10 xl:grid-cols-3">
          {recruitPosts.map((p) => (
            <li key={p.slug}>
              <PostingCard p={p} />
            </li>
          ))}
        </ul>
        <PostingsJsonLd posts={recruitPosts} />
      </Container>
    </section>
  );
}
