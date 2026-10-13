import type { Metadata } from "next";
import { BlogPost } from "@/areas/blog/post";
import { getAllPosts, getPost } from "@/lib/posts";

// 글 목록에서 정적 페이지를 만든다. 글 화면은 src/areas/blog/post
export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post.title, description: post.summary };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  return <BlogPost slug={slug} />;
}
