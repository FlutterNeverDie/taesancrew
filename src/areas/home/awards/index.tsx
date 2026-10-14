import Link from "next/link";
import { Container, Placeholder, SectionTitle } from "@/components/ui";
import { branches } from "@/lib/site";
import { ZoomImage } from "@/components/Lightbox";

// 메인의 등록증 미리보기 (예전 "수상과 인증" 자리). 수상·감사패를 받으면 다시 같이 보여준다
export function HomeAwards() {
  return (
    <section className="bg-navy-50 py-20 md:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle title="유료직업소개소 등록증" desc="세 지점 모두 관할 관청에 정식 등록된 직업소개소입니다." />
          <Link href="/awards" className="mb-10 ml-auto text-lg font-bold whitespace-nowrap text-navy-700 underline decoration-2 underline-offset-4 md:mb-14">
            크게 보기
          </Link>
        </div>
        <ul className="reveal-each grid grid-cols-3 gap-3 md:gap-5">
          {branches.map((b) => (
            <li key={b.slug} className="min-w-0">
              {/* 등록증이 있으면 그 자리에서 크게, 없으면 "준비 중" */}
              {b.licenseImage ? (
                <ZoomImage src={b.licenseImage} alt={`${b.brand} ${b.name} 유료직업소개사업 등록증`} className="lift rounded-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.licenseImage} alt="" width={1200} height={1698} loading="lazy" className="aspect-[1/1.414] w-full rounded-lg border border-rule bg-paper object-cover object-top" />
                </ZoomImage>
              ) : (
                <Placeholder label="준비 중" className="aspect-[1/1.414] bg-paper" />
              )}
              <p className="mt-3 text-base font-bold text-navy-950 md:text-lg">{b.name}</p>
              <p className="hidden text-base text-muted md:block">등록번호 {b.agencyNo ?? "준비 중"}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
