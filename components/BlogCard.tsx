import Link from "next/link";
import type { Post } from "@/lib/blog";
import { ArrowRight } from "@/components/Icons";

export default function BlogCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex flex-col rounded-2xl border border-line bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-sapphire/30 hover:shadow-lift ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide">
        <span className="rounded-full bg-sapphire/10 px-3 py-1 text-sapphire">{post.category}</span>
        <span className="text-ink-muted">{post.readTime}</span>
      </div>
      <h3 className={`mt-4 font-serif font-semibold text-ink transition-colors group-hover:text-sapphire ${featured ? "text-2xl" : "text-xl"}`}>
        {post.title}
      </h3>
      <p className="mt-3 flex-1 leading-relaxed text-ink-muted">{post.excerpt}</p>
      <div className="mt-5 flex items-center justify-between">
        <time dateTime={post.date} className="text-sm text-ink-muted">{post.dateLabel}</time>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-sapphire transition-colors group-hover:text-amber-dark">
          Read <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
