import { company } from "@/lib/site";
import { getAllPosts } from "@/lib/posts";

// 소식 RSS (/blog/rss.xml). 네이버 서치어드바이저에 제출하면 새 글을 빨리 가져간다. 빌드할 때 파일로 만든다
export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function GET() {
  const base = company.siteUrl;
  const items = getAllPosts()
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${base}/blog/${p.slug}</link>
      <guid>${base}/blog/${p.slug}</guid>
      <category>${esc(p.category)}</category>
      <description>${esc(p.summary)}</description>
      <pubDate>${new Date(`${p.date}T09:00:00+09:00`).toUTCString()}</pubDate>
    </item>`,
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(company.title)} 소식</title>
    <link>${base}/blog</link>
    <description>경기광주·성남·천호 인력사무소 태산크루의 물류 알바 가이드와 현장 소식</description>
    <language>ko</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
