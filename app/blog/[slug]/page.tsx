"use client"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogCard, ProductCard } from "@/components/cards"
import { Button } from "@/components/ui/button"
import { blogPosts, amazonFinds } from "@/lib/data"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  const relatedProducts = amazonFinds
    .filter((p) => 
      post.category === "Fashion" ? p.category === "Fashion" :
      post.category === "Home Decor" ? p.category === "Home" :
      post.category === "Beauty" ? p.category === "Beauty" :
      true
    )
    .slice(0, 4)

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Article Header */}
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
              <div className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </div>
            </div>
          </header>

          {/* Featured Image */}
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

          {/* Article Content */}
          <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
            {/* Pinterest Pin Button */}
            <div className="mb-8 flex justify-end">
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.open(
                      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(post.image)}&description=${encodeURIComponent(post.title)}`,
                      "_blank",
                      "width=750,height=600"
                    )
                  }
                }}
                className="flex items-center gap-2 rounded-full bg-[#E60023] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#c41f1e]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
                Save to Pinterest
              </button>
            </div>

            {/* Article Body - Sample content */}
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
              <p>
                Creating a wardrobe that stands the test of time isn&apos;t about following every trend—it&apos;s about 
                investing in pieces that work harder for you. These timeless essentials form the foundation 
                of any well-curated closet, allowing you to create countless outfits with minimal effort.
              </p>

              <h2>1. The Perfect White Button-Down</h2>
              <p>
                A crisp white shirt is the ultimate chameleon piece. Tuck it into high-waisted trousers 
                for the office, tie it at the waist with jeans for weekend brunch, or layer it under a 
                cashmere sweater for effortless polish. Look for quality cotton or linen with thoughtful 
                details like mother-of-pearl buttons.
              </p>

              <h2>2. Classic Straight-Leg Jeans</h2>
              <p>
                Forget the trend cycle—a well-fitting pair of straight-leg jeans in a medium wash will 
                serve you for years. Look for quality denim with just a touch of stretch for comfort. 
                The straight-leg silhouette works with everything from sneakers to heels.
              </p>

              <h2>3. A Timeless Trench Coat</h2>
              <p>
                The trench coat has been a wardrobe staple for over a century for good reason. It&apos;s 
                practical yet polished, working equally well over a dress for the office or jeans for 
                weekend errands. Invest in a classic beige or camel shade that complements everything.
              </p>

              <h2>4. Quality Cashmere Sweater</h2>
              <p>
                A soft cashmere sweater in a neutral shade is the epitome of quiet luxury. Choose a 
                V-neck or crewneck style in black, cream, navy, or camel. Proper care will keep it 
                looking beautiful for years.
              </p>

              <blockquote>
                <p>
                  &quot;Style is a way to say who you are without having to speak.&quot; — Rachel Zoe
                </p>
              </blockquote>

              <h2>5. Little Black Dress</h2>
              <p>
                Every woman needs an LBD in her arsenal. Choose a simple, well-cut silhouette that 
                can be dressed up with heels and statement jewelry or down with flats and a denim 
                jacket. The key is finding a cut that flatters your figure.
              </p>

              <p>
                Remember, building a timeless wardrobe is a journey, not a destination. Focus on 
                quality over quantity, and choose pieces that make you feel confident and comfortable. 
                Your future self will thank you.
              </p>
            </div>

            {/* Author Bio */}
            <div className="mt-12 rounded-2xl border border-border bg-secondary/30 p-6 md:p-8">
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
                    alt="Author"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Written by VelvetNest</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Passionate about helping women discover their personal style and create beautiful, 
                    intentional lives. When not writing, you&apos;ll find me thrifting, redecorating, 
                    or enjoying a cozy evening at home.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Share */}
            <div className="mt-12 border-t border-border pt-8">
              <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Share this article
              </p>
              <div className="mt-4 flex items-center justify-center gap-4">
                <button
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.open(
                        `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(post.image)}&description=${encodeURIComponent(post.title)}`,
                        "_blank",
                        "width=750,height=600"
                      )
                    }
                  }}
                  className="rounded-full border border-border p-3 transition-colors hover:bg-secondary"
                  aria-label="Share on Pinterest"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                        "_blank",
                        "width=600,height=400"
                      )
                    }
                  }}
                  className="rounded-full border border-border p-3 transition-colors hover:bg-secondary"
                  aria-label="Share on Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.open(
                        `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`,
                        "_blank",
                        "width=600,height=400"
                      )
                    }
                  }}
                  className="rounded-full border border-border p-3 transition-colors hover:bg-secondary"
                  aria-label="Share on X"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    if (typeof window !== "undefined" && navigator.clipboard) {
                      navigator.clipboard.writeText(window.location.href)
                    }
                  }}
                  className="rounded-full border border-border p-3 transition-colors hover:bg-secondary"
                  aria-label="Copy link"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Shop the Look */}
        {relatedProducts.length > 0 && (
          <section className="border-t border-border bg-secondary/30 py-16">
            <div className="mx-auto max-w-7xl px-4">
              <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
                Shop the Look
              </h2>
              <p className="mx-auto mt-2 max-w-md text-center text-muted-foreground">
                Recreate this style with our curated picks
              </p>
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

        {/* Related Posts */}
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
