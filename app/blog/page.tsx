import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/cards"
import { Button } from "@/components/ui/button"
import { blogPosts, categories } from "@/lib/data"

export const metadata: Metadata = {
  title: "Blog | VelvetNest - Fashion, Home & Lifestyle",
  description: "Explore our latest articles on fashion, home decor, beauty, self-care, and lifestyle. Find inspiration for your everyday life.",
  openGraph: {
    title: "Blog | VelvetNest",
    description: "Explore our latest articles on fashion, home decor, beauty, self-care, and lifestyle.",
  },
}

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const remainingPosts = blogPosts.filter((post) => post.id !== featuredPost?.id)

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              The VelvetNest Blog
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Stories & Inspiration
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Discover curated fashion inspiration, cozy home decor ideas, beauty tips, 
              and lifestyle wisdom to help you live your most beautiful life.
            </p>
          </div>
        </section>

        {/* Category Pills */}
        <section className="border-b border-border bg-background py-6">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/blog"
                className="rounded-full border border-primary bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors"
              >
                All Posts
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog?category=${category.slug}`}
                  className="rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:bg-secondary"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mx-auto max-w-7xl px-4 py-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Featured Article
            </p>
            <Link href={`/blog/${featuredPost.slug}`} className="group mt-6 block">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-card/90 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur-sm">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    {featuredPost.date}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-accent md:text-4xl">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {featuredPost.excerpt}
                  </p>
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 border-b border-foreground pb-1 font-medium transition-colors group-hover:border-accent group-hover:text-accent">
                      Read Article
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* All Posts - Masonry Grid */}
        <section className="border-t border-border bg-secondary/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Latest Articles
            </h2>
            <div className="masonry-grid mt-12">
              {remainingPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  category={post.category}
                  date={post.date}
                  slug={post.slug}
                  featured={post.featured}
                />
              ))}
            </div>
            {/* Load more placeholder */}
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-primary py-16 text-primary-foreground md:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Never Miss a Post
            </h2>
            <p className="mx-auto mt-4 max-w-md text-primary-foreground/80">
              Subscribe to get the latest articles, styling tips, and exclusive finds 
              delivered straight to your inbox.
            </p>
            <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border-0 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
                required
              />
              <Button variant="secondary" size="lg" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
