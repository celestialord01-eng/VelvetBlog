import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Star } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/cards"
import { Button } from "@/components/ui/button"
import { amazonFinds, shopFavorites } from "@/lib/data"

export const metadata: Metadata = {
  title: "Amazon Finds | VelvetNest - Curated Affordable Picks",
  description: "Discover my favorite Amazon finds for fashion, home decor, and beauty. Handpicked affordable products that look expensive.",
  openGraph: {
    title: "Amazon Finds | VelvetNest",
    description: "Discover my favorite Amazon finds for fashion, home decor, and beauty.",
  },
}

const filterCategories = [
  { label: "All", value: "all" },
  { label: "Fashion", value: "Fashion" },
  { label: "Home", value: "Home" },
  { label: "Beauty", value: "Beauty" },
]

export default function AmazonFindsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-secondary/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="text-center lg:text-left">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Curated Just for You
                </p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                  Amazon Finds
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  My handpicked collection of affordable pieces that look anything but. 
                  Updated weekly with new discoveries for your home, closet, and self-care routine.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent bg-accent/10 px-4 py-2 text-sm">
                  <Star className="h-4 w-4 text-accent" fill="currentColor" />
                  <span>Updated every week with new finds</span>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                      <Image
                        src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&q=80"
                        alt="Fashion finds"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-xl">
                      <Image
                        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80"
                        alt="Home decor finds"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-8 space-y-4">
                    <div className="relative aspect-square overflow-hidden rounded-xl">
                      <Image
                        src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80"
                        alt="Beauty finds"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                      <Image
                        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80"
                        alt="Style finds"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Affiliate Disclosure Banner */}
        <section className="border-b border-border bg-muted/50 py-4">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Disclosure:</span> This page contains affiliate links. 
              I may earn a small commission if you purchase through these links, at no extra cost to you.{" "}
              <Link href="/affiliate-disclosure" className="underline hover:text-foreground">
                Learn more
              </Link>
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-16 z-40 border-b border-border bg-background py-4 md:top-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {filterCategories.map((category) => (
                <button
                  key={category.value}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    category.value === "all"
                      ? "border border-primary bg-primary text-primary-foreground"
                      : "border border-border hover:border-primary hover:bg-secondary"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="masonry-grid">
              {amazonFinds.map((product) => (
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

            {/* Load More */}
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Load More Finds
              </Button>
            </div>
          </div>
        </section>

        {/* Shop My Favorites Section */}
        <section className="border-t border-border bg-secondary/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Worth the Splurge
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Shop My Favorites
              </h2>
              <p className="mx-auto mt-4 max-w-md text-muted-foreground">
                Quality pieces I reach for again and again. These are investment items that 
                have earned a permanent place in my home and closet.
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
                          Shop Now <ExternalLink className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {item.category}
                    </span>
                    <h3 className="mt-2 font-medium transition-colors group-hover:text-accent">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-muted-foreground">{item.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* How I Choose */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                How I Choose My Finds
              </h2>
              <p className="mt-4 text-muted-foreground">
                I personally test and curate every item you see here. Here&apos;s what I look for:
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                  <Star className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">Quality First</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Every item is vetted for quality. No flimsy materials or poor construction makes it to my list.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                  <svg className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold">Great Value</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  I look for pieces that punch above their price point—designer looks without the designer cost.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                  <svg className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold">Personal Testing</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  I order, try, and live with these products before recommending them to you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-primary py-16 text-primary-foreground md:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Get New Finds First
            </h2>
            <p className="mx-auto mt-4 max-w-md text-primary-foreground/80">
              Subscribe to be the first to know about new Amazon finds, sales, and exclusive deals.
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
