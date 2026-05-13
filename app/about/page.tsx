import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Youtube, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About | VelvetNest - Fashion, Home & Lifestyle Blog",
  description: "Learn about VelvetNest and the passion behind curating fashion inspiration, home decor ideas, and lifestyle content.",
  openGraph: {
    title: "About | VelvetNest",
    description: "Learn about VelvetNest and the passion behind curating fashion inspiration, home decor ideas, and lifestyle content.",
  },
}

const values = [
  {
    title: "Intentional Living",
    description: "I believe in choosing quality over quantity—whether that&apos;s in our closets, our homes, or our daily routines.",
  },
  {
    title: "Accessible Style",
    description: "Looking put-together shouldn&apos;t break the bank. I share affordable finds alongside investment pieces.",
  },
  {
    title: "Authentic Recommendations",
    description: "Every product I recommend is something I genuinely use and love. No sponsored content that doesn&apos;t align with my values.",
  },
  {
    title: "Cozy Aesthetics",
    description: "Life should feel beautiful. I&apos;m drawn to warm, inviting spaces and timeless style that makes you feel at home.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-secondary/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="order-2 lg:order-1">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  About VelvetNest
                </p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                  Hi, I&apos;m So Glad You Found Me
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Welcome to VelvetNest—my cozy corner of the internet where I share everything 
                  I&apos;m passionate about: timeless fashion, beautiful home spaces, and living 
                  life with intention and style.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  I started this blog as a creative outlet to document my journey toward building 
                  a life that feels both beautiful and authentic. What began as a hobby has grown 
                  into a community of like-minded women who believe that everyday moments deserve 
                  a touch of elegance.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <Link
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border p-3 text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
                    aria-label="Pinterest"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border p-3 text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border p-3 text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80"
                      alt="About VelvetNest"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl border-2 border-accent/30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Story */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
              My Story
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Growing up, I was always the friend people came to for outfit advice or home 
                decor recommendations. There&apos;s something deeply satisfying about helping 
                someone find the perfect piece—whether it&apos;s a dress that makes them feel 
                confident or a throw pillow that ties their living room together.
              </p>
              <p>
                After years of sharing recommendations through text messages and Instagram DMs, 
                I decided to create VelvetNest as a place where I could curate all my favorite 
                finds in one beautiful space. The name came from my love of soft, luxurious 
                textures and the feeling of creating a welcoming nest—a home that feels like 
                a warm embrace.
              </p>
              <p>
                Today, VelvetNest has grown into a thriving community of women who share my 
                passion for thoughtful style and intentional living. Whether you&apos;re here 
                for outfit inspiration, home decor ideas, or just some cozy content to scroll 
                through with your morning coffee, I&apos;m so happy you&apos;re here.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-y border-border bg-secondary/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
              What I Believe In
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-border bg-card p-8"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-lg font-semibold text-accent">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Find */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
              What You&apos;ll Find Here
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Link href="/blog?category=fashion" className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80"
                    alt="Fashion content"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-semibold text-primary-foreground">
                      Fashion & Style
                    </h3>
                    <p className="mt-2 text-sm text-primary-foreground/80">
                      Capsule wardrobe tips, outfit ideas, and style inspiration for every season.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/blog?category=home-decor" className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80"
                    alt="Home decor content"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-semibold text-primary-foreground">
                      Home Decor
                    </h3>
                    <p className="mt-2 text-sm text-primary-foreground/80">
                      Creating cozy, beautiful spaces that feel like home on any budget.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/amazon-finds" className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80"
                    alt="Beauty content"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-semibold text-primary-foreground">
                      Beauty & Self Care
                    </h3>
                    <p className="mt-2 text-sm text-primary-foreground/80">
                      Skincare routines, wellness tips, and products that actually work.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Work With Me */}
        <section className="border-t border-border bg-secondary/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Collaborations
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Work With Me
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                I partner with brands that align with VelvetNest&apos;s values and aesthetic. 
                If you&apos;re interested in collaborating, I&apos;d love to hear from you.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="mailto:hello@velvetnest.com">
                    <Mail className="mr-2 h-4 w-4" />
                    hello@velvetnest.com
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
