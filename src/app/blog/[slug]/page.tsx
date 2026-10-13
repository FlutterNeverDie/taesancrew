import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import { getAllPosts, getPost } from "@/lib/posts";

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
  const post = getPost(slug);

  return (
    <article className="py-14 md:py-20">
      <Container className="max-w-3xl">
        <Link href="/blog" className="text-base font-semibold text-navy-700 hover:underline">소식 목록으로</Link>
        <div className="mt-8 flex items-center gap-3 text-base">
          <span className="rounded-full bg-navy-50 px-3 py-1 font-bold text-navy-700">{post.category}</span>
          <span className="text-muted">{post.date}</span>
        </div>
        <h1 className="mt-4 text-3xl leading-snug font-extrabold text-navy-950 md:text-4xl">{post.title}</h1>
        <div className="prose-post mt-10 text-lg text-ink" dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </article>
  );
}
