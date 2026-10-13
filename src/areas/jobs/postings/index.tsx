import { Container } from "@/components/ui";
import { recruitPosts } from "@/lib/site";
import { RecruitGallery } from "./RecruitGallery";

export function JobsPostings() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-[1.75rem] font-extrabold text-navy-950 md:text-[2.5rem]">지금 모집 중인 공고</h2>
          <p className="text-lg text-muted md:text-xl">사진을 누르면 크게 보여요</p>
        </div>
        <div className="mt-8 md:mt-10">
          <RecruitGallery posts={recruitPosts} />
        </div>
      </Container>
    </section>
  );
}
