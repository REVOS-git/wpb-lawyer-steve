import type { Metadata } from "next";
import { posts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBg from "@/components/PageHeroBg";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Legal Resources & Blog | Kuveikis Injury Attorney",
  description:
    "Plain-English guides to Florida personal injury law — what to do after a crash, filing deadlines, comparative negligence, and knowing whether you have a case.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-sapphire">
        <PageHeroBg />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Legal resources &amp; guides
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
            Straightforward answers to the questions I hear most — written to help you understand your rights, not to
            sell you anything.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <BlogCard post={featured} featured />
          {rest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <CtaBanner heading="Reading up because something happened to you?" sub="You don't have to figure it out alone. Call me for a free, honest read on your situation — no obligation, no pressure." />
    </>
  );
}
