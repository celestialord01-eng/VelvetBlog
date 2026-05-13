        import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, Calendar } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogCard, ProductCard } from "@/components/cards"

import { blogPosts, amazonFinds } from "@/lib/data"

import ShareButtons from "./ShareButtons"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = params

  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Post Not Found | VelvetNest",
    }
  }

  return {
    title: `${post.title} | VelvetNest`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [post.image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = params

  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  const relatedProducts = amazonFinds
    .filter((p) =>
      post.category === "Fashion"
        ? p.category === "Fashion"
        : post.category === "Home Decor"
        ? p.category === "Home"
        : post.category === "Beauty"
        ? p.category === "Beauty"
        : true
    )
    .slice(0, 4)

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <article>
          <header className="mx-auto max-w-4xl px-4 py-12 md:py-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="mt-8">
              <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wider">
                {post.category}
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                5 min read
              </div>
            </div>
          </header>

          <div className="relative mx-auto aspect-[21/9] max-w-6xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>

          <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
            <ShareButtons post={post} />

            <div className="prose prose-lg max-w-none">
              <p>{post.excerpt}</p>

              <p>
                Creating a wardrobe that stands the test of time is about
                investing in versatile pieces that work across seasons and
                trends.
              </p>

              <h2>Timeless Style Essentials</h2>

              <p>
                Focus on quality basics, neutral palettes, and classic
                silhouettes that can be styled in multiple ways.
              </p>

              <blockquote>
                <p>
                  "Style is a way to say who you are without having to speak."
                </p>
              </blockquote>

              <p>
                Build slowly, buy intentionally, and prioritize confidence over
                trends.
              </p>
            </div>

            <div className="mt-12">
              <ShareButtons post={post} />
            </div>
          </div>
        </article>

        {relatedProducts.length > 0 && (
          <section className="border-t border-border bg-secondary/30 py-16">
            <div className="mx-auto max-w-7xl px-4">
              <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
                Shop the Look
              </h2>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    image={product.image}
                    link={product.link}
                    category={product.category}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {relatedPosts.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4">
              <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
                You Might Also Like
              </h2>

              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard
                    key={relatedPost.id}
                    title={relatedPost.title}
                    excerpt={relatedPost.excerpt}
                    image={relatedPost.image}
                    category={relatedPost.category}
                    date={relatedPost.date}
                    slug={relatedPost.slug}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
           }
