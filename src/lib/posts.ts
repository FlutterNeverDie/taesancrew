import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { Locale } from "@/i18n/config";

// content/blog/*.md 파일 하나가 한국어 글 하나. 파일 이름이 주소(slug)가 된다.
// 다른 언어는 content/blog/<언어 코드>/<같은 파일 이름>.md (없으면 한국어 원문을 보여준다)
const root = path.join(process.cwd(), "content/blog");

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string; // 한국어 분류 이름 (화면에는 사전의 blog.categories로 번역해서 보인다)
  summary: string;
};

function fileFor(slug: string, lang: Locale) {
  const translated = path.join(root, lang, `${slug}.md`);
  if (lang !== "ko" && fs.existsSync(translated)) return translated;
  return path.join(root, `${slug}.md`);
}

function read(slug: string, lang: Locale) {
  const ko = matter(fs.readFileSync(path.join(root, `${slug}.md`), "utf8"));
  const { data, content } = lang === "ko" ? ko : matter(fs.readFileSync(fileFor(slug, lang), "utf8"));
  const post: Post = {
    slug,
    title: data.title,
    // 날짜·분류는 한국어 원문 기준 (번역본과 어긋나지 않게)
    date: ko.data.date instanceof Date ? ko.data.date.toISOString().slice(0, 10) : String(ko.data.date),
    category: ko.data.category,
    summary: data.summary ?? "",
  };
  return { post, content };
}

export function getAllPosts(lang: Locale = "ko"): Post[] {
  return fs
    .readdirSync(root)
    .filter((f) => f.endsWith(".md"))
    .map((f) => read(f.replace(/\.md$/, ""), lang).post)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string, lang: Locale = "ko") {
  const { post, content } = read(slug, lang);
  return { ...post, html: marked.parse(content, { async: false }) };
}
