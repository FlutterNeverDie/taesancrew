// 페이지별 카톡·문자 미리보기 이미지(1200×630)를 만든다 (npm run build 전에 자동 실행: prebuild)
// 결과는 public/og/<이름>.png (빌드할 때마다 새로 만들어서 git에는 올리지 않는다)
// 한국어 페이지만 만든다. 제목 글꼴(Paperlogy)에 러시아·태국·아랍 글자 등이 없어서 다른 언어 페이지는 public/og.png를 쓴다
// 어떤 페이지가 어떤 이미지를 쓰는지는 src/i18n/meta.ts의 ogImage. 메인은 public/og.png 그대로
// 글자는 사전(src/i18n/dict/ko.ts)·지점 정보(src/lib/site.ts)·소식 글에서 가져온다. 색은 globals.css 토큰을 hex로 옮긴 값
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import subsetFont from "subset-font";
import { ko } from "../src/i18n/dict/ko";
import { getVisa } from "../src/i18n/visa";
import { branches, company } from "../src/lib/site";
import { getAllPosts } from "../src/lib/posts";
import { ogStaticPages } from "../src/i18n/og";

const root = path.resolve(import.meta.dirname, "..");
const outDir = path.join(root, "public", "og");

// globals.css 토큰 (oklch → hex)
const color = { navy900: "#001a4a", navy950: "#01143d", point: "#fccf28", sky: "#6db2e3", navy200: "#c2d3e8", white: "#ffffff" };

type Card = { eyebrow: string; title: string; sub?: string; phone?: string };

// 사전 제목에서 "검색용 꼬리"(| 뒤)를 떼고 카드에 쓸 부분만
const head = (s: string) => s.split(" | ")[0];

const visa = getVisa("ko");
const cards: Record<string, Card> = {
  about: { eyebrow: ko.nav.about, title: head(ko.meta.aboutTitle).split(" - ")[1] ?? ko.nav.about, sub: "경기광주 · 성남 수진역 · 천호" },
  business: { eyebrow: ko.nav.business, title: head(ko.meta.businessTitle), sub: "기업 인력 요청 · 도급 상담", phone: company.mainPhone },
  jobs: { eyebrow: ko.nav.jobs, title: "물류센터 알바 · 1일 알바 모집", sub: "초보 가능 · 출퇴근 셔틀 · 문자 한 통으로 지원" },
  branches: { eyebrow: ko.nav.branches, title: "경기광주 · 성남 수진역 · 천호역", sub: "오가기 편한 지점으로 연락하세요", phone: company.mainPhone },
  blog: { eyebrow: ko.nav.blog, title: head(ko.meta.blogTitle).split(" - ")[1] ?? ko.nav.blog },
  faq: { eyebrow: ko.nav.faq, title: "지원 방법 · 급여일 · 잔업 수당", sub: "자주 묻는 질문을 모았습니다" },
  contact: { eyebrow: ko.nav.contact, title: head(ko.meta.contactTitle), sub: "본점 대표가 직접 연락드립니다", phone: company.mainPhone },
  awards: { eyebrow: ko.nav.about, title: head(ko.meta.awardsTitle), sub: "지점별 등록번호를 확인하세요" },
  visa: { eyebrow: visa.eyebrow, title: visa.title.join(" "), sub: visa.updated },
};
for (const b of branches) {
  const t = ko.branches[b.slug as keyof typeof ko.branches];
  cards[`branches-${b.slug}`] = { eyebrow: b.brand, title: t.name, sub: t.landmark || b.address, phone: b.phone ?? undefined };
}
for (const p of getAllPosts("ko")) {
  cards[`blog-${p.slug}`] = { eyebrow: `${ko.nav.blog} · ${p.category}`, title: p.title };
}

// 만들 이미지와 meta.ts의 목록이 어긋나면 빌드를 멈춘다 (이미지 없는 주소가 나가지 않게)
const missing = ogStaticPages().filter((k) => !cards[k]);
if (missing.length) throw new Error(`미리보기 카드 글자가 없는 페이지: ${missing.join(", ")}`);

type El = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, ...children: (El | string | undefined | false)[]): El => ({
  type,
  props: { style: { display: "flex", ...style }, children: children.filter(Boolean) },
});

function card(c: Card, symbol: string): El {
  const size = c.title.length > 22 ? 64 : c.title.length > 14 ? 76 : 92;
  return h(
    "div",
    { width: 1200, height: 630, flexDirection: "column", background: color.navy900, fontFamily: "Paperlogy", color: color.white },
    h(
      "div",
      { flex: 1, flexDirection: "column", justifyContent: "center", padding: "0 96px" },
      h("div", { fontSize: 34, fontWeight: 700, color: color.point }, c.eyebrow),
      h("div", { marginTop: 22, fontSize: size, fontWeight: 800, lineHeight: 1.18, wordBreak: "keep-all", maxWidth: 1000 }, c.title),
      c.sub && h("div", { marginTop: 26, fontSize: 32, fontWeight: 700, color: color.navy200 }, c.sub),
    ),
    h(
      "div",
      { alignItems: "center", justifyContent: "space-between", padding: "0 96px 44px" },
      h(
        "div",
        { alignItems: "center", gap: 18 },
        { type: "img", props: { src: symbol, width: 64, height: 64 } },
        h("div", { fontSize: 30, fontWeight: 800 }, company.title),
      ),
      c.phone && h("div", { fontSize: 40, fontWeight: 800, color: color.point }, c.phone),
    ),
    h("div", { height: 16, background: color.point }),
  );
}

const allText = Object.values(cards).flatMap((c) => [c.eyebrow, c.title, c.sub ?? "", c.phone ?? ""]).join("") + company.title + "0123456789-·";
const font = async (file: string) =>
  subsetFont(await readFile(path.join(root, "fonts-src", file)), allText, { targetFormat: "truetype" });
const fonts = [
  { name: "Paperlogy", data: await font("Paperlogy-7Bold.woff2"), weight: 700 as const, style: "normal" as const },
  { name: "Paperlogy", data: await font("Paperlogy-8ExtraBold.woff2"), weight: 800 as const, style: "normal" as const },
];
const symbol = `data:image/svg+xml;base64,${(await readFile(path.join(root, "public/brand/taesan/symbol-white.svg"))).toString("base64")}`;

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
for (const [key, c] of Object.entries(cards)) {
  const svg = await satori(card(c, symbol) as never, { width: 1200, height: 630, fonts });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
  await writeFile(path.join(outDir, `${key}.png`), png);
}
console.log(`미리보기 이미지 ${Object.keys(cards).length}개 → public/og/`);
