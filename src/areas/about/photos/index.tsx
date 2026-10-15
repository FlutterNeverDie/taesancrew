import fs from "node:fs";
import path from "node:path";
import { Container, Placeholder, SectionTitle } from "@/components/ui";
import { ZoomImage } from "@/components/Lightbox";
import { getDict, type Locale } from "@/i18n";

type Photo = { src: string; title: string; width: number; height: number };

// 현장 사진. 사진은 content/photos/ 폴더에 넣으면 빌드 때 scripts/field-photos.mjs가 WebP로 줄이고 목록을 만든다
// 파일 이름 "01-제목.jpg"의 제목이 사진 아래에 보인다 (모든 언어에서 같은 글자). 사진이 없으면 실제 사이트에선 숨기고, 로컬에서만 "준비 중" 자리 6칸
function readPhotos(): Photo[] {
  try {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), "public/images/field/manifest.json"), "utf8"));
  } catch {
    return [];
  }
}

export function AboutPhotos({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.about;
  const photos = readPhotos();
  // 사진이 하나도 없으면 실제 사이트에서는 섹션을 숨기고, 로컬 개발 서버에서만 "준비 중" 자리를 보여준다
  if (photos.length === 0 && process.env.NODE_ENV !== "development") return null;
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionTitle title={t.photosTitle} desc={t.photosDesc} />
        <ul className="reveal-each grid grid-cols-2 gap-x-3 gap-y-6 md:grid-cols-3 md:gap-x-5 md:gap-y-8">
          {photos.length > 0
            ? photos.map((p) => (
                <li key={p.src} className="min-w-0">
                  <figure>
                    <ZoomImage src={p.src} alt={p.title || t.photosTitle} closeLabel={d.common.close} zoomLabel={d.common.zoom} className="lift block rounded-lg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.src} alt="" width={p.width} height={p.height} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
                    </ZoomImage>
                    {p.title && <figcaption className="mt-3 text-base font-bold text-navy-950 md:text-lg">{p.title}</figcaption>}
                  </figure>
                </li>
              ))
            : Array.from({ length: 6 }, (_, i) => (
                <li key={i} className="min-w-0">
                  <Placeholder label={d.common.preparing} className="aspect-[4/3] rounded-lg" />
                </li>
              ))}
        </ul>
      </Container>
    </section>
  );
}
