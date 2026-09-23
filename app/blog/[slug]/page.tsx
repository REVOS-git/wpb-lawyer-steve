import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost, type Block } from "@/lib/blog";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBg from "@/components/PageHeroBg";
import CtaBanner from "@/components/CtaBanner";
import { CheckIcon, ArrowRight } from "@/components/Icons";
import { siteConfig } from "@/lib/siteConfig";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="mt-10 font-serif text-2xl font-semibold text-ink">
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p key={i} className="mt-5 leading-relaxed text-ink">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mt-5 space-y-2.5">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 leading-relaxed text-ink">
              <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-amber-dark" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mt-5 space-y-3">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 leading-relaxed text-ink">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sapphire font-serif text-xs font-semibold text-white">
                {j + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <div key={i} className="mt-6 rounded-2xl border-l-4 border-amber bg-amber/5 p-5 leading-relaxed text-ink">
          {block.text}
        </div>
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: siteConfig.attorney },
    publisher: { "@type": "Organization", name: siteConfig.firmName },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative isolate overflow-hidden bg-sapphire">
        <PageHeroBg />
        <div className="relative mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.category }]} />
          <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide">
            <span className="rounded-full bg-white/10 px-3 py-1 text-amber-light">{post.category}</span>
            <span className="text-white/60">{post.readTime}</span>
          </div>
          <h1 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-white/70">
            By {siteConfig.attorney} · <time dateTime={post.date}>{post.dateLabel}</time>
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="border-l-4 border-sapphire/20 pl-5 font-serif text-xl italic leading-relaxed text-ink-muted">
          {post.excerpt}
        </p>
        <div className="mt-6">{post.body.map(renderBlock)}</div>

        {/* Disclaimer */}
        <div className="mt-12 rounded-2xl bg-cream/70 p-6 text-sm leading-relaxed text-ink-muted">
          <strong className="text-ink">A quick note:</strong> This article is general information about Florida law, not
          legal advice for your specific situation. Every case is different. For advice you can rely on, talk to an
          attorney about the facts of your case.
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-12 border-t border-line pt-10">
            <h2 className="font-serif text-xl font-semibold text-ink">Keep reading</h2>
            <div className="mt-5 space-y-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-line bg-white p-5 shadow-card transition-colors hover:border-sapphire/30"
                >
                  <span className="font-serif font-semibold text-ink group-hover:text-sapphire">{r.title}</span>
                  <ArrowRight className="h-5 w-5 shrink-0 text-sapphire" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <CtaBanner />
    </>
  );
}
