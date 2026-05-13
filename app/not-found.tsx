import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="flex flex-1 items-center justify-center py-24 md:py-32">
        <div className="mx-auto max-w-md px-4 text-center">
          <p className="text-6xl font-bold text-accent md:text-8xl">404</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-muted-foreground">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Let&apos;s get you back on track.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/">Go Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">Browse Blog</Link>
            </Button>
          </div>
          <div className="mt-12 border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">
              Looking for something specific? Try these popular pages:
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/amazon-finds"
                className="text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                Amazon Finds
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link
                href="/blog?category=fashion"
                className="text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                Fashion
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link
                href="/blog?category=home-decor"
                className="text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                Home Decor
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link
                href="/about"
                className="text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
