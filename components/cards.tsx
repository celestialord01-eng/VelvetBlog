"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  slug: string
  featured?: boolean
}

export function BlogCard({
  title,
  excerpt,
  image,
  category,
  date,
  slug,
  featured = false,
}: BlogCardProps) {
  return (
    <article className="group masonry-item">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative overflow-hidden rounded-lg bg-card">
          <div className={`relative ${featured ? "aspect-[3/4]" : "aspect-[4/5]"}`}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
          
          {/* Category badge */}
          <div className="absolute left-3 top-3">
            <span className="rounded-full bg-card/90 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur-sm">
              {category}
            </span>
          </div>

          {/* Pinterest save button */}
          <button
            className="absolute right-3 top-3 rounded-full bg-card/90 p-2 opacity-0 transition-all duration-300 hover:bg-accent group-hover:opacity-100"
            aria-label="Save to Pinterest"
            onClick={(e) => {
              e.preventDefault()
              window.open(
                `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.origin + "/blog/" + slug)}&media=${encodeURIComponent(image)}&description=${encodeURIComponent(title)}`,
                "_blank",
                "width=750,height=600"
              )
            }}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
            </svg>
          </button>
        </div>

        <div className="mt-4 space-y-2">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {date}
          </p>
          <h3 className="text-lg font-semibold leading-tight transition-colors group-hover:text-accent">
            {title}
          </h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {excerpt}
          </p>
        </div>
      </Link>
    </article>
  )
}

interface ProductCardProps {
  title: string
  price: string
  originalPrice?: string
  image: string
  link: string
  category: string
}

export function ProductCard({
  title,
  price,
  originalPrice,
  image,
  link,
  category,
}: ProductCardProps) {
  return (
    <article className="group masonry-item">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="block"
      >
        <div className="relative overflow-hidden rounded-lg bg-card">
          <div className="relative aspect-square">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          
          {/* Category badge */}
          <div className="absolute left-3 top-3">
            <span className="rounded-full bg-card/90 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur-sm">
              {category}
            </span>
          </div>

          {/* Shop button */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <span className="flex items-center justify-center gap-2 rounded-lg bg-primary py-2 text-sm font-medium text-primary-foreground">
              Shop Now <ExternalLink className="h-4 w-4" />
            </span>
          </div>
        </div>

        <div className="mt-4 space-y-1">
          <h3 className="line-clamp-2 text-sm font-medium leading-tight transition-colors group-hover:text-accent">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <span className="font-semibold">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>
        </div>
      </a>
    </article>
  )
}
