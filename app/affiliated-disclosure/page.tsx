import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Affiliate Disclosure | VelvetNest",
  description: "Learn about how VelvetNest uses affiliate links and earns commissions from product recommendations.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Affiliate Disclosure
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Transparency is important to us. Here&apos;s how affiliate links work on VelvetNest.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4">
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
              
              {/* Quick Summary Box */}
              <div className="not-prose mb-12 rounded-2xl border border-border bg-secondary/30 p-6 md:p-8">
                <h2 className="text-xl font-semibold">The Short Version</h2>
                <p className="mt-4 text-muted-foreground">
                  VelvetNest contains affiliate links. When you click on these links and make a 
                  purchase, I may earn a small commission at no extra cost to you. I only recommend 
                  products I genuinely love and use. Your support helps me continue creating free 
                  content for this community.
                </p>
              </div>

              <h2>What Are Affiliate Links?</h2>
              <p>
                Affiliate links are special URLs that track when a reader clicks through from my 
                website to a retailer&apos;s site. If you make a purchase after clicking one of these 
                links, I receive a small commission from the retailer. This comes at absolutely 
                no additional cost to you—the price you pay is exactly the same whether you use 
                my link or go directly to the retailer&apos;s website.
              </p>

              <h2>Amazon Associates Program</h2>
              <p>
                VelvetNest is a participant in the Amazon Services LLC Associates Program, an 
                affiliate advertising program designed to provide a means for sites to earn 
                advertising fees by advertising and linking to Amazon.com.
              </p>
              <p>
                As an Amazon Associate, I earn from qualifying purchases. This means when you 
                click on an Amazon link on my site and make a purchase, I may receive a small 
                percentage of that sale.
              </p>

              <h2>Other Affiliate Partnerships</h2>
              <p>
                In addition to Amazon, VelvetNest may participate in other affiliate programs with:
              </p>
              <ul>
                <li>ShopStyle Collective</li>
                <li>RewardStyle / LTK</li>
                <li>Individual brand affiliate programs</li>
              </ul>
              <p>
                All affiliate relationships are disclosed in accordance with FTC guidelines.
              </p>

              <h2>My Commitment to You</h2>
              <p>
                I want to be completely transparent about how I earn income from this blog while 
                maintaining your trust:
              </p>
              <ul>
                <li>
                  <strong>Honest recommendations:</strong> I only recommend products I have 
                  personally used, thoroughly researched, or genuinely believe in. My opinions 
                  are never for sale.
                </li>
                <li>
                  <strong>No inflated prices:</strong> Using my affiliate links never costs you 
                  more than buying directly from the retailer.
                </li>
                <li>
                  <strong>Clear disclosure:</strong> Affiliate links are clearly identified 
                  throughout the site, often with phrases like &quot;affiliate link&quot; or through 
                  disclosure banners.
                </li>
                <li>
                  <strong>Quality over commissions:</strong> I never recommend a product simply 
                  because it offers a higher commission. My recommendations are based solely on 
                  quality and value.
                </li>
              </ul>

              <h2>Why I Use Affiliate Links</h2>
              <p>
                Creating content for VelvetNest takes significant time and resources—from 
                researching and testing products to photographing, writing, and maintaining 
                the website. Affiliate income helps offset these costs and allows me to:
              </p>
              <ul>
                <li>Keep the blog free for all readers</li>
                <li>Continue creating high-quality content</li>
                <li>Test and review new products</li>
                <li>Maintain and improve the website</li>
              </ul>

              <h2>How to Identify Affiliate Links</h2>
              <p>
                On VelvetNest, affiliate links may be identified by:
              </p>
              <ul>
                <li>Disclosure statements at the top or bottom of posts</li>
                <li>Text noting &quot;affiliate link&quot; near the link</li>
                <li>Disclosure banners on shopping pages</li>
                <li>Links that redirect through affiliate networks</li>
              </ul>

              <h2>Your Choice</h2>
              <p>
                You are under no obligation to use my affiliate links. If you prefer, you can 
                always go directly to a retailer&apos;s website to make your purchase. However, 
                if you find my content helpful and want to support VelvetNest at no cost to you, 
                using my affiliate links is a wonderful way to do so.
              </p>

              <h2>Questions?</h2>
              <p>
                If you have any questions about affiliate links or this disclosure, please don&apos;t 
                hesitate to reach out. You can contact me through the{" "}
                <Link href="/contact">Contact Page</Link> or email me at{" "}
                <a href="mailto:hello@velvetnest.com">hello@velvetnest.com</a>.
              </p>

              <p className="mt-8 text-sm">
                This disclosure is in accordance with the Federal Trade Commission&apos;s 16 CFR 
                Part 255: Guides Concerning the Use of Endorsements and Testimonials in Advertising.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
