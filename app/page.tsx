import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogCard, ProductCard } from "@/components/cards"
import { NewsletterPopup } from "@/components/newsletter-popup"
import { Button } from "@/components/ui/button"
import { blogPosts, amazonFinds, categories, shopFavorites } from "@/lib/data"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="animate-fade-up space-y-6 text-center lg:text-left">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Welcome to VelvetNest
                </p>
                <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                  <span className="block">Curated Style.</span>
                  <span className="block">Cozy Living.</span>
                  <span className="block text-accent">Inspired Life.</span>
                </h1>
                <p className="mx-auto max-w-md text-lg leading-relaxed text-muted-foreground lg:mx-0">
                  Your destination for elegant fashion inspiration, cozy home decor ideas, 
                  and thoughtful lifestyle tips. Let&apos;s create a life you love.
                </p>
                <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="/blog">Explore the Blog</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                    <Link href="/amazon-finds">Shop My Finds</Link>
                  </Button>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
                    alt="Fashion and lifestyle inspiration"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Floating cards */}
                <div className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-lg md:-left-8 md:p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Trending Now
                  </p>
                  <p className="mt-1 font-semibold">Spring Capsule Wardrobe</p>
                </div>
                <div className="absolute -right-4 top-8 rounded-xl bg-card p-4 shadow-lg md:-right-8 md:p-6">
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-xs text-muted-foreground">Curated Finds</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Browse By Category
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Find Your Inspiration
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog?category=${category.slug}`}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h3 className="text-lg font-semibold text-primary-foreground">
                    {category.name}
                  </h3>
                  <p className="text-sm text-primary-foreground/80">
                    {category.count} articles
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Trending Posts - Masonry Layout */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Latest Articles
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                  Trending on VelvetNest
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden items-center gap-2 text-sm font-medium transition-colors hover:text-accent md:flex"
              >
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="masonry-grid mt-12">
              {blogPosts.slice(0, 6).map((post) => (
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
            <div className="mt-8 text-center md:hidden">
              <Button asChild variant="outline">
                <Link href="/blog">
                  View All Articles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Amazon Finds Preview */}
        <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Curated for You
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Amazon Finds
              </h2>
              <p className="mt-2 max-w-md text-muted-foreground">
                Affordable, stylish picks handpicked by me. Updated weekly.
              </p>
            </div>
            <Link
              href="/amazon-finds"
              className="hidden items-center gap-2 text-sm font-medium transition-colors hover:text-accent md:flex"
            >
              Shop All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="masonry-grid mt-12">
            {amazonFinds.slice(0, 4).map((product) => (
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
          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline">
              <Link href="/amazon-finds">
                Shop All Finds <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Shop My Favorites */}
        <section className="border-y border-border bg-secondary/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Personal Picks
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Shop My Favorites
              </h2>
              <p className="mx-auto mt-2 max-w-md text-muted-foreground">
                The pieces I reach for again and again. Quality items worth the investment.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {shopFavorites.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="group"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-card">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="w-full p-4 text-center">
                        <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium">
                          Shop Now <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-medium transition-colors group-hover:text-accent">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-muted-foreground">{item.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80"
                  alt="About VelvetNest"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                About VelvetNest
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Hi, I&apos;m So Glad You&apos;re Here
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Welcome to my cozy corner of the internet! I&apos;m passionate about helping women 
                discover their personal style, create beautiful homes, and live more intentionally. 
                Here you&apos;ll find curated outfit ideas, home decor inspiration, honest product reviews, 
                and lifestyle tips to help you create a life you love.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Whether you&apos;re looking for the perfect capsule wardrobe, your next Amazon haul, 
                or just some inspiration for your Sunday reset routine—you&apos;re in the right place.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">
                  Read My Story <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pinterest CTA */}
        <section className="border-t border-border bg-primary py-16 text-primary-foreground md:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              Follow Along on Pinterest
            </h2>
            <p className="mx-auto mt-4 max-w-md text-primary-foreground/80">
              Join 50K+ followers for daily inspiration. Save your favorite looks, 
              decor ideas, and product finds.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-8"
            >
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow @VelvetNest
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <NewsletterPopup />
    </div>
  )
}
