import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

// content/blog/*.md 파일 하나가 글 하나. 파일 이름이 주소(slug)가 된다.
const dir = path.join(process.cwd(), "content/blog");

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
};

export const categories = ["공지", "현장 소식", "기업 인사이트", "구직 가이드"] as const;

function read(file: string) {
  const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
  const post: Post = {
    slug: file.replace(/\.md$/, ""),
    title: data.title,
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date),
    category: data.category,
    summary: data.summary ?? "",
  };
  return { post, content };
}

export function getAllPosts(): Post[] {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => read(f).post)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string) {
  const { post, content } = read(`${slug}.md`);
  return { ...post, html: marked.parse(content, { async: false }) };
}
