import { getAllPosts } from "@/lib/posts";
import { PostView, postMeta } from "@/views/blog";

// 소식 글. 글 내용은 content/blog/<slug>.md
export const dynamicParams = false;
export function generateStaticParams() {
  return getAllPosts("ko").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  return postMeta("ko", (await params).slug);
}

export default async function Page({ params }: PageProps<"/blog/[slug]">) {
  return <PostView lang="ko" slug={(await params).slug} />;
}
