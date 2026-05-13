import Link from "next/link"
import { Instagram, Youtube, Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const footerLinks = {
  explore: [
    { href: "/blog", label: "Blog" },
    { href: "/amazon-finds", label: "Amazon Finds" },
    { href: "/blog?category=fashion", label: "Fashion" },
    { href: "/blog?category=home-decor", label: "Home Decor" },
    { href: "/blog?category=beauty", label: "Beauty" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      {/* Newsletter section */}
      <div className="border-b border-border bg-secondary/50 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Join the VelvetNest Community
          </h3>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Subscribe for exclusive style tips, home inspiration, and early access to our favorite finds.
          </p>
          <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border-border bg-card"
              required
            />
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Subscribe
            </Button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">
            No spam, unsubscribe anytime. Read our{" "}
            <Link href="/privacy-policy" className="underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-semibold tracking-tight">VelvetNest</h2>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Your cozy corner of the internet for curated fashion, home decor inspiration, 
              and lifestyle tips. We believe in living beautifully, one intentional choice at a time.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border p-2 text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
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
                className="rounded-full border border-border p-2 text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border p-2 text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:hello@velvetnest.com"
                className="rounded-full border border-border p-2 text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Explore links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest">Explore</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest">Company</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear()} VelvetNest. All rights reserved.</p>
          <p>
            Made with love for beautiful living.
          </p>
        </div>
      </div>
    </footer>
  )
}
