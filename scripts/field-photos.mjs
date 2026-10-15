// 현장 사진: content/photos/의 사진을 WebP로 줄여 public/images/field/에 만들고, 목록(manifest.json)을 쓴다
// 파일 이름 "01-제목.jpg" → 순서 01, 제목 "제목". 회사소개 페이지(src/areas/about/photos)가 목록을 읽는다
// npm run build 전에 자동 실행(prebuild). 결과 폴더는 git에 올리지 않는다
import { readdir, mkdir, rm, writeFile, readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const srcDir = path.join(root, "content", "photos");
const outDir = path.join(root, "public", "images", "field");

const files = (await readdir(srcDir)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort((a, b) => a.localeCompare(b, "ko", { numeric: true }));
await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

const photos = [];
for (const f of files) {
  const input = await readFile(path.join(srcDir, f));
  // 이름이 바뀌면 브라우저가 새로 받도록 내용 해시를 붙인다 (사진 캐시는 1주일)
  const hash = createHash("sha1").update(input).digest("hex").slice(0, 8);
  const name = `${String(photos.length + 1).padStart(2, "0")}-${hash}.webp`;
  // rotate(): 휴대폰 사진 방향 맞추기. 메타데이터(GPS 등)는 기본으로 지워진다
  const img = sharp(input).rotate().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82 });
  const { width, height } = await img.toFile(path.join(outDir, name));
  const title = path.parse(f).name.replace(/^\d+\s*[-_.]?\s*/, "").trim();
  photos.push({ src: `/images/field/${name}`, title, width, height });
}
await writeFile(path.join(outDir, "manifest.json"), JSON.stringify(photos, null, 2));
console.log(`현장 사진 ${photos.length}장 → public/images/field/`);
