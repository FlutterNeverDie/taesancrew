// 제목 글꼴(Paperlogy)을 사이트에서 실제로 쓰는 글자만 남겨 가볍게 만든다 (npm run build 전에 자동 실행: prebuild)
// 원본(한글 11,172자, 굵기마다 160KB)은 fonts-src/, 결과는 src/app/fonts/ (굵기마다 40KB 안팎)
// 결과 파일은 layout.tsx의 next/font/local이 읽는다. 내용이 바뀌면 파일 이름(해시)도 바뀌어서 방문자 브라우저에 예전 글꼴이 남지 않는다
// 남기는 글자: src/·content/ 안의 모든 한글 + 라틴 문자·숫자·문장부호
// 새 글을 쓰거나 문구를 바꾸면 빌드할 때 그 글자가 자동으로 들어간다 (dev 서버만 켜 둘 땐 `npm run fonts`)
import { readFile, writeFile, readdir } from "node:fs/promises";
import path from "node:path";
import subsetFont from "subset-font";

const root = path.resolve(import.meta.dirname, "..");

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (/\.(tsx?|md)$/.test(e.name)) yield p;
  }
}

const chars = new Set();
for (let c = 0x20; c < 0x250; c++) chars.add(String.fromCodePoint(c)); // 라틴 문자·숫자·기호
for (let c = 0x2000; c < 0x2c00; c++) chars.add(String.fromCodePoint(c)); // 문장부호·화살표 등
for (let c = 0x3000; c < 0x3040; c++) chars.add(String.fromCodePoint(c)); // 「」 같은 CJK 기호
for (const dir of ["src", "content"]) {
  for await (const f of walk(path.join(root, dir))) {
    for (const ch of (await readFile(f, "utf8")).match(/[가-힣ㄱ-ㆎ]/g) ?? []) chars.add(ch);
  }
}
const text = [...chars].join("");

for (const name of ["Paperlogy-7Bold", "Paperlogy-8ExtraBold"]) {
  const src = await readFile(path.join(root, "fonts-src", `${name}.woff2`));
  const out = await subsetFont(src, text, { targetFormat: "woff2" });
  await writeFile(path.join(root, "src", "app", "fonts", `${name}.woff2`), out);
  console.log(`글꼴 줄이기: ${name} ${Math.round(src.length / 1024)}KB → ${Math.round(out.length / 1024)}KB`);
}
